import { extractVariable } from "./env";

export const SERVER_PORT = extractVariable("PORT", 3000);
export const OEMBED_PROVIDERS_URL = extractVariable("OEMBED_PROVIDERS_URL");
export const SQLITE_DB_PATH = extractVariable(
  "SQLITE_DB_PATH",
  process.env.NODE_ENV === "test" ? "db/test.sqlite" : "db/link.sqlite"
);
