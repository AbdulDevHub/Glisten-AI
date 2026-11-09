import Bounded from "@/components/Bounded";
import PageHeader from "@/components/PageHeader";

type ProsePageProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  /** Shown under the heading, e.g. "Last updated November 8, 2026". */
  intro?: React.ReactNode;
  children: React.ReactNode;
};

/** A hero-style header followed by long-form prose (about, legal pages). */
export default function ProsePage({
  eyebrow,
  heading,
  intro,
  children,
}: ProsePageProps) {
  return (
    <Bounded as="article">
      <PageHeader eyebrow={eyebrow} heading={heading}>
        {intro}
      </PageHeader>
      <div className="prose prose-lg prose-slate prose-invert mt-12 prose-headings:font-medium prose-a:text-yellow-300">
        {children}
      </div>
    </Bounded>
  );
}
