
Naming:

| Kind | Server file | Client file |
| --- | --- | --- |
| Site home | `app/page.tsx` | `app/HomePageClient.tsx` |
| Nested static page | `app/mission/page.tsx` | `app/mission/MissionPageClient.tsx` |
| Dynamic document | `app/clinicians/[slug]/page.tsx` | `app/clinicians/[slug]/ClinicianClient.tsx` |

Keep the client colocated with its `page.tsx`.

---

## 3. `tina/config.ts` — clean setup, no local proxy

Rules baked into this config:

- **Local mode omits `clientId` and `token` entirely.** Empty strings still count as defined and will mount Tina Cloud Auth. Do not pass `undefined` either — omit the keys.
- **No local GraphQL proxy in app code.** Pages talk only to `@/tina/__generated__/client`.
- **Fields-only collections.** No polymorphic `templates`. One collection per content folder / page singleton.
- **Page singletons** live under `content/pages` and are scoped with `match.include`.
- **Document collections** (clinicians, trustees) get a `ui.router` so “View in site” opens the right URL.

