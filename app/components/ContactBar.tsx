import ThemeToggle from "./ThemeToggle";

const ContactBar = () => {
  return (
    <aside className="hidden md:flex flex-col w-[17vw] min-w-[80px] h-screen fixed top-0 right-0 p-6">
      
      <div className="flex flex-col items-center h-full space-y-6 overflow-auto">
        {/* Theme toggle at top */}
        <div className="flex justify-end w-full">
          <ThemeToggle />
        </div>

        <img
          src="/images/portrait.jpg"
          alt="Sara Anicic"
          className="object-cover w-24 h-24 rounded-full md:w-30 md:h-30"
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
