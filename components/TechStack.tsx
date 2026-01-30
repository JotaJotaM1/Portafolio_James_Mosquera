
import React from 'react';

const techs = ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND", "NODE.JS", "FIGMA"];

export const TechStack: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Powering Experiences With</h3>
      </div>
      <div className="flex justify-center gap-6 sm:gap-12 flex-wrap px-4">
        {techs.map((tech) => (
          <span 
            key={tech} 
            className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
