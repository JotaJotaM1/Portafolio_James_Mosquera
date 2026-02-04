import React from "react";
import { useTranslation } from "react-i18next";

const techs = [
  { name: "React", icon: "/images/react.svg" },
  { name: "Next.js", icon: "/images/nextjs.svg" },
  { name: "Astro", icon: "/images/astro-svgrepo-com.svg" },
  { name: "Vite", icon: "/images/vite-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/images/typescript.svg" },
  { name: "Tailwind CSS", icon: "/images/tailwind.svg" },
  { name: "HTML5", icon: "/images/html-5-svgrepo-com.svg" },
  { name: "SEO", icon: "/images/seo-3-svgrepo-com.svg" },
  { name: "Web Performance", icon: "/images/efficiency-performance.svg" },
  { name: "Node.js", icon: "/images/nodejs.svg" },
  { name: "Git / GitHub", icon: "/images/github-svgrepo-com.svg" },
  { name: "Figma", icon: "/images/figma.svg" },
];

export const TechStack: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      className="w-full bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 py-10"
      aria-labelledby="techstack-title"
    >
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h3
          id="techstack-title"
          className="text-xs font-semibold tracking-widest text-slate-500 uppercase"
        >
          {t("techstack.title")}
        </h3>
      </div>

      <div className="relative overflow-hidden px-4 tech-marquee-mask max-w-5xl mx-auto">
        <div className="tech-marquee gap-6 sm:gap-10">
          {[...techs, ...techs].map((tech, index) => (
            <span
              key={`${tech.name}-${index}`}
              className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 transition-all duration-300 cursor-default shrink-0"
              aria-hidden={index >= techs.length}
            >
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                className="h-7 w-7 sm:h-8 sm:w-8"
                loading="lazy"
                decoding="async"
              />
              <span className="tracking-wide">{tech.name.toUpperCase()}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
