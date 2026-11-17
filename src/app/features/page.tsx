import type { Metadata } from "next";

import Bounded from "@/components/Bounded";
import Highlight from "@/components/Highlight";
import Notice from "@/components/Notice";
import PageHeader from "@/components/PageHeader";
import {
  criticShowcase,
  featureGrid,
  featuresMeta,
  generatorShowcase,
} from "@/content/features";
import CallToAction from "@/slices/CallToAction";
import Showcase from "@/slices/Showcase";

export const metadata: Metadata = {
  title: featuresMeta.title,
  description: featuresMeta.description,
  openGraph: { title: "Features · Glisten.AI" },
};

export default function FeaturesPage() {
  return (
    <>
      <Bounded>
        <PageHeader
          eyebrow="Features"
          heading={
            <>
              Critique it. <Highlight>Build it.</Highlight>
            </>
          }
        >
          <p>
            Two tools that work together: a critic that tells you what&rsquo;s
            wrong with a UI, and a generator that writes the fix.
          </p>
        </PageHeader>
        <Notice />
      </Bounded>

      <Showcase content={criticShowcase} />
      <Showcase content={generatorShowcase} />

      <Bounded>
        <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
          The details
        </h2>
        <div className="mt-16 grid w-full max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featureGrid.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="glass-container rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4"
            >
              <div className="w-fit rounded-lg bg-blue-500/35 p-3 text-2xl">
                <Icon aria-hidden />
              </div>
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 text-slate-300">{body}</p>
            </div>
          ))}
        </div>
      </Bounded>

      <CallToAction
        content={{
          heading: "Ready when you are",
          button: { label: "View pricing", href: "/pricing" },
        }}
      />
    </>
  );
}
