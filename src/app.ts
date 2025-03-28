import cors from "cors";
import express from "express";
import helmet from "helmet";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loggerMiddleware } from "./config/logger.js";
export const dirname = path.dirname(fileURLToPath(import.meta.url));
export const rootPath = path.dirname(dirname);

export const app = express();

// View engine
app.set("views", path.join(dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use("/static", express.static(path.join(rootPath, "public")));
app.use(helmet()); // Secure Express apps by setting HTTP headers https://helmetjs.github.io/
app.use(cors());
app.use(loggerMiddleware);
