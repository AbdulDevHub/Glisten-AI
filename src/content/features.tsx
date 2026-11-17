import type { IconType } from "react-icons";
import {
  PiArrowsClockwise,
  PiClockCounterClockwise,
  PiCode,
  PiDeviceMobile,
  PiExport,
  PiKey,
  PiMapPin,
  PiShieldCheck,
} from "react-icons/pi";

import type { ShowcaseContent } from "./home";
import { images } from "./images";

export const featuresMeta = {
  title: "Features",
  description:
    "A design critic that pins issues on your screenshots, and a generator that writes React + Tailwind code. Connected by Fix with AI.",
};

export const criticShowcase: ShowcaseContent = {
  heading: ["The critic."],
  subheading: <h3>Know exactly what to fix.</h3>,
  body: (
    <p>
      Upload or paste a screenshot, or give Glisten a URL to capture at desktop
      and mobile widths. You get pinned issues covering spacing, alignment,
      contrast, typography, hierarchy and accessibility, each with a severity
      and a suggested fix, plus an overall score.
    </p>
  ),
  icon: "gear",
  button: { label: "Read the critic docs", href: "/docs/critic" },
  image: images.useCaseAgency,
};

export const generatorShowcase: ShowcaseContent = {
  heading: ["The generator."],
  subheading: <h3>From prompt to working code.</h3>,
  body: (
    <p>
      Describe what you need, add a reference image if you have one, and watch a
      single-file React + Tailwind component stream in with a live, sandboxed
      preview. Iterate in chat, then export TSX or plain HTML.
    </p>
  ),
  icon: "cycle",
  button: { label: "Read the generator docs", href: "/docs/generator" },
  image: images.showcase,
  reverse: true,
};

export type FeatureItem = { icon: IconType; title: string; body: string };

export const featureGrid: FeatureItem[] = [
  {
    icon: PiMapPin,
    title: "Pinned issues",
    body: "Every problem is marked where it happens, so there's no guessing which button is meant.",
  },
  {
    icon: PiDeviceMobile,
    title: "Desktop and mobile",
    body: "URL captures run at both widths, so you see layout problems that only show up on phones.",
  },
  {
    icon: PiArrowsClockwise,
    title: "Fix with AI",
    body: "Turn a critique into a generation prompt that addresses each issue in code.",
  },
  {
    icon: PiClockCounterClockwise,
    title: "Version history",
    body: "Each project keeps its critiques and generations, so you can track the score over time.",
  },
  {
    icon: PiExport,
    title: "Export anywhere",
    body: "Copy the TSX into a React or Next.js project, or export plain HTML.",
  },
  {
    icon: PiCode,
    title: "Readable output",
    body: "One component per file using Tailwind utility classes, with no proprietary runtime.",
  },
  {
    icon: PiKey,
    title: "Bring your own key",
    body: "Use your Claude or OpenAI key on the free plan and pay your provider directly.",
  },
  {
    icon: PiShieldCheck,
    title: "Private by default",
    body: "Your uploads and projects are visible only to you or your team. API keys are encrypted at rest.",
  },
];
