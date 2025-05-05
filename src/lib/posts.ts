import { PrismaClient } from "@/generated/prisma";
export const prisma = new PrismaClient();

// ⏱️ 遅延用の関数
// function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export async function fetchPosts() {
  return prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
}
