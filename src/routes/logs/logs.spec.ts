import { test } from "@japa/runner";
import { createLog, deleteLog, getAllLogs } from "./logs.service.js";
import { Log } from "./logs.types.js";

test.group("Logs", () => {
  test("getAllLogs()", async ({ expectTypeOf }) => {
    const logs = await getAllLogs();
    expectTypeOf(logs).toBeArray();
  });
  test("createLog()", async ({ expectTypeOf, expect }) => {
    const response = await createLog(JSON.stringify({
      test: "foo"
    }))
    expectTypeOf(response).toEqualTypeOf<Log>()

    // clean up
    deleteLog(response.id)
  });
});
