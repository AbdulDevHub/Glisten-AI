import type { Faq } from "@/content/pricing";
import { PiCaretDown } from "react-icons/pi";

/** Accessible accordion built on <details>, so it works without JavaScript. */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="w-full max-w-3xl divide-y divide-slate-100/20 border-y border-slate-100/20">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-2">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
            {faq.question}
            <PiCaretDown
              aria-hidden
              className="shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
            />
          </summary>
          <p className="pb-4 pr-8 text-slate-300">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
