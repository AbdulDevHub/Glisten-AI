# Build Plan

<!--
Purpose: the ordered roadmap that turns the Glisten AI homepage into a paid SaaS. Each phase ships as its own PR from a feature branch with a Vercel preview.
Use it to keep scope tight: finish the current phase's acceptance criteria before starting the next one.
Update a phase's status here (and in PROGRESS_TRACKER.md) when it starts or merges. Change scope only after the user agrees.
-->

## Product decisions (agreed 2026-11-06)
- **Critic:** screenshot upload/paste or a URL (captured at desktop + mobile widths) → pinned issues (spacing, alignment, contrast, typography, hierarchy, a11y), each with severity, a fix and an overall score; version history per project.
- **Generator:** prompt, optional reference image or a critique → streamed single-file React+Tailwind TSX, sandboxed live preview, chat to iterate, HTML export. "Fix with AI" links the critic to the generator.
- **Plans:** BYOK $0 (user's Claude or OpenAI key) · Pro $12/mo = 200 credits · Team $29/seat/mo, pooled 200 credits per seat. Credit cost: critique 1, generate 2, tweak 1, Opus ×2. No rollover; top-up packs. No free hosted usage.
- **Brand:** keep "Glisten AI" and `glisten-ai-dark.vercel.app` for now. Before launch, check for a name conflict and buy a domain (needed for email).

## Phases
| # | Phase | Status | Acceptance |
|---|---|---|---|
| 1 | Remove Prismic, upgrade Next/React | Merged (PR #5) | Homepage pixel-identical (desktop + mobile); no `@prismicio` deps; build has no network fetches |
| 2 | Marketing site + honest copy | Next | Features, Pricing, Docs/FAQ, Changelog, Blog+RSS, About, Contact, Terms/Privacy/Refund; case studies → use-case stories; integrations → "Works with" |
| 3 | Auth + DB + app shell | — | Sign up/in (magic link, GitHub, Google), `/app` protected, Drizzle migrations applied |
| 4 | Critic | — | Upload + URL capture → pins + score saved to a project |
| 5 | Generator | — | Streamed TSX, sandboxed preview, chat iterations, export, "Fix with AI" |
| 6 | Billing, credits, BYOK | — | Stripe Checkout/Portal/webhooks, credit ledger, caps, encrypted BYOK keys |
| 7 | Teams | — | Workspaces, invites, roles, pooled credits, seat sync |
| 8 | Launch polish | — | SEO, real screenshots, analytics, error pages, README, launch checklist |

## External setup needed from the user (ask when the phase needs it)
Neon DB URL · Better Auth secret · GitHub/Google OAuth apps · Stripe test keys + webhook secret · Anthropic API key (with a Console spend limit) · OpenAI key (BYOK testing) · Resend key · Vercel Blob token · Vercel env vars.
