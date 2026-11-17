import Bounded from "@/components/Bounded";
import { getUseCase, type UseCase } from "@/content/use-cases";
import type { CaseStudiesContent } from "@/content/home";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudies({
  content,
}: {
  content: CaseStudiesContent;
}) {
  const caseStudies = content.slugs
    .map(getUseCase)
    .filter((useCase): useCase is UseCase => Boolean(useCase));

  return (
    <Bounded>
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        {content.heading}
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        {content.body}
      </div>

      <div className="mt-20 grid gap-16">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={caseStudy.slug}
            className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          >
            <div className="col-span-1 flex flex-col justify-center gap-4">
              <h3 className="text-4xl">{caseStudy.title}</h3>
              <div className="max-w-md">
                <p>{caseStudy.description}</p>
              </div>

              <Link
                href={`/use-cases/${caseStudy.slug}`}
                className="after:absolute after:inset-0 hover:underline"
              >
                {caseStudy.linkLabel}
              </Link>
            </div>
            <Image
              src={caseStudy.image.src}
              alt={caseStudy.image.alt}
              width={caseStudy.image.width}
              height={caseStudy.image.height}
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={clsx(
                "rounded-xl lg:col-span-2",
                index % 2 && "md:-order-1",
              )}
            />
          </div>
        ))}
      </div>
    </Bounded>
  );
}
