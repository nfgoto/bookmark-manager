import { Router } from "express";
import { getLinks } from "../controllers/v1";

export const v1Router = Router()

// GET /v1/links
v1Router.get('/links', getLinks)