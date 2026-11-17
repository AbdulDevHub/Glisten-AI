import Bounded from "@/components/Bounded";
import DocsNav from "@/components/DocsNav";
import Notice from "@/components/Notice";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Bounded>
      <div className="grid w-full gap-10 md:grid-cols-[12rem_1fr] lg:gap-16">
        <DocsNav />
        <div className="min-w-0">
          <Notice />
          {children}
        </div>
      </div>
    </Bounded>
  );
}
