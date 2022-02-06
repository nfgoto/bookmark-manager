import { Application, ErrorRequestHandler } from "express";
import { getMiddlewares } from "../middleware";

export const setupServer = (app: Application): Application => {
  // register middlewares
  app.use(getMiddlewares());

  // app.get('/health', (__req, _res) => { throw new Error("something went wrong") })

  // health check

  app.get('/health', (_req, res) => { res.send('OK') })

  // app level error handling
  const errorRequestHandler: ErrorRequestHandler = ({ status, message }, req, res, _next) => {
    const errorStatus = status ?? 500;
    console.error(`${req.method} ${req.path} [${process.pid}] [${new Date().toISOString()}] [${req.ip}] - ERROR: ${message}`);

    return res
      .status(errorStatus)
      .json({ errorStatus, date: new Date(), message });
  };
  app.use(errorRequestHandler);

  return app;
};
