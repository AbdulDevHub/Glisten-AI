# UI Tokens

<!--
Purpose: the design values the existing site uses, so new UI matches it without guessing.
These are Tailwind classes/values taken from the current code. Update this if a token changes or a new one is introduced.
-->

| Token | Value | Where |
|---|---|---|
| Page background | `#070815` (`bg-[#070815]`) | `layout.tsx` body, mobile nav |
| Text | `text-white`; secondary `text-slate-300` | everywhere |
| Font | DM Sans via `next/font` → `--font-dm-sans` (Tailwind `font-sans`) | `layout.tsx`, `tailwind.config.js` |
| Accent (CTA) | `text-blue-200`, `bg-blue-200/10`, `border-blue-100/20`; hover `text-yellow-300`, `border-yellow-200/40` | `ButtonLink` |
| Gold highlight | `from-yellow-100 to-yellow-500` gradient text; star color `#ffd057` | Bento heading, `StarGrid` |
| Glow | `bg-blue-500/30–50` + `blur-2xl`…`blur-[160px]` | Hero image, CTA, Showcase |
| Glass frame | `.glass-container::before`: `-inset-[10px] rounded-xl border-slate-100/20 bg-slate-200/10 backdrop-blur-md` | `globals.css` |
| Cards | `rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4` | Bento items |
| Panel | `rounded-xl border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm` | Showcase |
| Dividers | `border-slate-600` | Footer |
| Section spacing | `px-4 py-14 md:px-6 md:py-20 lg:py-24`, first section `pt-10` | `Bounded` |
| Radius | `rounded-full` buttons, `rounded-lg`/`rounded-xl` cards | — |
| Breakpoints | Tailwind defaults (`md` 768, `lg` 1024, `xl` 1280) | — |
