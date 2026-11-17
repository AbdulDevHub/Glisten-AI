import Highlight from "@/components/Highlight";
import { images } from "./images";
import type { ImageAsset, LinkItem, Rich } from "./types";
import { useCases } from "./use-cases";

export type HeroContent = {
  heading: string;
  body: Rich;
  button: LinkItem;
  image: ImageAsset;
};

export type BentoItem = {
  title: string;
  body: Rich;
  image: ImageAsset;
  wide?: boolean;
};

export type BentoContent = {
  heading: Rich;
  body: Rich;
  items: BentoItem[];
};

export type ShowcaseContent = {
  /** Each entry renders as its own <h2> line. */
  heading: string[];
  subheading: Rich;
  body: Rich;
  icon: "gear" | "cycle";
  button: LinkItem;
  image: ImageAsset;
  reverse?: boolean;
};

export type CaseStudiesContent = {
  heading: string;
  body: Rich;
  slugs: string[];
};

/** Tools Glisten actually works with (AI providers and the code it outputs). */
export type IntegrationIcon =
  "claude" | "openai" | "react" | "tailwind" | "nextjs" | "vercel";

export type IntegrationsContent = {
  heading: string;
  body: Rich;
  icons: IntegrationIcon[];
};

export type CallToActionContent = {
  heading: string;
  button: LinkItem;
};

export const homeMeta = {
  title: "Glisten.AI",
  ogTitle: "Glisten.AI - AI design critic and UI generator",
  description:
    "Glisten AI critiques your UI screenshots and turns the fixes into clean React and Tailwind code.",
};

export const hero: HeroContent = {
  heading: "Designs that shine, reviewed and built by AI.",
  body: (
    <p>
      Get a pinned, prioritized critique of any screenshot, then turn the fixes
      into clean React and Tailwind code.
    </p>
  ),
  button: { label: "See how it works", href: "/features" },
  image: images.hero,
};

export const bento: BentoContent = {
  heading: (
    <>
      Your second
      <br />
      <Highlight>pair of eyes</Highlight>.
    </>
  ),
  body: (
    <p>
      A critic that spots what&rsquo;s off, and a generator that builds what
      comes next.
    </p>
  ),
  items: [
    {
      title: "Generate from a prompt",
      body: (
        <p>Describe a component or page and get a React + Tailwind draft.</p>
      ),
      image: images.smallScreenshot,
    },
    {
      title: "Pinned critiques",
      body: (
        <p>
          Spacing, alignment, contrast, typography and hierarchy issues, pinned
          right on your screenshot with a severity and a fix.
        </p>
      ),
      image: images.longScreenshot,
      wide: true,
    },
    {
      title: "Fix with AI",
      body: (
        <p>
          Send a critique to the generator and get revised code that addresses
          each issue, then keep iterating in chat.
        </p>
      ),
      image: images.longScreenshot,
      wide: true,
    },
    {
      title: "Bring your own key",
      body: (
        <p>
          Use your own Claude or OpenAI key for free, or pick a plan with hosted
          credits.
        </p>
      ),
      image: images.smallScreenshot,
    },
  ],
};

export const showcase: ShowcaseContent = {
  heading: ["Your Glisten.", "Your workflow."],
  subheading: <h3>Critique, fix, repeat.</h3>,
  body: (
    <p>
      Upload a screenshot or paste a URL and Glisten reviews it at desktop and
      mobile widths, with every issue pinned where it happens.
      <br />
      <br />
      When you&rsquo;re happy, export the generated React and Tailwind code or
      plain HTML and drop it into your project.
    </p>
  ),
  icon: "gear",
  button: { label: "See pricing", href: "/pricing" },
  image: images.showcase,
};

export const caseStudiesSection: CaseStudiesContent = {
  heading: "Built for people who ship UI",
  body: (
    <p>
      Example workflows for the people Glisten is designed for. These are
      illustrations, not customer stories.
    </p>
  ),
  slugs: useCases.map((useCase) => useCase.slug),
};

export const integrations: IntegrationsContent = {
  heading: "Works with your stack.",
  body: (
    <p>
      Bring your own Claude or OpenAI key, and get code that drops straight into
      React, Tailwind and Next.js projects, ready to deploy on Vercel or
      anywhere else.
    </p>
  ),
  icons: ["claude", "openai", "react", "tailwind", "nextjs", "vercel"],
};

export const callToAction: CallToActionContent = {
  heading: "AI powered insights for designers",
  button: { label: "View pricing", href: "/pricing" },
};
