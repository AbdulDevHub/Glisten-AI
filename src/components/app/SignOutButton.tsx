"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { authClient } from "@/lib/auth-client";

export default function SignOutButton({ className }: { className?: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function onClick() {
    setPending(true);
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      className={clsx(
        "rounded-full border border-blue-100/20 bg-blue-200/10 px-3 py-1.5 text-sm text-blue-200 outline-none ring-yellow-300 transition-colors hover:border-yellow-200/40 hover:text-yellow-300 focus-visible:ring-2 disabled:opacity-60",
        className,
      )}
    >
      {pending ? "Signing out…" : "Sign out"}
    </button>
  );
}
