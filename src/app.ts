import cors from "cors";
import express from "express";
import helmet from "helmet";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loggerMiddleware } from "./config/logger.js";
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const rootPath = path.dirname(__dirname);

export const app = express();

// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use("/static", express.static(path.join(rootPath, "public")));
app.use(helmet()); // Secure Express apps by setting HTTP headers https://helmetjs.github.io/
app.use(cors());
app.use(loggerMiddleware);
