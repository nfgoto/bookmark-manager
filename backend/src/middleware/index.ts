import { RequestHandler } from "express";
import { corsMiddleware } from "./cors";
import { helmetMiddleware } from "./helmet";
import { jsonMiddleware } from "./json";
import { limiterMiddleware } from "./limiter";
import { logMiddleware } from "./log";

/**
 * Order of middlewares matters
 */
export const getMiddlewares = (): RequestHandler[] => [
  helmetMiddleware,
  limiterMiddleware,
  corsMiddleware,
  logMiddleware,
  jsonMiddleware,
];
