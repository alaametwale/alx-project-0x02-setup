import { useState } from "react";

export default function PostModal({ onClose, onSubmit }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    onSubmit({ title, content });
    onClose();
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)", display: "flex",
      justifyContent: "center", alignItems: "center"
    }}>
      <div style={{
        background: "#fff", padding: "20px", borderRadius: "8px",
        width: "300px"
      }}>
        <h2>Add New Post</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", height: "80px", padding: "8px" }}
        />

        <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
          Add Post
        </button>

        <button onClick={onClose} style={{ marginLeft: "10px", color: "red" }}>
          Close
        </button>
      </div>
    </div>
  );
}
