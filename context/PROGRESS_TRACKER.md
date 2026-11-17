# Progress Tracker

<!--
Purpose: the running record of where this project stands, so a new session can pick up exactly where the last one stopped.
Update it after every meaningful change: current state, in-progress work, next steps, and a dated session-log entry (newest first).
When old log entries stop being useful, fold them into "Earlier history" instead of deleting them.
-->

## Current state

- **Phase 1 merged** (PR #5) and live at https://glisten-ai-dark.vercel.app: Next 16 + React 19, Tailwind 3.4, no CMS.
- **Phase 2 built** on branch `phase-2-marketing` (PR pending review/merge): Features, Pricing, Docs (6 MDX pages), Blog (2 posts) + `/blog/rss.xml`, Changelog, About, Contact (+ `/api/contact`), Terms/Privacy/Refunds, `/use-cases` (+3 stories), sitemap and robots. `/case-study/*` redirects (308) to `/use-cases`.
- Homepage copy rewritten around the critic + generator; layout and slice markup unchanged (only the CaseStudies slice's data source/link text and the Integrations icon set changed). Integrations now show Claude, OpenAI, React, Tailwind, Next.js, Vercel.
- Still placeholder: the hero, bento and showcase images (email-app mockup, a code snippet that imports `@/prismicio`) and the agency use-case image (a screenshot of the old homepage). Phase 8 replaces them with real app screenshots.

## In progress

- Phase 2 PR: review, merge, then check the production deploy.

## Next steps

1. **User to-do before merge:** read the legal pages (`src/content/legal/*.mdx`). They're plain-language drafts with no legal entity, jurisdiction or governing-law clause, and the refund policy's numbers (14 days, under 20 credits) are defaults that need the user's sign-off.
2. **User to-do:** `.env.example` is done (committed). Add the Resend key + destination email in Vercel to switch the contact form on; until then it answers 503 "not connected yet".
3. Phase 3 (auth + DB + app shell) on a new branch. Ask the user first for: Neon DB URL, Better Auth secret, GitHub/Google OAuth apps. Move the marketing pages into a `(marketing)` route group when adding `(app)`.

## Notes for the next session

- Vercel preview URLs are behind Vercel login (they return 302), so preview checks need the user signed in or a protection-bypass token. Verify against the local `next start` build instead.
- **User to-do:** delete the Prismic webhook (it now 404s on `/api/revalidate`) and any Prismic env vars in Vercel. Before launch, also check for a trademark conflict with the "Glisten" name.
- Before phase 3, ask the user for: Neon DB URL, Better Auth secret, GitHub/Google OAuth apps.
- Working-tree files use CRLF (`core.autocrlf`). Use whole-file writes or normalize `\r\n` before scripted string replacements.

## Session log

### 2026-11-08

- Phase 2: chose `@next/mdx` (+ `remark-gfm` as a string plugin for Turbopack) with typed TS registries for metadata instead of frontmatter. Built all marketing pages, rewrote homepage copy, swapped fake case studies/integrations for honest ones (use-case images cropped from `Prismic-Course-Images/`). Removed the unearned "Most popular" pricing badge. `npm run verify` passes; screenshots at 1440/390 of 13 pages: all 200, no horizontal overflow, no console errors. Screenshot script: scratchpad `shots.cjs` (Playwright from the global `@playwright/cli`, headless shell 1248 via `executablePath`; set `MSYS_NO_PATHCONV=1` in Git Bash).

### 2026-11-06

- Grilled the user on scope. Decisions: full SaaS (AI design critic + UI generator); drop Prismic; Better Auth + Neon/Drizzle + Vercel Blob + Resend; real Stripe in test mode until launch; free BYOK (Claude/OpenAI), Pro $12 = 200 credits, Team $29/seat; no free hosted tier; honest copy; keep the "Glisten AI" name and vercel.app domain for now; phased PRs.
- Clarified for the user: hosted AI usage runs on a separate Anthropic API key and balance, never their Claude subscription limits.
- Added AGENTS.md and the `context/` files.
- Phase 1 done: Prismic removed, content moved to `src/content/`, Next 16/React 19, ESLint flat config, `images.qualities` [75, 90, 100], `npm run verify` script. Fixed the hero reduced-motion selector (the hero used to stay invisible). Pixel diff against the old live site was ≤0.04%. PR #5 merged; production deploy verified (all pages 200, images served locally).
- Full approved plan: `~/.claude/plans/this-project-was-just-joyful-aurora.md`.
