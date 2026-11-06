import Bounded from "@/components/Bounded";
import type { HeroContent } from "@/content/home";
import AnimatedContent from "./AnimatedContent";

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <Bounded className="text-center">
      <AnimatedContent content={content} />
    </Bounded>
  );
}
