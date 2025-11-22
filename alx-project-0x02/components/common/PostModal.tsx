import { useState } from "react";

interface PostModalProps {
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

export default function PostModal({ onClose, onSubmit }: PostModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-80">
        <h2 className="text-lg font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <div className="flex justify-end gap-2">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Add Post
            </button>
            <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
