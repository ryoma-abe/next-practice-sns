// lib/posts.ts
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export async function fetchPostsFromDB() {
  return prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
}
// 👆 これは「Server Component 用の投稿取得ロジック」です。
