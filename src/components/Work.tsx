import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  url: string;
}

const projects: Project[] = [
  {
    id: "astro-gc-construction",
    title: "GC Construction 2.0",
    description: "Responsive construction company landing page",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FLEXBOX", "CSS GRID", "SEO"],
    imageUrl: "/images/astro-1-gc-construction2-0_vercel.webp",
    url: "https://astro-1-gc-construction2-0.vercel.app/"
  },
  {
    id: "full-ready-2",
    title: "Full Ready 2.0",
    description: "Commercial landing page with modern UI",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FLEXBOX", "CSS GRID", "SEO"],
    imageUrl: "/images/fullreadyusa.com_home.webp",
    url: "https://jotajotam1.github.io/Full_Ready_2.0/"
  },
  {
    id: "menu-quecarajos",
    title: "Restaurant Menu",
    description: "QR-based restaurant menu for mobile devices",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FLEXBOX", "CSS GRID", "SEO"],
    imageUrl: "/images/menu-quecarajos.vercel_home.webp",
    url: "https://menu-quecarajos.vercel.app/"
  },
  {
    id: "coding-bootcamp-testimonials",
    title: "Testimonials Slider",
    description: "Interactive testimonials slider",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FLEXBOX"],
    imageUrl: "/images/coding-bootcamp-testimonials-slider-master_.webp",
    url: "https://jotajotam1.github.io/coding-bootcamp-testimonials-slider-master/"
  },
  {
    id: "testimonials-grid",
    title: "Testimonials Grid",
    description: "Grid-based testimonial layout",
    tags: ["HTML", "CSS", "RESPONSIVE", "CSS GRID", "FLEXBOX"],
    imageUrl: "/images/Testimonials_grid_section_.webp",
    url: "https://jotajotam1.github.io/Testimonials_grid_section/"
  },
  {
    id: "newsletter-signup",
    title: "Newsletter Sign Up",
    description: "Newsletter form with success state",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FORM VALIDATION"],
    imageUrl: "/images/Newsletter-sign-up-with-success_.webp",
    url: "https://jotajotam1.github.io/Newsletter-sign-up-with-success/"
  },
  {
    id: "faq-accordion",
    title: "FAQ Accordion",
    description: "Accessible FAQ accordion component",
    tags: ["HTML", "CSS", "JAVASCRIPT", "ACCESSIBILITY", "FLEXBOX"],
    imageUrl: "/images/FAQ_accordion_.webp",
    url: "https://jotajotam1.github.io/FAQ_accordion/"
  },
  {
    id: "quoter",
    title: "Quoter",
    description: "Random quotes app",
    tags: ["HTML", "CSS", "JAVASCRIPT", "FORM HANDLING", "DARK MODE"],
    imageUrl: "/images/Quoter_.webp",
    url: "https://jotajotam1.github.io/Quoter/"
  },
  {
    id: "social-links-profile",
    title: "Social Links Profile",
    description: "Compact social profile card",
    tags: ["HTML", "CSS", "RESPONSIVE", "FLEXBOX", "HOVER STATES"],
    imageUrl: "/images/social_links_profile_.webp",
    url: "https://jotajotam1.github.io/social_links_profile/"
  },
  {
    id: "blog-preview-card",
    title: "Blog Preview Card",
    description: "Blog preview UI card",
    tags: ["HTML", "CSS", "RESPONSIVE", "FLEXBOX", "HOVER STATES"],
    imageUrl: "/images/blog-preview-card-main_.webp",
    url: "https://jotajotam1.github.io/blog-preview-card-main/"
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
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} project`}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="aspect-video bg-slate-200 dark:bg-slate-900 overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{project.description}</p>
                  </div>
                  <span className="p-2 rounded-full border border-slate-300 dark:border-slate-600 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors">
                    <span className="material-icons-outlined text-sm">arrow_outward</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider">{tag}</span>
                  ))}
                </div>
                <span className="text-xs font-bold text-primary group-hover:text-primary-hover uppercase tracking-widest transition-all">
                  View Project
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
