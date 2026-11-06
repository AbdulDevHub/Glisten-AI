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

Next.js App Router (TypeScript, `src/` dir, `@/*` → `src/*`) · Tailwind CSS 3.4 + `@tailwindcss/typography` · GSAP + `@gsap/react` · react-icons · clsx.
Planned: Better Auth, Neon Postgres + Drizzle, Vercel Blob, Stripe, Resend, `@anthropic-ai/sdk` + `openai`, MDX. No CMS (Prismic was removed in phase 1).

## Commands

- Install: `npm install`
- Dev: `npm run dev` · Build: `npm run build` · Lint: `npm run lint` (ESLint flat config) · Types: `npm run typecheck` · Format: `npm run format`
- Verify: npm run verify

## Conventions & constraints

- **Do not change the homepage's look.** Keep the markup, Tailwind classes and GSAP timelines of `src/slices/*` and `src/components/*`; swap only the data source and copy. Visually diff the homepage after touching them.
- Stay on Tailwind 3.x (v4 would shift the design). Class order comes from `prettier-plugin-tailwindcss`.
- GSAP animations: `"use client"` components, `useGSAP` with `{ scope: container }`, and always respect `usePrefersReducedMotion`.
- Content lives in the repo (typed TS in `src/content/`, MDX for long-form). No CMS.
- Copy must be honest: no fake customer logos, endorsements or integrations we don't support.
- AI calls: hosted runs use `claude-sonnet-5-5`; "Max quality" uses `claude-opus-5-5`. Debit credits atomically **before** the call and refund on failure. BYOK keys are encrypted at rest and never logged.
- Work on feature branches with one PR per phase; commits use the gitmoji-commit style.

## Boundaries

- Never commit secrets; `.env*.local` is gitignored, so document new vars in `.env.example`.
- Stripe stays in test mode until the user explicitly says to go live.
- `Prismic-Course-Images/` holds original course assets: reuse them, don't delete them.

## Where to look for more

- `README.md`: plain-language project overview.
- `context/PROGRESS_TRACKER.md`: current state, next steps, session log.
- `context/BUILD_PLAN.md`, `context/ARCHITECTURE.md`, `context/LIBRARY_DOCS.md`, `context/UI_RULES.md`, `context/UI_TOKENS.md`.
