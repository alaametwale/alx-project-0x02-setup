import { CardProps } from "../../interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "15px",
      background: "#fafafa"
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
