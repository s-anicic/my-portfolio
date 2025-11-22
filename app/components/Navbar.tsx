import Link from "next/link";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 pl-20 font-medium">
      {/* Left side */}
      <Header />

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="px-4 py-2 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-700 text-[var(--color-foreground)]"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="px-4 py-2 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-700 text-[var(--color-foreground)]"
        >
          About
        </Link>

        {/* Theme toggle button */}
        <ThemeToggle />
      </div>
    </div>
  );
}
