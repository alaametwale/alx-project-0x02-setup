import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header"; // ✅ استيراد Header

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "First Card", content: "This is the content of the first card." },
    { title: "Second Card", content: "Another card with different content." }
  ]);

  const [showModal, setShowModal] = useState(false);

  const addNewPost = (newPost: any) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Header /> {/* ✅ استخدام Header */}

      <h1>Welcome to the Home Page</h1>

      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded"
      >
        Add New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      {showModal && (
        <PostModal onClose={() => setShowModal(false)} onSubmit={addNewPost} />
      )}
    </div>
  );
}
