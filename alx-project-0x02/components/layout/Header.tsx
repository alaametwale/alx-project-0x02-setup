import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-gray-100 p-4 mb-4 flex gap-4">
      <Link href="/home" className="text-blue-500 hover:underline">Home</Link>
      <Link href="/about" className="text-blue-500 hover:underline">About</Link>
      <Link href="/posts" className="text-blue-500 hover:underline">Posts</Link>
    </nav>
  );
}
