import { test } from "@japa/runner";
import { getAllLogs } from "./logs.service.js";

test.group("/api/logs", () => {
  test("GET /api/logs", async ({client, expect}) => {
    const response = await client.get("/api/logs");
    expect(response.status()).toBe(200);
  });
  test("POST /api/logs", async ({client, expect}) => {
    const request = client.post("/api/logs").json({
      json: {
        foo: "bar",
      },
    });
    const response = await request;
    expect(response.status()).toBe(200);
  });
});
