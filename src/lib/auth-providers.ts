/**
 * Social sign-in providers switch on only when both their client ID and secret
 * are set, so the sign-in page never shows a button that can't work.
 */
export const socialProviderConfig = {
  github: {
    label: "GitHub",
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  google: {
    label: "Google",
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
} as const;

export type SocialProvider = keyof typeof socialProviderConfig;

export function enabledSocialProviders() {
  return (
    Object.entries(socialProviderConfig) as [
      SocialProvider,
      (typeof socialProviderConfig)[SocialProvider],
    ][]
  )
    .filter(([, p]) => p.clientId && p.clientSecret)
    .map(([id, p]) => ({ id, label: p.label }));
}

/** Only allow redirects back into the app after sign-in. */
export function safeNextPath(next: string | string[] | undefined) {
  const value = Array.isArray(next) ? next[0] : next;
  return value && /^\/app(\/[\w\-/]*)?$/.test(value) ? value : "/app";
}
