import { useEffect, useState } from "react";

type Post = {
  id: number;
  content: string;
  createdAt: string;
};

export default function TimeLine() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

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
