import { Router } from "express";
import { getLinks } from "../controllers/v1";
import { asyncWrapper } from "../utils/asyncwrapper";

export const v1Router = Router();

// GET /v1/links
v1Router.get("/links", asyncWrapper(getLinks));
