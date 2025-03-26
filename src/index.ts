import indexRouter from "./routes/index/index.router.js";
import logsRouter from "./routes/logs/logs.router.js";
import { app } from "./server.js";

app.use("/", indexRouter);
app.use("/api/logs", logsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
