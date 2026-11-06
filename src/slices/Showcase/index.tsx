import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import type { ShowcaseContent } from "@/content/home";
import clsx from "clsx";
import Image from "next/image";
import { PiArrowsClockwise, PiGear } from "react-icons/pi";
import AnimatedContent from "./AnimatedContent";

const icons = {
  gear: <PiGear />,
  cycle: <PiArrowsClockwise />,
};

export default function Showcase({ content }: { content: ShowcaseContent }) {
  return (
    <Bounded className="relative">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />

      <AnimatedContent>
        {content.heading.map((line) => (
          <h2
            key={line}
            className="text-balance text-center text-5xl font-medium md:text-7xl"
          >
            {line}
          </h2>
        ))}
      </AnimatedContent>

      <div className="mt-16 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
        <div>
          <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
            {icons[content.icon]}
          </div>

          <div className="mt-6 text-2xl font-normal">{content.subheading}</div>

          <div className="prose prose-invert mt-4 max-w-xl">{content.body}</div>

          <ButtonLink href={content.button.href} className="mt-6">
            {content.button.label}
          </ButtonLink>
        </div>

        <Image
          src={content.image.src}
          alt={content.image.alt}
          width={content.image.width}
          height={content.image.height}
          className={clsx(
            "opacity-90 shadow-2xl lg:col-span-2 lg:pt-0",
            content.reverse
              ? "lg:order-1 lg:translate-x-[15%]"
              : "lg:-order-1 lg:translate-x-[-15%]",
          )}
        />
      </div>
    </Bounded>
  );
}
