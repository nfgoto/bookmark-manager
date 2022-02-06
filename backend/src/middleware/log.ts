import morgan from "morgan";
import { RequestHandler } from "express";

export const logMiddleware: RequestHandler = morgan('common')