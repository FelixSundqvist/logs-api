import { test } from "@japa/runner";

test.group("/", () => {
  test("GET /", async ({ expect, client }) => {
    const response = await client.get("/");
    expect(response.status()).toBe(200);
  });
});
