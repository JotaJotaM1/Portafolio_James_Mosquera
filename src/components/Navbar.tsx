import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);
  const isSpanish = i18n.language?.startsWith("es");
  const handleLanguageChange = (lang: "en" | "es") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className="fixed w-full z-50 top-4">
      <div className="max-w-none 2xl:max-w-[90rem] mx-auto px-2 sm:px-4 lg:px-8">
        <div className="rounded-xl border border-gray-200/80 dark:border-gray-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg shadow-slate-900/10">
          <div className="flex justify-between h-16 items-center px-6">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span
              className="material-icons-outlined text-primary text-3xl"
              aria-hidden
            >
              code
            </span>
            <a
              href="/"
              aria-label="Home - James Mosquera"
              className="hidden md:inline-block font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white"
            >
              James Mosquera
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              href="#work"
            >
              {t("nav.work")}
            </a>
            <a
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              href="#about"
            >
              {t("nav.about")}
            </a>
            <a
              className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30"
              href="#contact"
            >
              {t("nav.contact")}
            </a>
            <div
              role="group"
              aria-label={t("language.label")}
              className="flex items-center rounded-full border border-slate-200 dark:border-slate-700 p-1 transition-colors duration-200 ease-out"
            >
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1.5 text-xs font-bold tracking-widest rounded-full transition-all duration-200 ease-out ${!isSpanish ? "bg-primary text-white shadow-sm" : "text-slate-500 dark:text-slate-400"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("es")}
                className={`px-3 py-1.5 text-xs font-bold tracking-widest rounded-full transition-all duration-200 ease-out ${isSpanish ? "bg-primary text-white shadow-sm" : "text-slate-500 dark:text-slate-400"}`}
              >
                ES
              </button>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 transition-colors active:bg-transparent focus:bg-transparent"
              aria-label={darkMode ? t("theme.light") : t("theme.dark")}
            >
              <span className="material-icons-outlined text-xl">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 transition-colors active:bg-transparent focus:bg-transparent"
              aria-label={darkMode ? t("theme.light") : t("theme.dark")}
            >
              <span className="material-icons-outlined text-xl">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <div
              role="group"
              aria-label={t("language.label")}
              className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 p-1 transition-colors duration-200 ease-out"
            >
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1.5 text-xs font-bold tracking-widest rounded-lg transition-all duration-200 ease-out ${!isSpanish ? "bg-primary text-white shadow-sm" : "text-slate-500 dark:text-slate-400"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("es")}
                className={`px-3 py-1.5 text-xs font-bold tracking-widest rounded-lg transition-all duration-200 ease-out ${isSpanish ? "bg-primary text-white shadow-sm" : "text-slate-500 dark:text-slate-400"}`}
              >
                ES
              </button>
            </div>
            <button
              type="button"
              onClick={handleToggle}
              aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className={`p-2 rounded-xl ${darkMode ? "text-white" : "text-black"} active:bg-transparent focus:bg-transparent`}
            >
              <span className="material-icons-outlined text-3xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden max-w-none 2xl:max-w-[90rem] mx-auto px-2 sm:px-4 lg:px-8">
        <div
          id="mobile-menu"
          className={`mt-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-all duration-300 ease-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div
            className={`px-4 py-4 transition-transform duration-300 ease-out ${isOpen ? "translate-y-0" : "-translate-y-2"}`}
          >
            <div className="flex flex-col gap-2">
              <a
                href="#work"
                onClick={handleClose}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 active:bg-transparent focus:bg-transparent"
              >
                {t("nav.work")}
              </a>
              <a
                href="#about"
                onClick={handleClose}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 active:bg-transparent focus:bg-transparent"
              >
                {t("nav.about")}
              </a>
              <a
                href="#contact"
                onClick={handleClose}
                className="inline-flex self-start px-4 py-3 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30"
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
