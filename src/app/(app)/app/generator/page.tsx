import type { Metadata } from "next";

import ComingSoon from "@/components/app/ComingSoon";
import { comingSoon } from "@/content/app";

export const metadata: Metadata = { title: comingSoon.generator.title };

export default function Page() {
  return <ComingSoon {...comingSoon.generator} />;
}
