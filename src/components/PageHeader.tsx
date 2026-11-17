import StarGrid from "@/components/StarGrid";

type PageHeaderProps = {
  /** Small gold label above the heading, e.g. "Pricing". */
  eyebrow?: string;
  heading: React.ReactNode;
  children?: React.ReactNode;
};

/** Hero-style header for marketing pages (StarGrid backdrop, centered heading). */
export default function PageHeader({
  eyebrow,
  heading,
  children,
}: PageHeaderProps) {
  return (
    <div className="relative grid place-items-center text-center">
      <StarGrid />
      {eyebrow && (
        <p className="text-lg font-medium text-yellow-500">{eyebrow}</p>
      )}
      <h1 className="mt-2 text-balance text-5xl font-medium md:text-7xl">
        {heading}
      </h1>
      {children && (
        <div className="mx-auto mt-6 max-w-xl text-balance text-lg text-slate-300">
          {children}
        </div>
      )}
    </div>
  );
}
