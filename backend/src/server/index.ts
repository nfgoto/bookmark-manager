import { Application, ErrorRequestHandler } from "express";
import { getMiddlewares } from "../middleware";
import { getRoutes } from "../routes";

export const setupServer = (app: Application): Application => {
  // register middlewares
  app.use(getMiddlewares());

  // register routes
  getRoutes().forEach((router, prefix) => app.use(prefix, router))

  // app level error handling
  const errorRequestHandler: ErrorRequestHandler = ({ status, message }, req, res) => {
    const errorStatus = status ?? 500;
    console.error(`${req.method} ${req.path} [${process.pid}] [${new Date().toISOString()}] [${req.ip}] - ERROR: ${message}`);

    return res
      .status(errorStatus)
      .json({ errorStatus, date: new Date(), message });
  };
  app.use(errorRequestHandler);

  return app;
};
