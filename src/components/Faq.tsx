import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type FaqItem = { q: string; a: string };

type FaqGroup = {
  title: string;
  items: FaqItem[];
};

export const Faq: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);

  const recruiterGroup = t("faq.recruiters", {
    returnObjects: true,
  }) as FaqGroup;
  const clientGroup = t("faq.clients", { returnObjects: true }) as FaqGroup;

  const allItems = useMemo(
    () => [...recruiterGroup.items, ...clientGroup.items],
    [recruiterGroup.items, clientGroup.items],
  );
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    }),
    [allItems],
  );

  const schemaJson = useMemo(() => JSON.stringify(schema), [schema]);

  const renderItem = (item: FaqItem, idx: number, groupId: string) => {
    const stableKey = `${groupId}-${item.q}`;
    const itemKey = `${stableKey}-${idx}`;
    const isOpen = openId === stableKey;
    return (
      <details
        key={itemKey}
        open={isOpen}
        onToggle={(event) => {
          const nextOpen = (event.currentTarget as HTMLDetailsElement).open;
          setOpenId((current) => {
            if (nextOpen) return stableKey;
            return current === stableKey ? null : current;
          });
        }}
        className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 transition-colors hover:border-primary/40"
      >
        <summary
          className="cursor-pointer list-none text-left text-base font-semibold text-slate-900 dark:text-white marker:hidden"
        >
          <span className="flex items-start justify-between gap-4">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="material-icons-outlined text-primary transition-transform duration-300 group-open:rotate-45"
            >
              add
            </span>
          </span>
        </summary>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 transition-all duration-300 ease-out opacity-0 translate-y-1 group-open:opacity-100 group-open:translate-y-0">
              {item.a}
            </p>
          </div>
        </div>
      </details>
    );
  };

  return (
    <section
      id={id}
      className="py-24 bg-background-light dark:bg-background-dark"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              {recruiterGroup.title}
            </h3>
            <div className="grid gap-4">
              {recruiterGroup.items.map((item, idx) =>
                renderItem(item, idx, "recruiters"),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              {clientGroup.title}
            </h3>
            <div className="grid gap-4">
              {clientGroup.items.map((item, idx) =>
                renderItem(item, idx, "clients"),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
