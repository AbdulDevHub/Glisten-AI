import type { Metadata } from "next";

import ComingSoon from "@/components/app/ComingSoon";
import { comingSoon } from "@/content/app";

export const metadata: Metadata = { title: comingSoon.critic.title };

export default function Page() {
  return <ComingSoon {...comingSoon.critic} />;
}
