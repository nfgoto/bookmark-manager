import { RequestHandler } from "express";
import { helmetMiddleware } from "./helmet";
import { logMiddleware } from "./log";

export const getMiddlewares = (): RequestHandler[] => ([helmetMiddleware, logMiddleware])