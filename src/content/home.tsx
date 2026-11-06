import Highlight from "@/components/Highlight";
import { caseStudies } from "./case-studies";
import { images } from "./images";
import type { ImageAsset, LinkItem, Rich } from "./types";

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
  uids: string[];
};

export type IntegrationIcon =
  "cloudflare" | "npm" | "github" | "figma" | "digitalocean" | "fly";

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
  ogTitle: "Glisten.AI - The Design Assistant of the Future",
  description:
    "With Glisten.AI you save hours of time on wireframes, mockups, and final designs.",
};

export const hero: HeroContent = {
  heading: "Designs that shine with dynamic intelligence.",
  body: (
    <p>
      The AI features you need to transport your business from the little
      leagues to the big time.
    </p>
  ),
  button: { label: "Download Now", href: "/features" },
  image: images.hero,
};

export const bento: BentoContent = {
  heading: (
    <>
      The new
      <br />
      <Highlight>Gold Standard</Highlight>.
    </>
  ),
  body: (
    <p>
      Introducing a new way of building components and layouts that leaves
      everything else in the dust.
    </p>
  ),
  items: [
    {
      title: "Endless Ideation",
      body: <p>Come up with new ideas faster than you can open Photoshop.</p>,
      image: images.smallScreenshot,
    },
    {
      title: "Benchmark with AI",
      body: (
        <p>
          Never worry about pixel perfection again, thanks to our patented AI
          critic, telling you when something is misaligned.
        </p>
      ),
      image: images.longScreenshot,
      wide: true,
    },
    {
      title: "Aesthetic Excellence",
      body: (
        <p>
          Never worry about pixel perfection again, thanks to our patented AI
          critic, telling you when something is misaligned.
        </p>
      ),
      image: images.longScreenshot,
      wide: true,
    },
    {
      title: "Pixels Perfected",
      body: (
        <p>
          Our features power your next big design, whether it’s a website or an
          app.
        </p>
      ),
      image: images.smallScreenshot,
    },
  ],
};

export const showcase: ShowcaseContent = {
  heading: ["Your Glisten.", "Your workflow."],
  subheading: <h3>Design the next big thing.</h3>,
  body: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
      <br />
      <br />
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
  ),
  icon: "gear",
  button: { label: "Get Started", href: "/features" },
  image: images.showcase,
};

export const caseStudiesSection: CaseStudiesContent = {
  heading: "Designers like you love Glisten",
  body: (
    <p>
      Learn how thousands of designers have used Glisten’s mind-blowing AI
      features in these case studies.
    </p>
  ),
  uids: caseStudies.map((study) => study.uid),
};

export const integrations: IntegrationsContent = {
  heading: "Integrations galore.",
  body: (
    <p>
      The integrations your team needs to be productive at scale with no impact
      on your burn rate.
    </p>
  ),
  icons: ["cloudflare", "npm", "github", "figma", "digitalocean", "fly"],
};

export const callToAction: CallToActionContent = {
  heading: "AI powered insights for designers",
  button: { label: "Start Now", href: "/features" },
};
