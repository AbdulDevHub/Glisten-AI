# Architecture

<!--
Purpose: where code belongs and how data flows, so new code lands in the right layer.
It describes the target layout; sections marked (planned) don't exist yet. Update this when a phase adds or moves a layer, route group or table.
-->

## Folder layout
```
src/
  app/
    (marketing)/        public pages: home, features, pricing, docs, blog, changelog, about, contact, legal  (planned)
    (app)/app/          signed-in product: dashboard, projects, critic, generator, settings, billing  (planned)
    api/                route handlers: auth, ai (critique/generate streams), stripe webhook, capture  (planned)
    layout.tsx          root layout: DM Sans font, Header, Footer, bg #070815, default metadata
    page.tsx            homepage: composes the slices with content from src/content/home.tsx
    features/, case-study/[uid]/   current placeholder pages (rebuilt in phase 2)
  slices/               homepage sections (Hero, Bento, Showcase, CaseStudies, Integrations, CallToAction, RichText);
                        presentational, each takes typed props from src/content
  components/           shared UI: Bounded, ButtonLink, NavBar, Header, Footer, StarGrid, WordMark
  content/              typed site content: site.ts (nav, meta), home.tsx (section copy), case-studies.tsx,
                        images.ts (local image registry); MDX collections come in phase 2
  hooks/                usePrefersReducedMotion
  lib/                  auth, db (Drizzle), ai (provider adapter), billing, credits, crypto  (planned)
drizzle/                schema migrations  (planned)
public/images/          site images (downloaded from Prismic in phase 1)
Prismic-Course-Images/  original course assets
```

## Data flow (target)
- **Marketing:** static. Content comes from `src/content/*` at build time, with no runtime CMS.
- **Critic:** client uploads to Vercel Blob (or the server captures a URL with headless Chromium) → `api/ai/critique` checks the plan/BYOK key and debits credits → Claude vision call with a structured-output schema → issues (normalized boxes) stored in `critiques`/`critique_issues` → pin overlay UI.
- **Generator:** `api/ai/generate` streams TSX → client renders it in a sandboxed iframe (separate route, strict CSP) → messages stored in `generations`/`generation_messages`.
- **Billing:** Stripe Checkout/Portal → webhook updates `subscriptions` and adds credits to `credit_ledger` → every AI route debits the ledger in a transaction before calling the model and refunds on failure.

## Planned tables
users, sessions, accounts, verifications (Better Auth) · organizations, members, invitations · projects, assets · critiques, critique_issues · generations, generation_messages · credit_ledger · subscriptions · api_keys (encrypted BYOK).
