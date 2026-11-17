import Notice from "@/components/Notice";

/** Placeholder for app sections that later phases build. */
export default function ComingSoon({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section>
      <h1 className="text-3xl font-medium md:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-slate-300">{body}</p>
      <div className="max-w-2xl">
        <Notice>This part of Glisten AI is still being built.</Notice>
      </div>
    </section>
  );
}
