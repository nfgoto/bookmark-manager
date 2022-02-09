import { Application, ErrorRequestHandler } from "express";
import { getMiddlewares } from "../middleware";
import { getRoutes } from "../routes";

export const setupServer = (app: Application): Application => {
  // register middlewares
  app.use(getMiddlewares());

  // register routes
  getRoutes().forEach((router, prefix) => app.use(prefix, router));

  // app level error handling
  const errorRequestHandler: ErrorRequestHandler = (
    { status, message, response },
    req,
    res,
    _next
  ) => {
    const errorStatus = status ?? response?.status ?? 500;
    console.error(
      `[${process.pid}] ${req.method} ${
        req.path
      } [${new Date().toISOString()}] [${req.ip}] - ERROR: ${message}`
    );

    return res.status(errorStatus).json({
      errorStatus,
      date: new Date(),
      message,
      ...(response?.data && { errorData: response.data }),
    });
  };
  app.use(errorRequestHandler);

  return app;
};
