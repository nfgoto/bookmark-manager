import supertest from "supertest";
import express from "express";
import { setupServer } from "../../src/server";

export const testServer = supertest(setupServer(express()))