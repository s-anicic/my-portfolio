import ThemeToggle from "./ThemeToggle";

const ContactBar = () => {
  return (
    <aside className="hidden md:flex flex-col w-[15vw] min-w-[80px] h-screen fixed top-0 right-0 p-6 bg-white/10 dark:bg-transparent backdrop-blur-md">
      
      <div className="flex flex-col items-center overflow-auto h-full space-y-6">
        {/* Theme toggle at top */}
        <div className="flex justify-end w-full">
          <ThemeToggle />
        </div>

        <img
          src="/images/portrait.jpg"
          alt="Sara Anicic"
          className="w-24 h-24 md:w-30 md:h-30 rounded-full object-cover"
        />

        <h2 className="text-lg font-bold text-[var(--color-foreground)] text-center">
          ✉️ Contact
        </h2>

        <div className="flex-1 flex items-start justify-center text-[var(--color-foreground)] text-center">
          <p>
            Contact me on{" "}
            <a
              href="https://www.linkedin.com/in/sara-anicic/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-blue-500"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default ContactBar;
