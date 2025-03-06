import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="shadow-md w-full flex justify-between gap-2 items-center p-4">
      <div>
        <h1 className="font-[family-name:var(--font-title)] text-4xl">
          Magic gizmo shop
        </h1>
      </div>
      <Navigation />
    </header>
  );
}
