import { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

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
      <h1>Welcome to the Home Page</h1>

      <button
        onClick={() => setShowModal(true)}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        Add New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      {showModal && (
        <PostModal
          onClose={() => setShowModal(false)}
          onSubmit={addNewPost}
        />
      )}
    </div>
  );
}
