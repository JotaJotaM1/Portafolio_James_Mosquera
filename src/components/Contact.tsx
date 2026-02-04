import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Contact: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  const isDemo = true;
  const [emailCopied, setEmailCopied] = useState(false);
  const emailUser = "johnjamesmosquera3";
  const emailDomain = "gmail";
  const emailTld = "com";
  const emailAddress = `${emailUser}@${emailDomain}.${emailTld}`;
  const emptyForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  };
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [statusKey, setStatusKey] = useState<
    "status" | "statusDemo" | "statusError" | null
  >(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: "" }));
    setStatusKey(null);
    setStatusType(null);
  };

  const validate = () => {
    const next: { [k: string]: string } = {};
    if (!form.name.trim()) next.name = t("contact.validation.required");
    if (!form.email.trim()) next.email = t("contact.validation.required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = t("contact.validation.email");
    if (!form.subject.trim()) next.subject = t("contact.validation.required");
    if (!form.message.trim()) next.message = t("contact.validation.required");
    return next;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) return;
    setErrors(validate());
  }, [t]);

  const resetForm = () => setForm(emptyForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      if (isDemo) {
        setStatusKey("statusDemo");
        setStatusType("success");
        resetForm();
        return;
      }
      setIsSubmitting(true);
      setStatusKey(null);
      setStatusType(null);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setStatusKey("status");
        setStatusType("success");
        resetForm();
      } catch (error) {
        setStatusKey("statusError");
        setStatusType("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleCopyEmail = async () => {
    const email = emailAddress;
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };


  return (
    <section id={id} className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase mb-4 tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 md:p-10 shadow-xl">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl"></div>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">
                {t("contact.ctaTitle")}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl">
                {t("contact.ctaBody")}
              </p>
              <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/50 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <img
                  src="/images/gmail-old-svgrepo-com.svg"
                  alt="Gmail"
                  className="h-5 w-5"
                  loading="lazy"
                  decoding="async"
                />
                <span>{emailAddress}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-auto inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-1.5 text-xs font-bold tracking-wide text-slate-700 dark:text-slate-200 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <span className="material-icons-outlined text-sm">content_copy</span>
                  {emailCopied
                    ? t("contact.copyEmailCopied")
                    : t("contact.copyEmail")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div className="rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-primary">
              {t("contact.formDemoNote")}
            </div>
            <div
              className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold uppercase tracking-widest text-slate-500"
                >
                  {t("contact.form.name")}{" "}
                  <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder={t("contact.form.namePlaceholder")}
                  required
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={
                    errors.name ? "error-contact-name" : undefined
                  }
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {errors.name && (
                  <p
                    id="error-contact-name"
                    className="text-sm text-red-500 mt-1"
                  >
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-bold uppercase tracking-widest text-slate-500"
                >
                  {t("contact.form.email")}{" "}
                  <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? "error-contact-email" : undefined
                  }
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {errors.email && (
                  <p
                    id="error-contact-email"
                    className="text-sm text-red-500 mt-1"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-subject"
                className="block text-xs font-bold uppercase tracking-widest text-slate-500"
              >
                {t("contact.form.subject")}{" "}
                <span className="text-primary">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder={t("contact.form.subjectPlaceholder")}
                required
                value={form.subject}
                onChange={handleChange}
                aria-invalid={!!errors.subject}
                aria-describedby={
                  errors.subject ? "error-contact-subject" : undefined
                }
                className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              {errors.subject && (
                <p
                  id="error-contact-subject"
                  className="text-sm text-red-500 mt-1"
                >
                  {errors.subject}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="block text-xs font-bold uppercase tracking-widest text-slate-500"
              >
                {t("contact.form.message")}{" "}
                <span className="text-primary">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder={t("contact.form.messagePlaceholder")}
                required
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? "error-contact-message" : undefined
                }
                className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              ></textarea>
              {errors.message && (
                <p
                  id="error-contact-message"
                  className="text-sm text-red-500 mt-1"
                >
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 px-6 rounded-xl bg-primary hover:bg-primary-hover disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
            </button>

            {statusKey && (
              <div
                className={`mt-4 rounded-md border p-4 text-sm text-center ${statusType === "error" ? "bg-red-50 border-red-200 text-red-800" : "bg-green-50 border-green-200 text-green-800"}`}
              >
                {t(`contact.${statusKey}`)}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
