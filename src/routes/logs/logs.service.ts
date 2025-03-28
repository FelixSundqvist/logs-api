import { prisma } from "../../config/prisma.js";

export async function getAllLogs() {
  return prisma.log.findMany();
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
