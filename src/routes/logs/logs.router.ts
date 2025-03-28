import { Router } from "express";
import { body, validationResult } from "express-validator";
import sanitizeHtml from "sanitize-html";
import { createLog, getAllLogs } from "./logs.service.js";

const logsRouter = Router();

logsRouter
  .get("/", async (req, res) => {
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
          message: "Invalid json format",
        });
        return;
      }

      try {
        await createLog(req.body.json);
        res.json({
          message: "ok",
        });
      } catch {
        res.status(400).json({
          message: "Invalid json format",
        });
      }
    },
  );
export default logsRouter;
