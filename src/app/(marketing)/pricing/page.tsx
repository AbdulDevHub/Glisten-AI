import type { Metadata } from "next";
import clsx from "clsx";
import { PiCheckBold } from "react-icons/pi";

import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import FaqList from "@/components/FaqList";
import Highlight from "@/components/Highlight";
import Notice from "@/components/Notice";
import PageHeader from "@/components/PageHeader";
import { creditCosts, plans, pricingFaqs } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free with your own Claude or OpenAI key, or $12/month for 200 hosted credits. Team plans from $29 per seat.",
  openGraph: { title: "Pricing · Glisten.AI" },
};

export default function PricingPage() {
  return (
    <>
      <Bounded>
        <PageHeader
          eyebrow="Pricing"
          heading={
            <>
              Simple, <Highlight>honest</Highlight> pricing
            </>
          }
        >
          <p>
            Free with your own API key, or a flat monthly plan with hosted
            credits. No free hosted tier and no surprise overages.
          </p>
        </PageHeader>
        <Notice>
          Glisten AI is in development, so plans aren&rsquo;t on sale yet. These
          are the prices we will launch with.
        </Notice>

        <div className="mt-16 grid w-full max-w-5xl gap-10 md:grid-cols-3">
          {plans.map((plan) => (
            <section
              key={plan.name}
              aria-labelledby={`plan-${plan.name}`}
              className={clsx(
                "glass-container flex flex-col rounded-lg bg-gradient-to-b p-6",
                plan.highlight
                  ? "from-slate-800 to-slate-900"
                  : "from-gray-900 to-gray-950",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <h2 id={`plan-${plan.name}`} className="text-2xl">
                  {plan.name}
                </h2>
              </div>
              <p className="mt-4">
                <span className="text-5xl font-medium">{plan.price}</span>{" "}
                <span className="text-slate-400">{plan.period}</span>
              </p>
              <p className="mt-4 text-slate-300">{plan.summary}</p>
              <ul className="mt-6 grid gap-3 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <PiCheckBold
                      aria-hidden
                      className="mt-1 shrink-0 text-yellow-300"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink href="/contact?topic=early-access">
                  Get notified at launch
                </ButtonLink>
              </div>
            </section>
          ))}
        </div>
      </Bounded>

      <Bounded>
        <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
          How credits work
        </h2>
        <p className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          Pro and Team plans use credits for hosted runs. BYOK runs never use
          credits.
        </p>
        <table className="mt-12 w-full max-w-xl text-left">
          <caption className="sr-only">Credit cost per action</caption>
          <thead>
            <tr className="border-b border-slate-100/20 text-slate-400">
              <th scope="col" className="py-3 font-normal">
                Action
              </th>
              <th scope="col" className="py-3 text-right font-normal">
                Credits
              </th>
            </tr>
          </thead>
          <tbody>
            {creditCosts.map((row) => (
              <tr key={row.action} className="border-b border-slate-100/10">
                <td className="py-3">{row.action}</td>
                <td className="py-3 text-right text-yellow-300">
                  {row.credits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-6 max-w-xl text-center text-sm text-slate-400">
          Credits are deducted when a run starts and refunded automatically if
          it fails. Monthly credits don&rsquo;t roll over.
        </p>
      </Bounded>

      <Bounded>
        <h2 className="mb-12 text-balance text-center text-5xl font-medium md:text-7xl">
          Questions
        </h2>
        <FaqList faqs={pricingFaqs} />
      </Bounded>
    </>
  );
}
