import { Router } from "express";
import { getLinks, createLink } from "../controllers/v1";
import { asyncWrapper } from "../utils/asyncwrapper";

export const v1Router = Router();

// GET /v1/links
// TODO: set csrf token
v1Router.get("/links", asyncWrapper(getLinks));

// POST /v1/link
// TODO: add payload validation
// TODO: add csrf token
v1Router.post("/link", asyncWrapper(createLink));
