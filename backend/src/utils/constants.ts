import { extractVariable } from "./env";

export const SERVER_PORT = extractVariable("PORT", 3000);
export const OEMBED_PROVIDERS_URL = extractVariable("OEMBED_PROVIDERS_URL");
