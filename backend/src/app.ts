import express from "express";
import logger from "morgan";
import * as path from "path";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
import { users } from "./routes/users";
import { calendar } from "./routes/calendar";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3001);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Add this line to parse URL-encoded request bodies

app.use(express.static(path.join(__dirname, "../public")));
app.use("/index", index);
app.use("/users", users);
app.use("/calendar", calendar);

app.use(errorNotFoundHandler);
app.use(errorHandler);
