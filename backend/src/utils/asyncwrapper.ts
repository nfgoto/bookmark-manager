import { NextFunction, Request, RequestHandler, Response } from "express";

interface AsyncRequestHandler extends RequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

/**
 * Wrapper for async error handling
 * @param re
 * @returns
 */
export const asyncWrapper =
  (re: AsyncRequestHandler): RequestHandler =>
  (req, res, next) => {
    re(req, res, next).catch(next);
  };
