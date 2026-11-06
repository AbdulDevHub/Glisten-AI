import type { ImageAsset } from "./types";

/** Every content image in /public/images, with intrinsic sizes. */
export const images = {
  hero: {
    src: "/images/hero-image.png",
    alt: "The dashboard of Glisten.AI",
    width: 2672,
    height: 1604,
  },
  smallScreenshot: {
    src: "/images/small-screenshot.png",
    alt: "A screenshot of the Glisten AI user selection pane",
    width: 433,
    height: 252,
  },
  longScreenshot: {
    src: "/images/long-screenshot.png",
    alt: "UI of a notification in the Glisten App",
    width: 1001,
    height: 272,
  },
  showcase: {
    src: "/images/showcase-image.png",
    alt: "Code snippet for Glisten AI",
    width: 2188,
    height: 1179,
  },
  caseStudyNike: {
    src: "/images/case-study-nike.png",
    alt: "The Nike logo",
    width: 778,
    height: 454,
  },
  caseStudyPrismic: {
    src: "/images/case-study-prismic.png",
    alt: "The Prismic logo",
    width: 778,
    height: 454,
  },
  designerDrawing: {
    src: "/images/designer-drawing.jpg",
    alt: "A designer drawing on paper",
    width: 1600,
    height: 2000,
  },
  designerComputer: {
    src: "/images/designer-computer.jpg",
    alt: "A designer working at a computer",
    width: 1600,
    height: 980,
  },
} satisfies Record<string, ImageAsset>;
