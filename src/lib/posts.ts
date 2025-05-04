// src/lib/posts.ts
import { PrismaClient } from "@/generated/prisma"; // ← generated配下でOKです
const prisma = new PrismaClient();

export async function fetchPosts() {
  return await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
}
