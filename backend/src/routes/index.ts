import { Router } from "express"
import { healthRouter } from "./health"
import { v1Router } from "./v1"

const routerMap = new Map<string, Router>()
routerMap.set('/health', healthRouter)
routerMap.set('/v1', v1Router)

export const getRoutes = () => routerMap