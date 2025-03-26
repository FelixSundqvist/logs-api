import { Router } from "express";
import { createLog, getAllLogs } from "./logs.service.js";

const logsRouter = Router();

logsRouter
  .get("/", async (req, res) => {
    const logs = await getAllLogs();
    res.send(logs);
  })
  .post("/", async (req, res) => {
    try {
      await createLog(JSON.stringify(req.body.json));
      res.json({
        message: "ok",
      });
    } catch {
      res.status(400).json({
        message: "error",
      });
    }
  });
export default logsRouter;
