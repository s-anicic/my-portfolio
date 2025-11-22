import ThemeToggle from "./ThemeToggle";

const ContactBar = () => {
  return (
    <aside className="w-[15vw] min-w-[80px] h-screen fixed top-0 right-0 flex flex-col items-center p-6 space-y-4">
      <div className="flex justify-end w-full">
        <ThemeToggle />
      </div>

      {/* Portrait */}
      <img
        src="/images/portrait.jpg"
        alt="Sara Anicic"
        className="w-30 h-30 rounded-full mb-4 object-cover"
      />

      <h2 className="text-lg font-bold mb-4 text-[var(--color-foreground)] text-center">✉️ Contact</h2>

      <div className="flex-1 overflow-auto text-[var(--color-foreground)] text-center">
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
    </aside>
  );
};

export default ContactBar;
