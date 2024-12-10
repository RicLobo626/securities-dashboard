import { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/prisma.ts";

export interface Context {
  prisma: PrismaClient;
}

export const createContext = async () => ({ prisma });
