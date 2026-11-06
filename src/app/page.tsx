import type { Metadata } from "next";

import {
  bento,
  callToAction,
  caseStudiesSection,
  hero,
  homeMeta,
  integrations,
  showcase,
} from "@/content/home";
import Hero from "@/slices/Hero";
import Bento from "@/slices/Bento";
import Showcase from "@/slices/Showcase";
import CaseStudies from "@/slices/CaseStudies";
import Integrations from "@/slices/Integrations";
import CallToAction from "@/slices/CallToAction";

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  openGraph: { title: homeMeta.ogTitle },
};

export default function Home() {
  return (
    <>
      <Hero content={hero} />
      <Bento content={bento} />
      <Showcase content={showcase} />
      <CaseStudies content={caseStudiesSection} />
      <Integrations content={integrations} />
      <CallToAction content={callToAction} />
    </>
  );
}
