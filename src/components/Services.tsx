import React from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: "code",
    titleKey: "services.items.uiTitle",
    descKey: "services.items.uiDesc",
  },
  {
    icon: "layers",
    titleKey: "services.items.dsTitle",
    descKey: "services.items.dsDesc",
  },
  {
    icon: "speed",
    titleKey: "services.items.perfTitle",
    descKey: "services.items.perfDesc",
  },
  {
    icon: "search",
    titleKey: "services.items.seoTitle",
    descKey: "services.items.seoDesc",
  },
  {
    icon: "accessibility_new",
    titleKey: "services.items.a11yTitle",
    descKey: "services.items.a11yDesc",
  },
  {
    icon: "groups",
    titleKey: "services.items.collabTitle",
    descKey: "services.items.collabDesc",
  },
];

export const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t("services.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 uppercase tracking-widest text-xs font-bold">
            {t("services.subtitle")}
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
                {t(s.titleKey)}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t(s.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
