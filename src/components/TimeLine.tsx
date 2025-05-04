import { fetchPosts } from "@/lib/posts";

export default async function TimeLine() {
  const posts = await fetchPosts();

  return (
    <div className="p-4 space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded-md bg-white shadow">
          <p className="text-gray-800">{post.content}</p>
          <p className="text-xs text-gray-500 mt-2">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
