import { test } from "@japa/runner";
import { deleteLog } from "./logs.service.js";
import { Log } from "./logs.types.js";

test.group("/api/logs", () => {
  test("GET /api/logs", async ({ expect, client }) => {
    const response = await client.get("/api/logs");
    expect(response.status()).toBe(200);
  });
  test("POST /api/logs", async ({ expect, expectTypeOf, client }) => {
    const request = client.post("/api/logs").json({
      json: {
        test: "foo",
      },
    });

    const response = await request;
    expect(response.status()).toBe(201);

    const body = response.body() as Log;
    expectTypeOf(body).toEqualTypeOf<Log>();
    await deleteLog(body.id);
  });
});
