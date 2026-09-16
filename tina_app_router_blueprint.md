# TinaCMS App Router Blueprint

Strict architectural reference for a Next.js App Router project with TinaCMS visual editing.

Use this as the only data-and-editing pattern. Do not invent a second fetch path, a local GraphQL proxy in app code, or a parallel `app/data` copy of CMS documents.

This blueprint was distilled from a production site that used:

- static page singletons (`/`, `/mission`, `/support`, `/contribute`, `/impact`, `/resources`, `/volunteer`, `/privacy`, `/forum`, `/external-crisis-support`, `/contact/media`)
- dynamic document routes (`/clinicians/[slug]`, `/trustees/[slug]`)

---

## 1. Non-negotiable architecture

Every CMS-backed page is a **two-file split**:

1. **Server Component** (`page.tsx`)
   - default-imports the generated Tina client
   - fetches with `client.queries.<collection>({ relativePath })`
   - keeps `metadata` / `generateMetadata` / `generateStaticParams`
   - passes `{ query, variables, data }` into the client component
   - never renders CMS fields itself

2. **Client Component** (`*Client.tsx` or `*PageClient.tsx`)
   - `"use client"`
   - calls `useTina(props)` so the visual editor sidebar registers the document
   - optionally stamps `data-tina-field={tinaField(...)}` on editable nodes
   - renders the UI

**Never** import JSON from `content/` inside a page or component.  
**Never** fetch Tina data inside a Client Component.  
**Never** skip `useTina` on a page that should be visually editable.

