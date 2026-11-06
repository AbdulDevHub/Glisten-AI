# Progress Tracker

<!--
Purpose: the running record of where this project stands, so a new session can pick up exactly where the last one stopped.
Update it after every meaningful change: current state, in-progress work, next steps, and a dated session-log entry (newest first).
When old log entries stop being useful, fold them into "Earlier history" instead of deleting them.
-->

## Current state

- **Phase 1 merged** (PR #5) and live at https://glisten-ai-dark.vercel.app: Next 16 + React 19, Tailwind 3.4, no CMS.
- Content lives in `src/content/` (`site.ts` nav/meta, `home.tsx` section copy, `case-studies.tsx`, `images.ts`); images in `public/images/`. Slices in `src/slices/*` are presentational and take typed `content` props.
- Pages: `/`, `/features` (placeholder "Cool Features"), `/case-study/nike` and `/case-study/prismic` (lorem ipsum).
- Still placeholder or dishonest (phase 2 fixes these): Showcase lorem ipsum; the Features page; the fake Nike/Prismic case studies; integration logos (Cloudflare, npm, GitHub, Figma, DigitalOcean, Fly) that aren't real integrations; the hero image (an email-app mockup); "Download Now"/"Get Started"/"Start Now" buttons that all go to `/features`; duplicate Bento copy ("Benchmark with AI" and "Aesthetic Excellence" share the same text).

## In progress

- Nothing. Phase 2 starts in a new session.

## Next steps (phase 2: marketing site + honest copy, on branch `phase-2-marketing`)

1. Pick the MDX approach for docs/blog/changelog/legal. Recommended: `@next/mdx` + frontmatter via a small loader, or Velite. Check current docs with context7 first.
2. Build pages using the homepage building blocks (`context/UI_RULES.md`): Features (reuse Bento/Showcase layouts), Pricing (BYOK $0 / Pro $12 = 200 credits / Team $29 per seat, plus FAQ), Docs + FAQ, Changelog, Blog + RSS, About, Contact (form UI now; Resend wiring needs a key, so ask), Terms / Privacy / Refund.
3. Honest copy swaps that keep the layouts: case studies → use-case stories (indie dev, agency, design student), integrations → "Works with" (Claude, OpenAI, React, Tailwind, Next.js, Vercel), rewrite the Showcase/Bento/hero copy around the critic + generator. Hero/showcase screenshots get replaced with real app screenshots in phase 8; until then keep the current images but drop the misleading alt text.
4. Update the nav/footer in `src/content/site.ts` (Features, Pricing, Docs, Blog + "Get Started" CTA → `/pricing` until auth exists).
5. Verify: `npm run verify`, then screenshots at 1440 and 390 px. The homepage layout must not change, only its copy. Last time this used a Playwright script in the session scratchpad: full-page screenshot of each page after waiting about 6s for the GSAP animations, pixel-compared with `pixelmatch`. Rebuild that if needed.
6. Run the `reviewer` subagent → PR → merge.

## Notes for the next session

- Vercel preview URLs are behind Vercel login (they return 302), so preview checks need the user signed in or a protection-bypass token. Verify against the local `next start` build instead.
- **User to-do:** delete the Prismic webhook (it now 404s on `/api/revalidate`) and any Prismic env vars in Vercel. Before launch, also check for a trademark conflict with the "Glisten" name.
- Before phase 3, ask the user for: Neon DB URL, Better Auth secret, GitHub/Google OAuth apps.
- Working-tree files use CRLF (`core.autocrlf`). Use whole-file writes or normalize `\r\n` before scripted string replacements.

## Session log

### 2026-11-06

- Grilled the user on scope. Decisions: full SaaS (AI design critic + UI generator); drop Prismic; Better Auth + Neon/Drizzle + Vercel Blob + Resend; real Stripe in test mode until launch; free BYOK (Claude/OpenAI), Pro $12 = 200 credits, Team $29/seat; no free hosted tier; honest copy; keep the "Glisten AI" name and vercel.app domain for now; phased PRs.
- Clarified for the user: hosted AI usage runs on a separate Anthropic API key and balance, never their Claude subscription limits.
- Added AGENTS.md and the `context/` files.
- Phase 1 done: Prismic removed, content moved to `src/content/`, Next 16/React 19, ESLint flat config, `images.qualities` [75, 90, 100], `npm run verify` script. Fixed the hero reduced-motion selector (the hero used to stay invisible). Pixel diff against the old live site was ≤0.04%. PR #5 merged; production deploy verified (all pages 200, images served locally).
- Full approved plan: `~/.claude/plans/this-project-was-just-joyful-aurora.md`.
