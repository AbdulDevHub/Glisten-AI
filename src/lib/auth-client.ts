import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";

/** Browser-side auth client (same origin as the app, so no baseURL needed). */
export const authClient = createAuthClient({
  plugins: [magicLinkClient()],
});
