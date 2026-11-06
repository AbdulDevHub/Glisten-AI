import Bounded from "@/components/Bounded";

/** Long-form text block (articles, simple pages) in the site's prose style. */
export default function RichText({ children }: { children: React.ReactNode }) {
  return (
    <Bounded>
      <div className="prose prose-lg prose-slate prose-invert">{children}</div>
    </Bounded>
  );
}
