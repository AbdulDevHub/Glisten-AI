import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import Bounded from "@/components/Bounded";
import Notice from "@/components/Notice";
import StarGrid from "@/components/StarGrid";
import { getUseCase, useCases } from "@/content/use-cases";
import RichText from "@/slices/RichText";

type Props = { params: Promise<{ slug: string }> };

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const page = getUseCase(slug);
  if (!page) notFound();

  return (
    <Bounded as="article">
      <div className="relative grid place-items-center text-center">
        <StarGrid />
        <h1 className="text-balance text-5xl font-medium md:text-7xl">
          {page.title}
          <span className="block text-lg text-yellow-500">
            Example workflow
          </span>
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
          quality={90}
          priority
        />
      </div>
      <Notice />
      <div className="mx-auto">
        <RichText>{page.body}</RichText>
      </div>
    </Bounded>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getUseCase(slug);
  if (!page) notFound();

  return {
    title: `${page.title} · Use cases`,
    description: page.metaDescription,
  };
}

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export const dynamicParams = false;
