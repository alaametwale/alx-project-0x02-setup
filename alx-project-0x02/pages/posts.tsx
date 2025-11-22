import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body
        }));
        setPosts(formatted);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <PostCard key={post.title + post.userId} {...post} />
      ))}
    </div>
  );
}
