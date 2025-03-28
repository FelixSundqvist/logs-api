import { Router } from "express";
import { body, validationResult } from "express-validator";
import sanitizeHtml from "sanitize-html";
import { createLog, getAllLogs } from "./logs.service.js";

const logsRouter = Router();

logsRouter
  .get("/", async (_req, res) => {
    const logs = await getAllLogs();
    res.send(logs);
  })
  .post(
    "/",
    body("json")
      .isObject()
      .customSanitizer((value) => sanitizeHtml(JSON.stringify(value))),
    async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({
          message: "Invalid JSON format",
        });
        return;
      }

      try {
        const result = await createLog(req.body.json);
        res.status(201).json(result);
      } catch {
        res.status(400).json({
          message: "Invalid JSON format",
        });
      }
    },
  );
export default logsRouter;
