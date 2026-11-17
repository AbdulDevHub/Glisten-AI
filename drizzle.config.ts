import { existsSync } from "node:fs";
import { defineConfig } from "drizzle-kit";

// drizzle-kit doesn't read Next's env files, so load .env.local ourselves.
if (existsSync(".env.local")) process.loadEnvFile(".env.local");

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  // Migrations use the direct (non-pooled) connection.
  dbCredentials: { url: process.env.DATABASE_URL! },
});
