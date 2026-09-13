import { spawnSync } from "node:child_process";

process.env.NEXT_PUBLIC_TINA_BRANCH =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.GITHUB_BRANCH ||
  "main";

// Production must NEVER build the admin in local mode.
// (Prevents localhost:4001 from being baked into the deployed admin.)
process.env.TINA_PUBLIC_IS_LOCAL = "false";

// Give the production Tina build more headroom on small CI runners.
const priorNodeOptions = process.env.NODE_OPTIONS || "";
if (!priorNodeOptions.includes("--max-old-space-size")) {
  process.env.NODE_OPTIONS = `${priorNodeOptions} --max-old-space-size=8192`.trim();
}

const hasTinaCreds =
  Boolean(process.env.NEXT_PUBLIC_TINA_CLIENT_ID) &&
  Boolean(process.env.TINA_TOKEN);

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

// Kill any lingering Tina dev servers (ports 4001 and 9000) so the build can start cleanly.
if (process.platform === "win32") {
  spawnSync(
    "cmd",
    ["/c", "for /f \"tokens=5\" %a in ('netstat -aon ^| findstr :4001 :9000') do taskkill /F /PID %a"],
    { stdio: "ignore", shell: true }
  );
} else {
  spawnSync("bash", ["-lc", "fuser -k 4001/tcp 9000/tcp 2>/dev/null || true"], {
    stdio: "ignore",
    shell: true,
  });
}

// ALWAYS regenerate admin + GraphQL schema from tina/config.ts during deploy.
// Do not skip when creds are missing (Saragrahi skips and uses committed admin) —
// that leaves stale collection names and causes errors like:
// "Expected to find collection named shared" / schema mismatch on Vercel.
if (!hasTinaCreds) {
  console.warn(
    "NEXT_PUBLIC_TINA_CLIENT_ID and/or TINA_TOKEN not set. " +
      "Running tinacms build with --skip-cloud-checks so schema/admin still match config. " +
      "Set both env vars on Vercel for full Tina Cloud auth/editorial."
  );
} else {
  console.log("Tina credentials found — running production tinacms build…");
}

// NOTE: no --local flag. Cloud-oriented admin assets; TINA_PUBLIC_IS_LOCAL is false above.
if (hasTinaCreds) {
  run("npx", ["tinacms", "build"]);
} else {
  run("npx", ["tinacms", "build", "--skip-cloud-checks"]);
}

run("npx", ["next", "build"]);
