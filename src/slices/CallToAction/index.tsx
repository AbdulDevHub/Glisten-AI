import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import type { CallToActionContent } from "@/content/home";
import PlainLogo from "./PlainLogo";

export default function CallToAction({
  content,
}: {
  content: CallToActionContent;
}) {
  return (
    <Bounded className="relative py-32 text-center font-medium md:py-40">
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />

      <div className="glass-container rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-4 md:rounded-xl">
        <PlainLogo />
      </div>

      <div className="mt-8 max-w-xl text-balance text-5xl">
        {content.heading}
      </div>

      <ButtonLink href={content.button.href} className="mt-6">
        {content.button.label}
      </ButtonLink>
    </Bounded>
  );
}
