# Progress Tracker

<!--
Purpose: the running record of where this project stands, so a new session can pick up exactly where the last one stopped.
Update it after every meaningful change: current state, in-progress work, next steps, and a dated session-log entry (newest first).
When old log entries stop being useful, fold them into "Earlier history" instead of deleting them.
-->

## Current state

- **Phase 2 merged** (PR #6) and live at https://glisten-ai-dark.vercel.app.
- **Phase 3 built** on branch `phase-3-auth-db` (PR pending): self-hosted Better Auth 1.7 + Drizzle on Neon. Magic-link sign-in (link printed to the dev server console when `RESEND_API_KEY` is unset; in production it answers "not connected yet"), GitHub/Google buttons appear only when their env vars are set. Migration `drizzle/0000_*.sql` applied to Neon (tables: user, session, account, verification).
- Marketing pages moved into `src/app/(marketing)` (URLs unchanged; homepage pixel diff vs production ≤0.01%). New `/sign-in` and protected `/app` shell (dashboard, placeholder projects/critic/generator, settings). "Get Started" now points to `/sign-in`.
- Still placeholder: hero/bento/showcase images and the agency use-case image (phase 8). The 404 page now has no header/footer since the root layout lost the site chrome (phase 8 adds error pages).

## In progress

- Phase 3 PR: review, merge, then add the env vars in Vercel and check production sign-in.

## Next steps

1. **User to-do before merge:** in Vercel, add `DATABASE_URL`, `DATABASE_URL_POOLED`, `BETTER_AUTH_SECRET` (a new one for production), `BETTER_AUTH_URL=https://glisten-ai-dark.vercel.app`. Add `RESEND_API_KEY` for production magic links (`onboarding@resend.dev` only delivers to the Resend account owner until a domain is verified).
2. **User to-do:** create GitHub and Google OAuth apps (callbacks `<site>/api/auth/callback/github` and `/google`) and add their IDs/secrets locally and in Vercel. Reset the Neon password (it was pasted in chat on 2026-11-17).
3. **User to-do (from phase 2):** read the legal pages and sign off the refund numbers.
4. Phase 4 (critic) on a new branch: needs an Anthropic API key (with a Console spend limit) and a Vercel Blob token.

## Notes for the next session

- Vercel preview URLs are behind Vercel login (they return 302), so preview checks need the user signed in or a protection-bypass token. Verify against the local `next start` build instead.
- **User to-do:** delete the Prismic webhook (it now 404s on `/api/revalidate`) and any Prismic env vars in Vercel. Before launch, also check for a trademark conflict with the "Glisten" name.
- Every page under `/app` that shows user data must call `requireSession()` itself: layouts don't re-run on client navigation, and `src/proxy.ts` only checks that a cookie exists.
- Screenshots: scratchpad `shots.cjs` signs in through a real magic link by reading the dev log, so run `next dev -p 3000` (port must match `BETTER_AUTH_URL`) with output to `dev.log`; delete `phase3-*@example.com` test users afterwards.
- Working-tree files use CRLF (`core.autocrlf`). Use whole-file writes or normalize `\r\n` before scripted string replacements.

## Session log

### 2026-11-17

- Committed `.env.example` + Verify/Verify-full split; opened and merged phase 2 (PR #6); production pages checked (200, `/case-study/*` 308).
- Phase 3: user chose self-hosted Better Auth over Neon Managed Auth. Wrote the Better Auth schema by hand (the `@better-auth/cli` on npm was 1.4, stale vs 1.7) and checked it against Better Auth's `getAuthTables`. Curl-tested the full flow (redirects, magic link, sign-out, reused token, stale cookie, `next=//evil.com`). Playwright at 1440/390: no overflow, no console errors; fixed a clipped logo and the mobile app nav (now wraps). reviewer-agent: no blockers; documented env vars and made the DB client warn instead of throw when unset.

### 2026-11-08

- Phase 2: chose `@next/mdx` (+ `remark-gfm` as a string plugin for Turbopack) with typed TS registries for metadata instead of frontmatter. Built all marketing pages, rewrote homepage copy, swapped fake case studies/integrations for honest ones (use-case images cropped from `Prismic-Course-Images/`). Removed the unearned "Most popular" pricing badge. `npm run verify` passes; screenshots at 1440/390 of 13 pages: all 200, no horizontal overflow, no console errors. Screenshot script: scratchpad `shots.cjs` (Playwright from the global `@playwright/cli`, headless shell 1248 via `executablePath`; set `MSYS_NO_PATHCONV=1` in Git Bash).

### 2026-11-06

- Grilled the user on scope. Decisions: full SaaS (AI design critic + UI generator); drop Prismic; Better Auth + Neon/Drizzle + Vercel Blob + Resend; real Stripe in test mode until launch; free BYOK (Claude/OpenAI), Pro $12 = 200 credits, Team $29/seat; no free hosted tier; honest copy; keep the "Glisten AI" name and vercel.app domain for now; phased PRs.
- Clarified for the user: hosted AI usage runs on a separate Anthropic API key and balance, never their Claude subscription limits.
- Added AGENTS.md and the `context/` files.
- Phase 1 done: Prismic removed, content moved to `src/content/`, Next 16/React 19, ESLint flat config, `images.qualities` [75, 90, 100], `npm run verify` script. Fixed the hero reduced-motion selector (the hero used to stay invisible). Pixel diff against the old live site was ≤0.04%. PR #5 merged; production deploy verified (all pages 200, images served locally).
- Full approved plan: `~/.claude/plans/this-project-was-just-joyful-aurora.md`.
