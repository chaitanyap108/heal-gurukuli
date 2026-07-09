# PROJECT_RUN_SHEET — Heal Gurukuli

> System document for `heal_gurukuli` v0.1.0 (updated after nav / therapy-intake / layout overhaul).  
> Codebase footprint: **28 TSX modules**, **~4,630 LOC**, **23 App Router routes** (incl. 4 clinician SSG slugs), **0 API routes**, **0 `process.env` references**.

---

## 🏛️ CORE ARCHITECTURAL MATRIX

- **The Core Stack:**
  - **Frontend framework:** [Next.js 16.2.9](https://nextjs.org/) (App Router) on **React 19.2.4** / **react-dom 19.2.4**. Turbopack is the default bundler for both `next dev` and `next build`.
  - **State management:** No global store. Interactivity is **local `useState`** in five Client Component islands: `SiteNav`, `ClinicalImpactCharts`, `TestimonialCarousel`, `TeamCarousel`, `TherapyIntakeForm`. Remaining modules are Server Components by default.
  - **Rendering strategy:** **Full static site generation (SSG).** Production build emits all routes as prerendered HTML (`○ Static` or `● SSG` via `generateStaticParams` for `/clinicians/[slug]`). No ISR, no per-request SSR, no `fetch()` data layer.
  - **Styling system:** **Tailwind CSS v4** via `@import "tailwindcss"` in `app/globals.css`, processed by `@tailwindcss/postcss`. Design tokens live in `@theme` (`--color-navy`, `--color-canvas`, etc.). Typography: `next/font/google` — **Quicksand** (serif role) + **Raleway** (sans) with `display: "swap"`.
  - **Database / CMS layer:** **None.** Content is typed TypeScript constants (`app/data/clinicians.ts`, inline page arrays). Forms are client- or HTML-presentational; therapy intake routes client-side to `/support/welcome` with **no backend POST**.
  - **Deployment targets:** **Vercel** (README; `.vercel` gitignored). `next.config.ts` is default passthrough. Static assets in `/public` (images + `complaints-process.pdf`).

- **Critical Dependencies & Decoupling:**
  1. **`next` (16.2.9)** — App Router lifecycle, root `layout.tsx` (`SiteNav` + `<main>` + `SiteFooter`), per-route `Metadata`, `next/image`, `next/font`, static collection. Dynamic clinician profiles use `generateStaticParams` + `params: Promise<{ slug }>`.
  2. **`react` / `react-dom` (19.2.4)** — Hydrates only `"use client"` islands; therapy intake uses `useRouter` for post-submit navigation.
  3. **`tailwindcss` + `@tailwindcss/postcss` (^4)** — Build-time utility CSS from `@theme` tokens; no runtime CSS-in-JS.
  4. **`eslint-config-next` (16.2.9)** — Flat config (`core-web-vitals` + `typescript`); sole automated quality gate (no Jest/Playwright).

---

## ⚡ MEASURE TWICE, CUT ONCE: COMPLETED WINS & METRICS

- **Quantifiable Performance Wins:**
  - **100% static / SSG coverage:** 23 routes including `/privacy`, `/support/welcome`, and four `/clinicians/[slug]` profiles. Zero server compute per page view.
  - **Client boundary surface:** **5 client / 28 TSX ≈ 18%** — nav, charts, testimonials, team carousel, intake form only.
  - **Zero charting library tax:** `ClinicalImpactCharts` uses inline SVG (radial gauges, bar widths, precomputed PHQ-9/GAD-7 path coordinates).
  - **Shared clinician data:** Single source `app/data/clinicians.ts` feeds `/clinicians`, `/clinicians/[slug]`, and `TeamCarousel` — avoids bio drift.
  - **Conch spacer slimmed:** `ConchDivider` reduced to `py-2` / ~40–48px icon (was large section padding) to tighten vertical rhythm site-wide.
  - **Image pipeline:** `next/image` with `priority` on LCP logos; clinician cards use `fill` + responsive `sizes`.
  - **Font optimization:** Self-hosted Quicksand + Raleway subsets via `next/font`.
  - **Data pipeline:** O(1) compile-time content; no network round-trips for page data.

- **Type Safety & Data Integrity:**
  - **TypeScript `strict: true`**; type-check runs inside `next build`.
  - **Domain types:** `Clinician` (+ `slug`, `shortBio`) in `app/data/clinicians.ts`; `Thread`; `NavItem` discriminated union; chart `TabId`; component prop interfaces.
  - **Therapy intake:** Client form with HTML5 `required` / `type="email"`; on submit → `router.push("/support/welcome")`. No Zod/Server Actions yet.
  - **Volunteer form:** PDF CV upload (`accept="application/pdf,.pdf"`) — presentational until backend wired.
  - **Gap:** ESLint may still flag `react/no-unescaped-entities` on crisis-support and unused `timelineMonths` in charts; does not block `next build`.

---

## 💥 THE PROBLEM/SOLUTION LOG (THE WAR STORIES)

### War Story 1 — Logo White-Box Artifact on Transparent Background

- **The Friction Point:** Raster logos used blend-mode/filter hacks against `#f0f7ff`, producing white boxes on nav/hero/footer.
- **The Engineering Answer:** True alpha PNGs + `next/image` (`LogoNoBackgd-Photoroom.png`, `ConchCircle-Photoroom.png`). Commit `3fef2a4`.

### War Story 2 — Monolithic Page Sprawl → Component Extraction (Phase 2)

- **The Friction Point:** Duplicated governance, pillars, testimonials across home/mission/support.
- **The Engineering Answer:** Extracted `ThreePillars`, `GovernanceBlock` (`section` | `card`), `ClinicalImpact` / charts, `TestimonialCarousel`, `ConchDivider`, expanded `SiteNav`. Commit `97e3b64`.

### War Story 3 — Dual-Purpose Navigation + IA Rename

- **The Friction Point:** Parent pages need clickable labels *and* dropdown children; “Support” vs clinical “Therapy” naming confused IA; crisis lines belonged under Resources.
- **The Engineering Answer:** Discriminated `NavItem` + `DropdownMenu` (label = parent `Link`, chevron toggles). Current primary order: **Therapy → Resources → Forum → Contribute**. About dropdown anchors `/mission#*`. Therapy dropdown: Intake Form + Meet the Therapists (no book-session link). Crisis Support Lines under Resources → `/support#crisis`.

### War Story 4 — Clinical Dashboard Without Chart Libraries

- **The Friction Point:** Need PHQ-9 / GAD-7 / PCL-5 visuals without Recharts/D3 bundle cost.
- **The Engineering Answer:** Pure SVG/CSS in `ClinicalImpactCharts`; reusable via `ClinicalImpact` props on `/`, `/contribute`, `/impact`.

### War Story 5 — Intake-First Therapy (Acuity Removed)

- **The Friction Point:** Self-serve Acuity booking conflicted with clinical gatekeeping (intake review before consultation).
- **The Engineering Answer:** Removed Acuity iframe / booking CTAs. `/support` is a **3-step flow**: (1) intake form, (2) team reviews & replies, (3) begin work. `TherapyIntakeForm` client-routes to `/support/welcome`. Consultations arranged by reply only — no calendar embed.

---

## 🔗 LOCAL INFRASTRUCTURE & AUTOMATION HOOKS

- **Runtime Variables:**
  - **Currently required: none** (zero `process.env` reads).
  - **Future placeholders:**

    | Variable | Format | Purpose |
    |----------|--------|---------|
    | `NEXT_PUBLIC_SITE_URL` | `string` (URL) | Canonical / OG base |
    | `CONTACT_FORM_ENDPOINT` | `string` (URL) | POST for contact / volunteer / intake |
    | `NEXT_PUBLIC_GOFUNDME_URL` | `string` (URL) | Replace temporary GoFundMe href on `/contribute` |
    | `DONATION_PROVIDER_KEY` | `string` | Future payment processor (if leaving GoFundMe) |

  - **Setup:** Node 20+ compatible · `npm install` · `npm run dev` → `http://localhost:3000`.

- **Build & Test Pipelines:**

  | Command | Purpose |
  |---------|---------|
  | `npm run dev` | Turbopack HMR |
  | `npm run build` | SSG + TypeScript gate |
  | `npm run start` | Serve `.next` |
  | `npm run lint` | ESLint flat config |

  - **Pre-deploy:** `npm ci` → `npm run lint` → `npm run build` (expect 23 routes) → smoke `/support` intake → `/support/welcome`, `/contribute#financials`, mobile nav.
  - **Not present:** unit/e2e tests, GitHub Actions, Husky, Docker.

---

## Appendix: Route Map

| Route | Type | Key Modules / Notes |
|-------|------|---------------------|
| `/` | Static | `ThreePillars` (centered heading), `ClinicalImpact`, `TestimonialCarousel` |
| `/mission` | Static | About IA; `TeamCarousel`; section ids for About dropdown |
| `/support` | Static | **Therapy** — intake-first 3-step; modalities; complaints PDF; privacy link; `#crisis` |
| `/support/welcome` | Static | Post-intake success → Resources CTA |
| `/clinicians` | Static | Grid from `clinicians` data + profile links |
| `/clinicians/[slug]` | SSG | Full profile pages (`caitanya-lila`, `liam-sterling`, `sarah-jenkins`, `priya-patel`) |
| `/contribute` | Static | £5k progress bar; GoFundMe CTAs; `#financials` |
| `/resources` | Static | Sticky category nav |
| `/forum` | Static | Mock `Thread[]` |
| `/volunteer` | Static | Roles + form (CV PDF); Social Media Outreach Support |
| `/impact` | Static | Impact / testimonials placeholders |
| `/privacy` | Static | Privacy policy summary |
| `/external-crisis-support` | Static | Helpline directory |
| `/contact/*` | Static | get-in-touch, crisis-support, media; volunteer → redirect `/volunteer` |

### Navigation & footer contracts (current)

- **Nav labels:** Home, About (dropdown), Therapy (dropdown), Resources (dropdown), Forum, Contribute, Volunteer, See the Impact + Donate CTA.
- **Footer Governance:** Privacy Policy → `/privacy`; Financials → `/contribute#financials`; Clinical Ethics → `/mission#governance`. UKCP footer badge/link removed.
- **Governance body copy:** UKCP link immediately followed by BACP link (`GovernanceBlock`).
- **Complaints:** `/support#complaints` downloads `/complaints-process.pdf` (placeholder PDF in `public/`).
