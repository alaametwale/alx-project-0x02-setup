import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
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

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body,
  }));

  return {
    props: {
      posts,
    },
  };
}
