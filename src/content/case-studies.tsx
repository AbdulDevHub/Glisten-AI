import Image from "next/image";
import { images } from "./images";
import type { ImageAsset, Rich } from "./types";

export type CaseStudy = {
  uid: string;
  company: string;
  description: string;
  image: ImageAsset;
  metaTitle: string;
  metaDescription: string;
  body: Rich;
};

// Placeholder article carried over from the Prismic course content.
// Phase 2 replaces these with honest use-case stories.
function placeholderBody(image: ImageAsset): Rich {
  return (
    <>
      <h2>
        <strong>Lorem ipsum</strong>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut
        aliquam purus sit amet luctus venenatis. Scelerisque in dictum non
        consectetur a erat nam.
        <br />
        <br />
        Vel eros donec ac odio tempor. Cras pulvinar mattis nunc sed blandit
        libero volutpat. Enim tortor at auctor urna nunc id cursus metus.
        Adipiscing elit duis tristique sollicitudin nibh. Arcu vitae elementum
        curabitur vitae.
        <br />
        <br />
        Orci porta non pulvinar neque laoreet suspendisse. Quisque sagittis
        purus sit amet volutpat. Gravida cum sociis natoque penatibus et magnis
        dis parturient. Porta nibh venenatis cras sed. Phasellus egestas tellus
        rutrum tellus pellentesque eu.
      </p>
      <p className="block-img">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut
        aliquam purus sit amet luctus venenatis. Scelerisque in dictum non
        consectetur a erat nam.
        <br />
        <br />
        Vel eros donec ac odio tempor. Cras pulvinar mattis nunc sed blandit
        libero volutpat. Enim tortor at auctor urna nunc id cursus metus.
        Adipiscing elit duis tristique sollicitudin nibh. Arcu vitae elementum
        curabitur vitae.
      </p>
      <h2>
        <strong>Important note</strong>
      </h2>
      <p>
        Orci porta non pulvinar neque laoreet suspendisse. Quisque sagittis
        purus sit amet volutpat. Gravida cum sociis natoque penatibus et magnis
        dis parturient. Porta nibh venenatis cras sed. Phasellus egestas tellus
        rutrum tellus pellentesque eu.
      </p>
    </>
  );
}

export const caseStudies: CaseStudy[] = [
  {
    uid: "nike",
    company: "Nike",
    description:
      "Designers at the legendary sports wear brand used Glisten to completely redesign their basketball sneakers.",
    image: images.caseStudyNike,
    metaTitle: "Nike Case Study",
    metaDescription: "Nike Case Study From Glisten.AI",
    body: placeholderBody(images.designerDrawing),
  },
  {
    uid: "prismic",
    company: "Prismic",
    description:
      "The headless page builder used Glisten to change the way websites are made, unlocking potential for their users.",
    image: images.caseStudyPrismic,
    metaTitle: "Prismic Case Study",
    metaDescription: "Prismic Case Study From Glisten.AI",
    body: placeholderBody(images.designerComputer),
  },
];

export function getCaseStudy(uid: string) {
  return caseStudies.find((study) => study.uid === uid);
}
