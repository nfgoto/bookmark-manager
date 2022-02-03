import { extractVariable } from "./env";

export const SERVER_PORT = extractVariable('PORT', 3000)