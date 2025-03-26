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
