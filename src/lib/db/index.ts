import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

import * as schema from "./schema";

/**
 * Server-only Drizzle client. Uses Neon's pooled URL over WebSockets so later
 * phases can run real transactions (credit debits). Migrations use the direct
 * DATABASE_URL through drizzle-kit instead.
 */
const connectionString =
  process.env.DATABASE_URL_POOLED ?? process.env.DATABASE_URL;

// Warn instead of throwing so builds without a database (e.g. CI) still work;
// queries fail at runtime until the URL is set.
if (!connectionString) {
  console.warn(
    "[db] DATABASE_URL_POOLED (or DATABASE_URL) is not set. See .env.example.",
  );
}

const pool = new Pool({ connectionString });

export const db = drizzle({ client: pool, schema });
export { schema };
