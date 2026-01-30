import React from "react";

const techs = [
  { name: "React", icon: "/images/react.svg" },
  { name: "Next.js", icon: "/images/nextjs.svg" },
  { name: "TypeScript", icon: "/images/typescript.svg" },
  { name: "Tailwind", icon: "/images/tailwind.svg" },
  { name: "Node.js", icon: "/images/nodejs.svg" },
  { name: "Figma", icon: "/images/figma.svg" },
];

export const TechStack: React.FC = () => {
  return (
    <section
      className="w-full bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 py-10"
      aria-labelledby="techstack-title"
    >
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <h3
          id="techstack-title"
          className="text-xs font-semibold tracking-widest text-slate-500 uppercase"
        >
          Powering Experiences With
        </h3>
      </div>

      <div className="flex justify-center gap-6 sm:gap-12 flex-wrap px-4">
        {techs.map((tech) => (
          <span
            key={tech.name}
            className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 transition-all duration-300 cursor-default"
          >
            {/* Icono SVG real a color */}
            <img
              src={tech.icon}
              alt={`${tech.name} logo`}
              className="h-5 w-5 sm:h-6 sm:w-6"
              loading="lazy"
              decoding="async"
            />

            <span className="tracking-wide">
              {tech.name.toUpperCase()}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};