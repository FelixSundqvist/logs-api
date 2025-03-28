import { JsonValue } from "@prisma/client/runtime/client";

export type Log = { id: string; inserted_at: Date; json: JsonValue };
