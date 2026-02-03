import React from 'react';

export const About: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">About Me</h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                I'm a Front-End Developer based in Barcelona, specializing in building exceptional digital experiences with modern web technologies.
              </p>
              <p>
                With 6+ years of experience, I've worked with startups and enterprises to deliver high-performance web applications that users love. My focus is on clean code, accessibility, and seamless UI/UX collaboration.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or mentoring junior developers.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/JotaJotaM1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 border border-slate-900 dark:border-white text-sm font-bold rounded-lg text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
              >
                <span className="material-icons-outlined mr-2 text-sm">code</span> GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/john-james-mosquera-rozo-4b22bb229/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 border border-slate-900 dark:border-white text-sm font-bold rounded-lg text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
              >
                <span className="material-icons-outlined mr-2 text-sm">work</span> LINKEDIN
              </a>
              <a
                href="/james-mosquera-cv.pdf"
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all"
              >
                <span className="material-icons-outlined mr-2 text-sm">download</span> DOWNLOAD CV
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900 dark:bg-slate-800/80 text-white rounded-3xl p-10 md:p-14 shadow-2xl border border-slate-800/50">
              <div className="space-y-12">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">Location</div>
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-primary text-2xl">location_on</span>
                    <div className="text-2xl md:text-3xl font-bold">Barcelona, Spain</div>
                  </div>
                </div>
                <div className="grid gap-8 sm:grid-cols-3">
                  {[
                    { label: "Experience", value: "3+", accent: true, suffix: "Years" },
                    { label: "Projects", value: "50+" },
                    { label: "Happy Clients", value: "35+", accent: true }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">{stat.label}</div>
                      <div className={`inline-flex items-baseline gap-2 text-4xl md:text-5xl font-display font-bold ${stat.accent ? "text-primary" : ""}`}>
                        <span>{stat.value}</span>
                        {stat.suffix && (
                          <span className="text-lg text-slate-500 font-sans">{stat.suffix}</span>
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
