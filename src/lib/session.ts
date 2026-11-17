import { cache } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

/** The current session, read once per request. */
export const getSession = cache(async () =>
  auth.api.getSession({ headers: await headers() }),
);

/** Session for signed-in pages; signed-out visitors go to the sign-in page. */
export async function requireSession(next = "/app") {
  const session = await getSession();
  if (!session) redirect(`/sign-in?next=${encodeURIComponent(next)}`);
  return session;
}
