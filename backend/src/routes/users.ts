import { Router } from "express";
import * as controller from "../controllers/users";

export const users = Router();

users.get("/", controller.index);
