# PROJECT_RUN_SHEET — Heal Gurukuli

> System document generated from full repository analysis (`heal_gurukuli` v0.1.0).  
> Codebase footprint: **23 TSX modules**, **~4,135 LOC**, **17 App Router routes**, **0 API routes**, **0 `process.env` references**.

---

## 🏛️ CORE ARCHITECTURAL MATRIX

- **The Core Stack:**
  - **Frontend framework:** [Next.js 16.2.9](https://nextjs.org/) (App Router) on **React 19.2.4** / **react-dom 19.2.4**. Turbopack is the default bundler for both `next dev` and `next build` (build banner: `Next.js 16.2.9 (Turbopack)`).
  - **State management:** No global store (no Redux, Zustand, Context providers). All interactivity is **local `useState`** confined to three Client Component islands: `SiteNav`, `ClinicalImpactCharts`, `TestimonialCarousel`. The remaining **18/23 TSX files (78%)** are Server Components by default.
  - **Rendering strategy:** **Full static site generation (SSG).** Production `next build` emits **17/17 routes** as prerendered static HTML (`○ Static`). No `export const dynamic`, `revalidate`, or `runtime` overrides exist. No ISR, no per-request SSR, no streaming RSC data fetching (`fetch()` is absent from the codebase).
  - **Styling system:** **Tailwind CSS v4** via `@import "tailwindcss"` in `app/globals.css`, processed by `@tailwindcss/postcss`. Design tokens are declared in `@theme` / `@theme inline` blocks (`--color-navy`, `--color-canvas`, etc.) and consumed as utility classes (`bg-canvas`, `text-slate-mid`). Typography uses `next/font/google` — **Quicksand** (serif role) and **Raleway** (sans role) — self-hosted at build time with `display: "swap"`.
  - **Database / CMS layer:** **None.** All content — clinician bios, forum threads, crisis helplines, clinical metrics, navigation tree — is **inline TypeScript constants** inside page and component modules. Forms (`/contact/get-in-touch`, `/volunteer`) are presentational HTML `<form>` elements with **no `action` handler, no Server Actions, no backend endpoint**.
  - **Deployment targets:** **Vercel** (documented in `README.md`; `.vercel` is gitignored). `next.config.ts` is a passthrough default — no custom `output`, `images.domains`, or `redirects` configured. Static assets live in `/public` (~4.0 MB of raster images).

- **Critical Dependencies & Decoupling:**
  1. **`next` (16.2.9)** — Owns the entire request lifecycle: App Router file-based routing (`app/**/page.tsx`), root `layout.tsx` shell (`SiteNav` + `<main>` + `SiteFooter`), per-route `Metadata` exports for SEO, `next/image` responsive loading, `next/font` subsetting, and static page collection at build time. No custom middleware or `route.ts` handlers exist; the framework boundary is purely presentational.
  2. **`react` / `react-dom` (19.2.4)** — Hydrates only the three `"use client"` modules. Server Components render to static HTML; client bundles are code-split per island. React 19's concurrent features are available but the codebase uses only `useState`, `useEffect`, and `useRef`.
  3. **`tailwindcss` + `@tailwindcss/postcss` (^4)** — Zero runtime CSS-in-JS. PostCSS plugin (`postcss.config.mjs`) compiles `@theme` tokens into utility classes at build time. Decoupled from component logic: pages reference semantic token names (`navy`, `blue-soft`) rather than raw hex values.
  4. **`eslint-config-next` (16.2.9)** — Flat-config ESLint (`eslint.config.mjs`) extending `core-web-vitals` + `typescript` presets. Serves as the sole automated quality gate (no Jest/Vitest/Playwright in `package.json`).

---

## ⚡ MEASURE TWICE, CUT ONCE: COMPLETED WINS & METRICS

- **Quantifiable Performance Wins:**
  - **100% static route coverage:** All 17 routes (`/`, `/mission`, `/support`, `/clinicians`, `/contribute`, `/resources`, `/forum`, `/volunteer`, `/impact`, `/external-crisis-support`, `/contact/*`) pre-render at build time. Zero server compute per page view — CDN-eligible HTML.
  - **Client JS payload (post-build):** `.next/static/chunks` totals **~684 KB** across 10 hashed chunks. Largest single chunk: **227 KB** (`3peubv2924kx4.js`, framework/runtime). Interactive chart carousel + nav hydration share the remaining ~450 KB.
  - **Client/server component ratio:** **3 client / 23 total TSX = 13% client boundary surface.** Homepage ships as Server Component HTML; only `SiteNav`, `ClinicalImpactCharts` (nested under server `ClinicalImpact`), and `TestimonialCarousel` require hydration.
  - **Zero charting library tax:** `ClinicalImpactCharts` renders PHQ-9/GAD-7 timeline data as **inline SVG** with precomputed coordinate arrays (`phq9Points`, `gad7Points`). Avoids Recharts/D3/Chart.js (~50–200 KB gzip savings). Radial gauges use native `<circle strokeDashoffset>` — no canvas/WebGL.
  - **Image pipeline:** `next/image` used on 5 surfaces with explicit dimensions or `fill` + `sizes`:
    - Hero logo: `priority` flag (LCP preload), `width={1200} height={400}`.
    - Clinician portraits: `fill` + `sizes="(max-width: 768px) 100vw, 50vw"` inside `aspect-[3/2]` containers — responsive srcset without layout shift.
    - Nav conch icon: `priority` on sticky header.
  - **Font optimization:** `next/font/google` downloads and self-hosts only requested weights (`300–700`) and `latin` subset for two families. Eliminates render-blocking Google Fonts CSS request chain.
  - **Build pipeline timing (measured):** Turbopack compile **22.5 s** → TypeScript check **41 s** → static page generation (7 workers) **5.8 s** for 17 pages. No incremental ISR revalidation overhead.
  - **Data pipeline efficiency:** Content is **O(1) at runtime** — zero network round-trips for page data. Clinician array (4 entries), forum threads (4 mock entries), crisis helplines, and chart datasets are compile-time constants. Payload per page = HTML + CSS + minimal JS islands only.

- **Type Safety & Data Integrity:**
  - **TypeScript `strict: true`** (`tsconfig.json`) with `noEmit: true` (type-check delegated to `next build`). Path alias `@/*` maps to repo root.
  - **Domain interfaces guard content shape at compile time:**
    - `Clinician` (`app/clinicians/page.tsx`): `{ name, title, image, credentials[], bio, specialties[] }`.
    - `Thread` (`app/forum/page.tsx`): `{ id, title, category, replies, views, lastActive, isPinned?, author }`.
    - `NavItem` discriminated union (`app/components/SiteNav.tsx`): enforces either `{ href, label }` or `{ label, children[], parentHref }` — prevents malformed nav trees.
    - `ClinicalImpactProps`, `TestimonialCarouselProps`, `GovernanceBlockProps`, `ConchDividerProps`: optional override props with typed defaults.
    - `TabId` union (`"overview" | "before-after" | "timeline"`) in charts component.
  - **No runtime validation layer:** No Zod, Prisma, Pydantic, or `react-hook-form` + schema resolver. Forms rely on HTML5 `required` / `type="email"` only — **submissions are not wired** and will perform native browser validation then no-op.
  - **Metadata type safety:** Every route exports `export const metadata: Metadata` typed against `next` — title/description strings are compile-checked.
  - **Gap:** ESLint currently reports **2 `react/no-unescaped-entities` errors** in `app/contact/crisis-support/page.tsx` and **1 unused variable** in `ClinicalImpactCharts.tsx` (`timelineMonths`). These do not block `next build` but fail `npm run lint` intent.

---

## 💥 THE PROBLEM/SOLUTION LOG (THE WAR STORIES)

### War Story 1 — Logo White-Box Artifact on Transparent Background

- **The Friction Point:** Early hero and nav used raster logos with fake transparency (`mix-blend-multiply`, CSS filter hacks) against the `#f0f7ff` canvas. On varying backgrounds (sticky nav `bg-canvas-white/95`, hero center, footer), logos rendered with visible white bounding boxes — breaking brand presentation on the highest-traffic viewport real estate.
- **The Engineering Answer:** Commit `3fef2a4` replaced hacks with **true alpha-channel PNG assets** (`LogoNoBackgd-Photoroom.png`, `heal-gurukuli-logo-transparent.png`, `ConchCircle-Photoroom.png`). `next/image` renders them with native alpha compositing. Hero `Image` uses explicit `width`/`height` + responsive `className` (`w-96 sm:w-[500px] md:w-[680px] lg:w-[800px] h-auto`) instead of blend-mode CSS. Result: consistent transparency across nav, hero, `ConchDivider`, and footer without per-surface CSS overrides.

### War Story 2 — Monolithic Page Sprawl → Component Extraction (Phase 2 Refactor)

- **The Friction Point:** Pre-refactor, `app/page.tsx`, `app/mission/page.tsx`, and `app/support/page.tsx` each duplicated hundreds of lines — governance copy, three-pillars grid, testimonial markup, clinical impact sections. Copy changes required multi-file edits; routing additions (`/impact`, `/volunteer`, `/resources`) risked drift between pages sharing identical section markup.
- **The Engineering Answer:** Commit `97e3b64` extracted **7 shared Server/Client components** with typed props:
  - `ThreePillars`, `GovernanceBlock` (dual `variant: "section" | "card"`), `ClinicalImpact` → `ClinicalImpactCharts`, `TestimonialCarousel`, `ConchDivider`, expanded `SiteNav`.
  - Homepage dropped from **~200 LOC inline sections to ~137 LOC composition** (`<ThreePillars />`, `<ClinicalImpact />`, `<TestimonialCarousel />`).
  - `GovernanceBlock` variant prop lets `/mission` render full UKCP ethics section while `/clinicians` renders compact CTA card — same source of truth, different layout contract.
  - Net diff: **+1,738 / −662 lines** across 15 files — higher total LOC but **single-edit propagation** for shared clinical content.

### War Story 3 — Dual-Purpose Navigation (Parent Route + Dropdown Children)

- **The Friction Point:** Information architecture requires nav items like "Resources" and "Support" to **navigate to a landing page** (`/resources`, `/support`) while also exposing **4–5 anchor/child routes** in a dropdown. A naive dropdown-only pattern traps users who expect the label itself to be clickable. Mobile requires a separate accordion pattern without duplicating the entire `navItems` config.
- **The Engineering Answer:** `SiteNav.tsx` implements a **discriminated `NavItem` union** and a `DropdownMenu` sub-component:
  - Desktop: label is `<Link href={parentHref}>`; chevron `<button>` toggles dropdown independently (`aria-expanded`, `aria-haspopup`).
  - `useEffect` click-outside listener on `ref` closes dropdown on `mousedown` outside container.
  - Active state: `pathname === parentHref || children.some(c => pathname.startsWith(c.href.split("#")[0]))`.
  - Mobile: hamburger with CSS-transform animated bars (`rotate-45 translate-y-[7px]`); accordion via `mobileExpanded` string state; `max-h-[600px]` CSS transition for menu reveal.
  - Single `navItems` constant (44 lines) drives both desktop and mobile render paths — no config duplication.

### War Story 4 — Clinical Dashboard Without Third-Party Chart Dependencies

- **The Friction Point:** Impact/contribute pages need a credible clinical metrics dashboard (PHQ-9, GAD-7, PCL-5 before/after bars, 6-month timeline) without importing a charting library that would inflate the client bundle and add SSR/hydration complexity for a mostly-static site.
- **The Engineering Answer:** `ClinicalImpactCharts.tsx` implements three tabbed views with **zero external visualization dependencies:**
  - Overview: SVG radial gauges via `strokeDasharray` / `strokeDashoffset` math (`2 * Math.PI * 40 * (1 - percentage/100)`).
  - Before/After: CSS `width: ${pct}%` horizontal bars with `transition-all duration-1000`.
  - Timeline: SVG `<path>` line + area fills with `linearGradient` defs; coordinates precomputed in source with inline comments documenting the `viewBox="0 0 600 250"` mapping formula (`Y = 210 - (value/24 * 190)`).
  - Server wrapper `ClinicalImpact` accepts optional `eyebrow`/`heading`/`body` props — reused on `/`, `/contribute`, `/impact` with different copy without duplicating chart logic.

---

## 🔗 LOCAL INFRASTRUCTURE & AUTOMATION HOOKS

- **Runtime Variables:**
  - **Currently required: none.** The codebase contains **zero `process.env` reads**. No `.env`, `.env.local`, or `.env.example` files are committed (`.env*` is gitignored).
  - **Future integration placeholders** (not yet wired — document formats for when implemented):

    | Variable | Format | Purpose |
    |----------|--------|---------|
    | `ACUITY_SCHEDULING_URL` | `string` (URL) | Embed iframe `src` for `/support#booking-portal` (placeholder text references Acuity Scheduling) |
    | `NEXT_PUBLIC_SITE_URL` | `string` (URL) | Canonical base for `metadata.metadataBase` / OG tags |
    | `CONTACT_FORM_ENDPOINT` | `string` (URL) | POST target for `/contact/get-in-touch` form |
    | `DONATION_PROVIDER_KEY` | `string` | Payment processor API key for `/contribute` tier buttons |

  - **Setup dependencies:**
    - **Node.js** (compatible with Next 16 — `@types/node ^20` in devDependencies).
    - **npm** (lockfile: `package-lock.json`).
    - `npm install` → `npm run dev` serves at `http://localhost:3000`.

- **Build & Test Pipelines:**

  | Command | Purpose | Notes |
  |---------|---------|-------|
  | `npm run dev` | Turbopack dev server with HMR | Default port 3000 |
  | `npm run build` | Production SSG build | Runs TS check + static page generation; **must pass** before deploy |
  | `npm run start` | Serves `.next` production output | Post-build only |
  | `npm run lint` | ESLint (`eslint` flat config) | Extends `eslint-config-next/core-web-vitals` + `/typescript` |

  - **Automated validation gates:**
    1. **TypeScript** — enforced inside `next build` (`Running TypeScript ... Finished TypeScript in 41s`).
    2. **ESLint** — manual/CI gate via `npm run lint`. Current state: 2 errors, 1 warning (see Type Safety section).
    3. **Static generation** — build fails if any route cannot prerender.
  - **Not present:**
    - No unit/integration/e2e test runner (Jest, Vitest, Playwright absent from `package.json`).
    - No `.github/workflows/` CI pipeline.
    - No pre-commit hooks (Husky/lint-staged absent).
    - No `Dockerfile` or container orchestration.
  - **Recommended pre-deploy checklist:**
    ```bash
    npm ci
    npm run lint    # resolve 2 entity-escape errors first
    npm run build   # verify 17/17 static routes
    npm run start   # smoke-test /support, /clinicians, mobile nav
    ```

---

## Appendix: Route Map

| Route | Type | Key Modules |
|-------|------|-------------|
| `/` | Static | `ThreePillars`, `ClinicalImpact`, `TestimonialCarousel` |
| `/mission` | Static | `GovernanceBlock` (section), `ThreePillars` |
| `/support` | Static | Acuity iframe placeholder, therapy modality data |
| `/clinicians` | Static | `Clinician[]` typed grid, `GovernanceBlock` (card) |
| `/contribute` | Static | Tier cards, `ClinicalImpact`, `TestimonialCarousel` |
| `/resources` | Static | Sticky sidebar anchor nav, 4 content sections |
| `/forum` | Static | Mock `Thread[]` table UI |
| `/volunteer` | Static | Application form (no backend) |
| `/impact` | Static | Extended testimonials + video placeholders |
| `/external-crisis-support` | Static | International helpline directory |
| `/contact/get-in-touch` | Static | Contact form (no backend) |
| `/contact/crisis-support` | Static | Crisis protocols |
| `/contact/media` | Static | Press inquiry form |
| `/contact/volunteer` | Static | `redirect("/volunteer")` via `next/navigation` |
