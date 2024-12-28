import { Router } from "express";
import * as controller from "../controllers/calendar";

export const calendar = Router();

calendar.get("/", controller.index);
calendar.post("/create", controller.create);
calendar.get("/get", controller.getAll);