import Bounded from "@/components/Bounded";
import type { IntegrationsContent } from "@/content/home";
import Image from "next/image";
import StarBackground from "./StarBackground";
import AnimatedContent from "./AnimatedContent";

import background from "./background.jpg";

export default function Integrations({
  content,
}: {
  content: IntegrationsContent;
}) {
  return (
    <Bounded className="relative overflow-hidden">
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          {content.heading}
        </h2>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          {content.body}
        </div>

        <AnimatedContent icons={content.icons} />
      </div>
    </Bounded>
  );
}
