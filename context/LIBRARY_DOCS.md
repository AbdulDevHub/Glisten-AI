# Library Docs

<!--
Purpose: project-specific rules for the third-party libraries and APIs used here, to prevent outdated or made-up API usage.
Check this before writing integration code. When a rule here conflicts with live docs, the live docs (context7 / official site) win: fix this file.
Add a section when a new non-trivial SDK is adopted.
-->

## GSAP (`gsap`, `@gsap/react`)
- `gsap.registerPlugin(useGSAP[, ScrollTrigger])` inside the client component; animations live in `useGSAP(() => {...}, { scope: ref })`.
- Elements animated in start with `opacity-0` in their classes, and the reduced-motion branch must `gsap.set` them visible.

## Next.js App Router
- Images: `next/image`. Remote image hosts must be listed in `next.config` `images.remotePatterns` (Vercel Blob in phase 4).
- In Next 15+, `params` and `searchParams` in pages and `generateMetadata` are Promises: `await` them.

## Anthropic API (`@anthropic-ai/sdk`, planned)
- Models: `claude-sonnet-5-5` (default hosted), `claude-opus-5-5` ("Max quality"). Use the exact IDs and never add date suffixes.
- Thinking: `thinking: { type: "adaptive" }` with `output_config: { effort }`. `budget_tokens` and `{type:"disabled"}` return a 400 on these models.
- Structured output: `output_config: { format: {...} }` (not `output_format`). No assistant prefill (400). Forced `tool_choice` any/tool → 400.
- Stream long outputs (`client.messages.stream(...)`, `.finalMessage()`). Check `stop_reason === "refusal"` before reading content.
- Server-side fallbacks on hosted calls: beta `server-side-fallback-2026-07-01` + `fallbacks: "default"`.
- Typed errors (`Anthropic.RateLimitError`, `AuthenticationError`, …): an AuthenticationError on a BYOK call means the user's key is bad, so tell them.

## OpenAI (`openai`, planned, BYOK only)
- Only reached through the provider adapter in `src/lib/ai`; prompts and output schemas are shared with the Claude path.

## Stripe (planned)
- Test mode only until the user says otherwise. Verify webhook signatures on the raw body. Credits are granted from `invoice.paid`, never from the redirect after checkout.

## Better Auth + Drizzle (planned)
- Use Better Auth's Drizzle adapter and organization plugin; generate its schema with the Better Auth CLI, then migrate with `drizzle-kit`.
