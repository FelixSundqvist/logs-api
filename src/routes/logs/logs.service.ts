import { Prisma } from "@prisma/client";
import { prisma } from "../../config/prisma.js";

export async function getAllLogs() {
  return prisma.log.findMany({
    orderBy: {
      inserted_at: Prisma.SortOrder.asc,
    },
  });
}

export async function createLog(json: string) {
  return prisma.log.create({
    data: {
      json,
    },
  });
}

export async function deleteLog(logId: string) {
  return prisma.log.delete({
    where: {
      id: logId,
    },
  });
}
