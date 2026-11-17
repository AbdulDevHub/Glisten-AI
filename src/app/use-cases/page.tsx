import type { Metadata } from "next";

import { caseStudiesSection } from "@/content/home";
import CaseStudies from "@/slices/CaseStudies";

export const metadata: Metadata = {
  title: "Use cases",
  description:
    "Example workflows for indie developers, agencies and design students using Glisten AI.",
};

export default function UseCasesPage() {
  return (
    <>
      <h1 className="sr-only">Use cases</h1>
      <CaseStudies content={caseStudiesSection} />
    </>
  );
}
