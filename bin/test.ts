import { apiClient } from "@japa/api-client";
import { expect } from "@japa/expect";
import { expectTypeOf } from "@japa/expect-type";
import { configure, processCLIArgs, run } from "@japa/runner";
import { PORT } from "../src/constants.js";

processCLIArgs(process.argv.splice(2));

configure({
  files: ["src/**/*.spec.ts"],
  plugins: [expect(), apiClient(`http://localhost:${PORT}`), expectTypeOf()],
});

run();
