import Link from "next/link";

const SidebarNav = () => (
  <aside className="w-[15vw] min-w-[80px] h-screen fixed top-0 left-0 p-6 space-y-4 bg-white/10 dark:bg-transparent backdrop-blur-md">
    <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">🛠️ Projects</h2>
    <nav className="flex flex-col gap-3">
      <Link href="https://github.com/s-anicic/garden" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-md text-[var(--color-foreground)] hover:bg-gray-200 dark:hover:bg-zinc-900 transition-colors duration-200">
        Garden
      </Link>
      <Link href="https://github.com/s-anicic/cherry-blossom-sakuras-renewal" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-md text-[var(--color-foreground)] hover:bg-gray-200 dark:hover:bg-zinc-900 transition-colors duration-200">
        Cherry Blossom: Sakura&apos;s Renewal
      </Link>
      <Link href="https://github.com/L-Baldacchino/permitpals" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-md text-[var(--color-foreground)] hover:bg-gray-200 dark:hover:bg-zinc-900 transition-colors duration-200">
        Exempt Development Tool
      </Link>
    </nav>
  </aside>
);

export default SidebarNav;
