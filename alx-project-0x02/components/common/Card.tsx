import { type CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border p-4 rounded mb-4 bg-gray-50">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
