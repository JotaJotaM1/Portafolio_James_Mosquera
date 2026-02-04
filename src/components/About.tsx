import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";

export const About: React.FC<{ id?: string }> = ({ id }) => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language?.startsWith("es");
  const cvHref = isSpanish ? "/james-mosquera-cv-es.pdf" : "/james-mosquera-cv-en.pdf";
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ experience: 0, projects: 0, clients: 0 });

  const stats = useMemo(
    () => [
      { key: 'experience', label: t('about.stats.experience'), value: 3, suffix: 'Years', accent: true },
      { key: 'projects', label: t('about.stats.projects'), value: 50, suffix: 'Plus', accent: false },
      { key: 'clients', label: t('about.stats.clients'), value: 35, suffix: 'Plus', accent: true }
    ],
    [t]
  );

  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts({ experience: 3, projects: 50, clients: 35 });
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        const start = performance.now();
        const duration = 1200;
        const targets = { experience: 3, projects: 50, clients: 35 };

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCounts({
            experience: Math.floor(targets.experience * progress),
            projects: Math.floor(targets.projects * progress),
            clients: Math.floor(targets.clients * progress)
          });
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        setHasAnimated(true);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);
  return (
    <section id={id} className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">{t('about.title')}</h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/JotaJotaM1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 border border-slate-900 dark:border-white text-sm font-bold rounded-lg text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
              >
                <img
                  src="/images/github-svgrepo-com.svg"
                  alt="GitHub"
                  className="mr-2 h-6 w-6"
                  loading="lazy"
                  decoding="async"
                />
                {t('about.github').toUpperCase()}
              </a>
              <a
                href="https://www.linkedin.com/in/john-james-mosquera-rozo-4b22bb229/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 border border-slate-900 dark:border-white text-sm font-bold rounded-lg text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
              >
                <img
                  src="/images/linkedin-svgrepo-com.svg"
                  alt="LinkedIn"
                  className="mr-2 h-6 w-6"
                  loading="lazy"
                  decoding="async"
                />
                {t('about.linkedin').toUpperCase()}
              </a>
              <a
                href={cvHref}
                download
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all"
              >
                <span className="material-icons-outlined mr-2 text-sm">download</span> {t('about.downloadCv').toUpperCase()}
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900 dark:bg-slate-800/80 text-white rounded-3xl p-10 md:p-14 shadow-2xl border border-slate-800/50">
              <div className="space-y-12">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">{t('about.locationLabel')}</div>
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-primary text-2xl">location_on</span>
                    <div className="text-2xl md:text-3xl font-bold">{t('about.locationValue')}</div>
                  </div>
                </div>
                <div className="grid gap-8 sm:grid-cols-3" ref={statsRef}>
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">{stat.label}</div>
                      <div className={`inline-flex items-baseline gap-2 text-4xl md:text-5xl font-display font-bold ${stat.accent ? "text-primary" : ""}`}>
                        {stat.suffix === 'Plus' ? (
                          <span>{counts[stat.key as keyof typeof counts]}+</span>
                        ) : (
                          <span>{counts[stat.key as keyof typeof counts]}</span>
                        )}
                        {stat.suffix === 'Years' && (
                          <span className="text-lg text-slate-500 font-sans">{t('about.stats.years')}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
