import { Router } from "express";

export const healthRouter = Router()

// GET /health
healthRouter.get('/', (_req, res) => {
  res.send("OK")
})