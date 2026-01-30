import React from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="material-icons-outlined text-primary text-3xl">
              code
            </span>
            <h1 className="font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
              James Mosquera
            </h1>
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
          <div className="md:hidden flex items-center">
            <button className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              <span className="material-icons-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
