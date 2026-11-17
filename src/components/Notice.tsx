import { launchNotice } from "@/content/site";

/** Honest "not launched yet" banner for pages that describe planned features. */
export default function Notice({
  children = launchNotice,
}: {
  children?: React.ReactNode;
}) {
  return (
    <p className="mx-auto mt-8 max-w-2xl rounded-lg border border-yellow-200/30 bg-yellow-100/5 px-4 py-3 text-center text-sm text-yellow-100">
      {children}
    </p>
  );
}
