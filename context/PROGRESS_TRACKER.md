# Progress Tracker

<!--
Purpose: the running record of where this project stands, so a new session can pick up exactly where the last one stopped.
Update it after every meaningful change: current state, in-progress work, next steps, and a dated session-log entry (newest first).
When old log entries stop being useful, fold them into "Earlier history" instead of deleting them.
-->

## Current state
- Production (main) is still the old Prismic-backed Next 14 site at https://glisten-ai-dark.vercel.app.
- Branch `phase-1-remove-prismic`: Next 16 + React 19, Tailwind 3.4, no CMS. Content is in `src/content/` (`site.ts`, `home.tsx`, `case-studies.tsx`, `images.ts`), images in `public/images/`. Homepage, /features and /case-study/* match the live site (≤0.04% pixel diff at 1440/390 px).
- Homepage sections: Hero, Bento, Showcase, CaseStudies, Integrations, CallToAction (`src/slices/*`), plus a Features page and Nike/Prismic case-study pages.
- Much of the content is still placeholder: lorem ipsum in Showcase, a "Cool Features" Features page, fake case studies, integration logos that aren't real integrations, and a hero image that's an email-app mockup.

## In progress
- **Phase 1:** done on its branch; PR open for review and the Vercel preview check.

## Next steps
- Merge the phase 1 PR. After merging: delete the Prismic webhook (it now 404s on `/api/revalidate`) and any Prismic env vars in Vercel.
- Phase 2: real marketing pages and honest copy (see `BUILD_PLAN.md`).
- Before phase 3, ask the user for: Neon DB URL, Better Auth secret, GitHub/Google OAuth apps.

## Session log
### 2026-11-06
- Grilled the user on scope. Decisions: full SaaS (AI design critic + UI generator); drop Prismic; Better Auth + Neon/Drizzle + Vercel Blob + Resend; real Stripe in test mode until launch; free BYOK (Claude/OpenAI), Pro $12 = 200 credits, Team $29/seat; no free hosted tier; honest copy; keep the "Glisten AI" name and vercel.app domain for now; phased PRs.
- Clarified for the user: hosted AI usage runs on a separate Anthropic API key and balance, never their Claude subscription limits.
- Created branch `phase-1-remove-prismic`; added AGENTS.md and the `context/` files.
- Phase 1 built and verified: Prismic removed, content moved to `src/content/`, Next 16/React 19, ESLint flat config, `images.qualities` set for quality 90/100. Fixed the hero reduced-motion selector, which used to leave the hero invisible. Reviewer: no code bugs, docs refreshed.
- Full approved plan: `~/.claude/plans/this-project-was-just-joyful-aurora.md`.
