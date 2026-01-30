import React, { useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="material-icons-outlined text-primary text-3xl" aria-hidden>
              code
            </span>
            <a href="/" aria-label="Home - James Mosquera" className="font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
              James Mosquera
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              href="#work"
            >
              WORK
            </a>
            <a
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              href="#about"
            >
              ABOUT
            </a>
            <a
              className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30"
              href="#contact"
            >
              CONTACT
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-icons-outlined text-xl">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors bg-white/70 dark:bg-slate-900/70"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="material-icons-outlined text-xl">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button
              type="button"
              onClick={handleToggle}
              aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white p-2 rounded-xl bg-white/70 dark:bg-slate-900/70"
            >
              <span className="material-icons-outlined text-3xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-all duration-300 ease-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 transition-transform duration-300 ease-out ${isOpen ? "translate-y-0" : "-translate-y-2"}`}>
          <div className="flex flex-col gap-2">
            <a
              href="#work"
              onClick={handleClose}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              WORK
            </a>
            <a
              href="#about"
              onClick={handleClose}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              onClick={handleClose}
              className="inline-flex self-start px-4 py-3 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
