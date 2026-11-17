import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { APIError } from "better-auth/api";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins/magic-link";

import { socialProviderConfig } from "@/lib/auth-providers";
import { db, schema } from "@/lib/db";
import { isEmailConfigured, sendEmail } from "@/lib/email";

const socialProviders = Object.fromEntries(
  Object.entries(socialProviderConfig)
    .filter(([, p]) => p.clientId && p.clientSecret)
    .map(([id, p]) => [
      id,
      { clientId: p.clientId!, clientSecret: p.clientSecret! },
    ]),
);

/** Server-side auth: magic link email plus GitHub/Google when configured. */
export const auth = betterAuth({
  appName: "Glisten AI",
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, { provider: "pg", schema }),
  socialProviders,
  plugins: [
    magicLink({
      expiresIn: 60 * 10,
      sendMagicLink: async ({ email, url }) => {
        if (!isEmailConfigured()) {
          if (process.env.NODE_ENV !== "production") {
            // Local development without Resend: print the link instead.
            console.info(`\n[auth] Magic link for ${email}:\n${url}\n`);
            return;
          }
          throw new APIError("SERVICE_UNAVAILABLE", {
            message: "Email sign-in isn't connected yet. Please try later.",
          });
        }
        await sendEmail({
          to: email,
          subject: "Your Glisten AI sign-in link",
          text: `Sign in to Glisten AI:\n\n${url}\n\nThis link expires in 10 minutes. If you didn't ask for it, you can ignore this email.`,
        });
      },
    }),
    nextCookies(), // must stay last
  ],
});

export type Session = typeof auth.$Infer.Session;
