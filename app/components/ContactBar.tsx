import React from "react";
import ThemeToggle from "./ThemeToggle";

const ContactBar = () => {
  return (
    <aside className="w-[15vw] min-w-[80px] h-screen fixed top-0 right-0 flex flex-col p-6 space-y-4">
      {/* Top row: ThemeToggle */}
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      {/* Contact Header */}
      <h2 className="text-lg font-bold mb-4 text-[var(--color-foreground)]">💌 Contact</h2>

      {/* Space for text */}
      <div className="flex-1 overflow-auto text-[var(--color-foreground)]">
        {/* Add your contact info or text here */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Feel free to add email, social links, or any message here.</p>
      </div>
    </aside>
  );
};

export default ContactBar;
