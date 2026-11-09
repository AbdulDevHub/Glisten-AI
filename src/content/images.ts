import type { ImageAsset } from "./types";

/**
 * Every content image in /public/images, with intrinsic sizes.
 * The hero, bento and showcase images are placeholders from the original
 * course design; phase 8 swaps them for real app screenshots, so their alt
 * text describes what they actually show.
 */
export const images = {
  hero: {
    src: "/images/hero-image.png",
    alt: "An example email app interface, shown as a sample UI",
    width: 2672,
    height: 1604,
  },
  smallScreenshot: {
    src: "/images/small-screenshot.png",
    alt: "A sample account-switcher interface",
    width: 433,
    height: 252,
  },
  longScreenshot: {
    src: "/images/long-screenshot.png",
    alt: "A sample notification interface",
    width: 1001,
    height: 272,
  },
  showcase: {
    src: "/images/showcase-image.png",
    alt: "A code editor showing a React component",
    width: 2188,
    height: 1179,
  },
  useCaseIndie: {
    src: "/images/use-case-indie.jpg",
    alt: "A developer at a desk working on a design system on a wide monitor",
    width: 778,
    height: 454,
  },
  useCaseAgency: {
    src: "/images/use-case-agency.png",
    alt: "A screenshot of a landing page of the kind you can upload for a critique",
    width: 778,
    height: 454,
  },
  useCaseStudent: {
    src: "/images/use-case-student.jpg",
    alt: "A designer sketching in a notebook",
    width: 778,
    height: 454,
  },
} satisfies Record<string, ImageAsset>;
