import { Request } from "express";
import morgan from "morgan";

morgan.token("body", (req: Request) => {
  return JSON.stringify(req.body);
});

const loggerMiddleware = morgan(":method :url :body :status");

export { loggerMiddleware };
