import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <span className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-widest uppercase">
            James Mosquera
          </span>
          <span className="hidden md:block text-slate-300 dark:text-slate-700">
            |
          </span>
        </div>
        <div className="flex space-x-8">
          <a
            href="https://github.com/JotaJotaM1"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-primary transition-colors text-xs font-bold tracking-widest"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/john-james-mosquera-rozo-4b22bb229/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-primary transition-colors text-xs font-bold tracking-widest"
          >
            LINKEDIN
          </a>
          <a
            href="https://x.com/JotaJotaM1"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-primary transition-colors text-xs font-bold tracking-widest"
          >
            TWITTER
          </a>
        </div>
        <div>
          <p className="text-xs text-slate-500">
            © 2026 James Mosquera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
