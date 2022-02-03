import { Application, } from "express";
import { getMiddlewares } from "../middleware";

export const setupServer = (app: Application): Application => {
  app.use(getMiddlewares())
  return app
}