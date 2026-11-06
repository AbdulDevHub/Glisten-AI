# UI Rules

<!--
Purpose: layout, composition and accessibility rules that keep new pages and the app consistent with the existing homepage design.
Follow these for every new page or component. Add a rule when a recurring UI decision is made.
-->

- **Homepage is frozen design.** Change only data and copy in `src/slices/*`; never restyle them.
- New pages reuse the homepage building blocks: `Bounded` for section width/padding (`max-w-6xl`, centered column), `ButtonLink` for CTAs, the `glass-container` class for framed media, `StarGrid` only in hero-style headers.
- Section headings: `text-balance text-center text-5xl font-medium md:text-7xl`. Supporting copy: `mx-auto mt-6 max-w-md text-balance text-center text-slate-300`.
- Emphasis inside headings uses the gold gradient text (`bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent`), used sparingly.
- Long-form text (docs, blog, legal) uses `prose prose-invert prose-lg prose-slate`.
- The signed-in app (`/app`) uses the same palette and font, with denser layouts: a sidebar plus content, `slate` borders at 20% opacity, no StarGrid.
- Mobile first: everything must work at 360px with no horizontal scroll. The nav collapses to the slide-in menu below `md`.
- Accessibility: every icon-only button gets `sr-only` text; links that wrap a card use the `after:absolute after:inset-0` pattern; animations respect `usePrefersReducedMotion`; tap targets are at least `min-h-11`.
