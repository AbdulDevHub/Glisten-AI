import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import RichText from "@/slices/RichText";

type Props = { params: Promise<{ uid: string }> };

export default async function CaseStudyPage({ params }: Props) {
  const { uid } = await params;
  const page = getCaseStudy(uid);
  if (!page) notFound();

  return (
    <Bounded as="article">
      <div className="relative grid place-items-center text-center">
        <StarGrid />
        <h1 className="text-7xl font-medium">
          {page.company}
          <span className="block text-lg text-yellow-500">Case Study</span>
        </h1>
        <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300">
          {page.description}
        </p>
        <Image
          src={page.image.src}
          alt={page.image.alt}
          width={page.image.width}
          height={page.image.height}
          className="rounded-lg"
          quality={100}
        />
      </div>
      <div className="mx-auto">
        <RichText>{page.body}</RichText>
      </div>
    </Bounded>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { uid } = await params;
  const page = getCaseStudy(uid);
  if (!page) notFound();

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ uid: study.uid }));
}

export const dynamicParams = false;
