import React from "react";

const services = [
  {
    icon: "code",
    title: "UI Implementation",
    desc: "Pixel-perfect conversion from designs to production-ready code with attention to detail.",
  },
  {
    icon: "layers",
    title: "Design Systems",
    desc: "Building scalable component libraries and design tokens that ensure consistency.",
  },
  {
    icon: "speed",
    title: "Performance",
    desc: "Optimizing load times, rendering performance, and Core Web Vitals for speed.",
  },
  {
    icon: "search",
    title: "SEO Basics",
    desc: "Implementing semantic HTML and structured data for better search visibility.",
    
  },
  {
    icon: "accessibility_new",
    title: "Accessibility",
    desc: "WCAG-compliant interfaces with screen reader support and inclusive design.",
  },
  {
    icon: "groups",
    title: "Collaboration",
    desc: "Working closely with designers and back-end teams to deliver cohesive products.",
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Services & Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 uppercase tracking-widest text-xs font-bold">
            What I bring to your project
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons-outlined text-primary group-hover:text-white">
                  {s.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {s.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
