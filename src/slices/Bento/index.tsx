import Bounded from "@/components/Bounded";
import type { BentoContent } from "@/content/home";
import clsx from "clsx";
import Image from "next/image";

export default function Bento({ content }: { content: BentoContent }) {
  return (
    <Bounded>
      <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
        {content.heading}
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        {content.body}
      </div>

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {content.items.map((item) => (
          <div
            className={clsx(
              "glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4",
              item.wide ? "md:col-span-2" : "md:col-span-1",
            )}
            key={item.title}
          >
            <h3 className="text-2xl">{item.title}</h3>

            <div className="max-w-md text-balance text-slate-300">
              {item.body}
            </div>

            <Image
              className="max-h-36 w-auto"
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
            />
          </div>
        ))}
      </div>
    </Bounded>
  );
}
