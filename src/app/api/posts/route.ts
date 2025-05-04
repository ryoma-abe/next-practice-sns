import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { content } = await req.json();
  const post = await prisma.post.create({
    data: { content },
  });
  return Response.json(post);
}

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
  return Response.json(posts);
}
