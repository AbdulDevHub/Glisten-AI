# AGENTS.md

<!--
Purpose: terse, machine-facing instructions for AI coding agents working in this repo.
Read this first, then README.md (plain-language overview) and context/ (progress, plan, architecture, UI, library rules).
Maintenance: after any meaningful change to this project, update this file, `context/PROGRESS_TRACKER.md`,
and the "Project Overview" section of `README.md` to reflect the current state — do this proactively, without being asked.
-->

## Project overview

Glisten AI: a dark, animated Next.js marketing site that is becoming a paid SaaS (AI design critic + React/Tailwind UI generator). It is being built in 8 phased PRs (see `context/BUILD_PLAN.md`).

## Tech stack

Next.js App Router (TypeScript, `src/` dir, `@/*` → `src/*`) · Tailwind CSS 3.4 + `@tailwindcss/typography` · GSAP + `@gsap/react` · react-icons · clsx · MDX via `@next/mdx` + `remark-gfm` (plugins as strings for Turbopack). Email (contact form, magic links) goes through Resend's HTTP API with `fetch` (no SDK; `src/lib/email.ts`). Auth: self-hosted Better Auth 1.7 (magic link; GitHub/Google switch on when their env vars exist) with Drizzle on Neon Postgres (`drizzle-orm/neon-serverless` Pool over `DATABASE_URL_POOLED`; drizzle-kit migrates over `DATABASE_URL`).
Planned: Vercel Blob, Stripe, `@anthropic-ai/sdk` + `openai`. No CMS (Prismic was removed in phase 1).

## Commands

- Install: `npm install`
- Dev: `npm run dev` · Build: `npm run build` · Lint: `npm run lint` (ESLint flat config) · Types: `npm run typecheck` · Format: `npm run format`
- Database: `npm run db:generate` (SQL from `src/lib/db/schema.ts` into `drizzle/`) · `npm run db:migrate` (apply to Neon) · `npm run db:studio`. drizzle-kit reads `.env.local` itself.
- Verify: npm run typecheck
- Verify-full: npm run verify
- Verify is the fast check the stop hook runs; Verify-full (lint + typecheck + build, minutes) runs before a commit or push.

## Conventions & constraints

- **Do not change the homepage's look.** Keep the markup, Tailwind classes and GSAP timelines of `src/slices/*` and `src/components/*`; swap only the data source and copy. Visually diff the homepage after touching them.
- Stay on Tailwind 3.x (v4 would shift the design). Class order comes from `prettier-plugin-tailwindcss`.
- GSAP animations: `"use client"` components, `useGSAP` with `{ scope: container }`, and always respect `usePrefersReducedMotion`.
- Content lives in the repo (typed TS in `src/content/`, MDX for long-form). No CMS. MDX collections (docs, blog, legal) keep metadata in a typed registry (`docs.ts`, `blog.ts`, `legal.ts`) and the body in `src/content/<collection>/<slug>.mdx`; add both when adding a page.
- The product isn't launched: pages describing planned features show `<Notice />`, and use cases are labelled as examples, not customer stories.
- Copy must be honest: no fake customer logos, endorsements or integrations we don't support.
- AI calls: hosted runs use `claude-sonnet-5-5`; "Max quality" uses `claude-opus-5-5`. Debit credits atomically **before** the call and refund on failure. BYOK keys are encrypted at rest and never logged.
- Work on feature branches with one PR per phase; commits use the gitmoji-commit style.
- Route groups: `(marketing)` (Header/Footer layout), `(auth)` (sign-in card), `(app)/app` (signed-in shell). `src/proxy.ts` only checks for a session cookie; every signed-in page must still call `requireSession()` from `src/lib/session.ts`.
- Sign-in redirects only go through `safeNextPath` (`src/lib/auth-providers.ts`), which allows `/app` paths only.

## Boundaries

- Never commit secrets; `.env*.local` is gitignored, so document new vars in `.env.example`.
- Stripe stays in test mode until the user explicitly says to go live.
- `Prismic-Course-Images/` holds original course assets: reuse them, don't delete them.

## Where to look for more

- `README.md`: plain-language project overview.
- `context/PROGRESS_TRACKER.md`: current state, next steps, session log.
- `context/BUILD_PLAN.md`, `context/ARCHITECTURE.md`, `context/LIBRARY_DOCS.md`, `context/UI_RULES.md`, `context/UI_TOKENS.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
