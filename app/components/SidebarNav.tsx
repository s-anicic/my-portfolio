import Link from "next/link";

const projects = [
  { name: "Garden", url: "https://github.com/s-anicic/garden" },
  { name: "Cherry Blossom: Sakura's Renewal", url: "https://github.com/s-anicic/cherry-blossom-sakuras-renewal" },
  { name: "Exempt Development Tool", url: "https://github.com/L-Baldacchino/permitpals" },
];

const SidebarNav = () => (
  <aside className="overflow-auto hidden md:flex flex-col w-[15vw] min-w-[80px] h-screen fixed top-0 left-0 p-6 space-y-6">
    <h2 className="text-lg font-bold text-[var(--color-foreground)]">🛠️ Projects</h2>

    <div>
      <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-2 border-b border-black dark:border-white pb-1">
        GitHub Projects
      </h3>
      <nav className="flex flex-col gap-2">
        {projects.map(({ name, url }) => (
          <Link
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-md text-[var(--color-foreground)] hover:bg-gray-200 dark:hover:bg-zinc-900 transition-colors duration-200"
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  </aside>
);

export default SidebarNav;
