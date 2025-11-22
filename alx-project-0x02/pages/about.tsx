import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <div className="flex gap-4 mt-4">
        <Button size="small" shape="rounded-sm">Small Rounded</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded</Button>
        <Button size="large" shape="rounded-full">Large Rounded</Button>
      </div>
    </div>
  );
}
