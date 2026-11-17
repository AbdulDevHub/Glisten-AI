import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import SignInForm from "@/components/auth/SignInForm";
import { auth } from "@/lib/auth";
import { enabledSocialProviders, safeNextPath } from "@/lib/auth-providers";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false },
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string | string[]; error?: string }>;
}) {
  const params = await searchParams;
  const next = safeNextPath(params.next);

  const session = await auth.api.getSession({ headers: await headers() });
  if (session) redirect(next);

  return (
    <div className="rounded-2xl border border-blue-100/15 bg-slate-950/70 p-6 shadow-2xl backdrop-blur sm:p-8">
      <h1 className="text-balance text-center text-3xl font-medium">
        Sign in to Glisten AI
      </h1>
      <p className="mt-2 text-center text-slate-300">
        New here? The same link creates your account.
      </p>

      <SignInForm
        next={next}
        providers={enabledSocialProviders()}
        linkError={params.error}
      />

      <p className="mt-8 text-center text-sm text-slate-400">
        By continuing you agree to the{" "}
        <Link href="/terms" className="underline hover:text-yellow-300">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline hover:text-yellow-300">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
