import { Router } from "express";
import { getAllLogs } from "../logs/logs.service.js";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  const logs = await getAllLogs();
  res.render("index", { logs });
});

export default indexRouter;
