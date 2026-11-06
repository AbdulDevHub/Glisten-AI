import type { Metadata } from "next";
import Link from "next/link";

import RichText from "@/slices/RichText";

export const metadata: Metadata = {
  title: "Features",
  description: "Glisten AI Features",
  openGraph: { title: "Features" },
};

// Placeholder carried over from Prismic; phase 2 builds the real Features page.
export default function FeaturesPage() {
  return (
    <RichText>
      <h1>Cool Features</h1>
      <p>
        <Link href="/">Go back to the homepage.</Link>
      </p>
    </RichText>
  );
}
