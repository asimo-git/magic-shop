import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background shadow-md w-full flex justify-between gap-2 items-center p-4">
      <div>
        <h1 className="font-[family-name:var(--font-title)] text-4xl">
          <Link href="/">Magic gizmo shop</Link>
        </h1>
      </div>
      <Navigation />
    </header>
  );
}
