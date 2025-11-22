import { type ButtonProps } from "@/interfaces";

export default function Button({ size, shape, children, onClick }: ButtonProps) {
  let sizeClass = "";
  if (size === "small") sizeClass = "px-2 py-1 text-sm";
  else if (size === "medium") sizeClass = "px-4 py-2 text-base";
  else if (size === "large") sizeClass = "px-6 py-3 text-lg";

  return (
    <button
      className={`${sizeClass} bg-blue-500 text-white ${shape} hover:bg-blue-600 transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
