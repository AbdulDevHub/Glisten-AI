import type { Metadata } from "next";
import { Suspense } from "react";

import Bounded from "@/components/Bounded";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions, feedback or launch updates: send the Glisten AI team a message.",
};

export default function ContactPage() {
  return (
    <Bounded>
      <PageHeader eyebrow="Contact" heading="Get in touch">
        <p>
          Questions, feedback or want to hear when Glisten launches? Send a
          message and we&rsquo;ll reply by email.
        </p>
      </PageHeader>
      <Suspense>
        <ContactForm />
      </Suspense>
    </Bounded>
  );
}
