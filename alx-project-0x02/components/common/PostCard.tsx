import { type PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
}
