import { PORT } from "./constants.js";
import indexRouter from "./routes/index/index.router.js";
import logsRouter from "./routes/logs/logs.router.js";
import { app } from "./app.js";

app.use("/", indexRouter);
app.use("/api/logs", logsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
