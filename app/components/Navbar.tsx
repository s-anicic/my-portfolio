import Link from "next/link";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 pl-20 border-b border-gray-300 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium">
      {/* Left side */}
      <Header />

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="px-4 py-2 rounded-full font-medium text-gray-500 dark:text-gray-300 hover:bg-[oklch(97%_0_0)] transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="px-4 py-2 rounded-full font-medium text-gray-500 dark:text-gray-300 hover:bg-[oklch(97%_0_0)] transition-all duration-300"
        >
          About
        </Link>

        {/* Theme toggle button */}
        <ThemeToggle />
      </div>
    </div>
  );
}
