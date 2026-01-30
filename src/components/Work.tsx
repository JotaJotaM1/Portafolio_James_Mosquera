import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Complete redesign increasing conversion by 42%",
    tags: ["REACT", "NEXT.JS", "TAILWIND"],
    imageUrl: "https://picsum.photos/seed/shop/800/450"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization with 60fps performance",
    tags: ["TYPESCRIPT", "D3.JS"],
    imageUrl: "https://picsum.photos/seed/chart/800/450"
  },
  {
    title: "Design System",
    description: "Component library used across 15+ products",
    tags: ["STORYBOOK", "CSS-IN-JS"],
    imageUrl: "https://picsum.photos/seed/design/800/450"
  },
  {
    title: "SaaS Application",
    description: "Progressive web app with offline-first architecture",
    tags: ["VUE.JS", "FIREBASE", "PWA"],
    imageUrl: "https://picsum.photos/seed/saas/800/450"
  },
    {
    title: "SaaS Application",
    description: "Progressive web app with offline-first architecture",
    tags: ["VUE.JS", "FIREBASE", "PWA"],
    imageUrl: "https://picsum.photos/seed/saas/800/450"
  }
];

export const Work: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Case studies showcasing high-performance UI implementation & comprehensive design systems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video bg-slate-200 dark:bg-slate-900 overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{project.description}</p>
                  </div>
                  <a href="#" className="p-2 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-primary hover:border-primary hover:text-white transition-colors">
                    <span className="material-icons-outlined text-sm">arrow_outward</span>
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider">{tag}</span>
                  ))}
                </div>
                <button className="text-xs font-bold text-primary hover:text-primary-hover uppercase tracking-widest border-b-2 border-transparent hover:border-primary transition-all">
                  Read Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
