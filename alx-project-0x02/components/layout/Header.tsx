import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "20px", background: "#f0f0f0" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/home">Go to Home Page</Link>
        <Link href="/about">About Us</Link>
      </nav>
    </header>
  );
}
