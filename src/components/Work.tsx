import React from 'react';
import { useTranslation } from "react-i18next";

interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  imageUrl: string;
  url: string;
}

const projects: Project[] = [
  {
    id: "astro-gc-construction",
    titleKey: "work.projects.gcConstructionTitle",
    descriptionKey: "work.projects.gcConstructionDesc",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FLEXBOX", "CSS GRID", "SEO"],
    imageUrl: "/images/astro-1-gc-construction2-0_vercel.webp",
    url: "https://astro-1-gc-construction2-0.vercel.app/"
  },
  {
    id: "full-ready-2",
    titleKey: "work.projects.fullReadyTitle",
    descriptionKey: "work.projects.fullReadyDesc",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FLEXBOX", "CSS GRID", "SEO"],
    imageUrl: "/images/fullreadyusa.com_home.webp",
    url: "https://jotajotam1.github.io/Full_Ready_2.0/"
  },
  {
    id: "menu-quecarajos",
    titleKey: "work.projects.restaurantMenuTitle",
    descriptionKey: "work.projects.restaurantMenuDesc",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FLEXBOX", "CSS GRID", "SEO"],
    imageUrl: "/images/menu-quecarajos.vercel_home.webp",
    url: "https://menu-quecarajos.vercel.app/"
  },
  {
    id: "coding-bootcamp-testimonials",
    titleKey: "work.projects.testimonialsSliderTitle",
    descriptionKey: "work.projects.testimonialsSliderDesc",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FLEXBOX"],
    imageUrl: "/images/coding-bootcamp-testimonials-slider-master_.webp",
    url: "https://jotajotam1.github.io/coding-bootcamp-testimonials-slider-master/"
  },
  {
    id: "testimonials-grid",
    titleKey: "work.projects.testimonialsGridTitle",
    descriptionKey: "work.projects.testimonialsGridDesc",
    tags: ["HTML", "CSS", "RESPONSIVE", "CSS GRID", "FLEXBOX"],
    imageUrl: "/images/Testimonials_grid_section_.webp",
    url: "https://jotajotam1.github.io/Testimonials_grid_section/"
  },
  {
    id: "newsletter-signup",
    titleKey: "work.projects.newsletterTitle",
    descriptionKey: "work.projects.newsletterDesc",
    tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE", "FORM VALIDATION"],
    imageUrl: "/images/Newsletter-sign-up-with-success_.webp",
    url: "https://jotajotam1.github.io/Newsletter-sign-up-with-success/"
  },
  {
    id: "faq-accordion",
    titleKey: "work.projects.faqTitle",
    descriptionKey: "work.projects.faqDesc",
    tags: ["HTML", "CSS", "JAVASCRIPT", "ACCESSIBILITY", "FLEXBOX"],
    imageUrl: "/images/FAQ_accordion_.webp",
    url: "https://jotajotam1.github.io/FAQ_accordion/"
  },
  {
    id: "quoter",
    titleKey: "work.projects.quoterTitle",
    descriptionKey: "work.projects.quoterDesc",
    tags: ["HTML", "CSS", "JAVASCRIPT", "FORM HANDLING", "DARK MODE"],
    imageUrl: "/images/Quoter_.webp",
    url: "https://jotajotam1.github.io/Quoter/"
  },
  {
    id: "social-links-profile",
    titleKey: "work.projects.socialLinksTitle",
    descriptionKey: "work.projects.socialLinksDesc",
    tags: ["HTML", "CSS", "RESPONSIVE", "FLEXBOX", "HOVER STATES"],
    imageUrl: "/images/social_links_profile_.webp",
    url: "https://jotajotam1.github.io/social_links_profile/"
  },
  {
    id: "blog-preview-card",
    titleKey: "work.projects.blogPreviewTitle",
    descriptionKey: "work.projects.blogPreviewDesc",
    tags: ["HTML", "CSS", "RESPONSIVE", "FLEXBOX", "HOVER STATES"],
    imageUrl: "/images/blog-preview-card-main_.webp",
    url: "https://jotajotam1.github.io/blog-preview-card-main/"
  }
];

export const Work: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">{t("work.title")}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t("work.subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={t("work.openProjectAria", { title: t(project.titleKey) })}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="aspect-video bg-slate-200 dark:bg-slate-900 overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={t(project.titleKey)}
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t(project.titleKey)}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{t(project.descriptionKey)}</p>
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
                  {t("work.viewProject")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
