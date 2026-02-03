import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

export const Contact: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: '' }));
    setStatusMessage(null);
  };

  const validate = () => {
    const next: { [k: string]: string } = {};
    if (!form.name.trim()) next.name = t('contact.validation.required');
    if (!form.email.trim()) next.email = t('contact.validation.required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('contact.validation.email');
    if (!form.subject.trim()) next.subject = t('contact.validation.required');
    if (!form.message.trim()) next.message = t('contact.validation.required');
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setStatusMessage(t('contact.status'));
      // Aquí puedes enviar `form` a tu API/servicio.
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id={id} className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase mb-4 tracking-tight">{t('contact.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 md:p-10 shadow-xl">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl"></div>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">
                {t('contact.ctaTitle')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl">
                {t('contact.ctaBody')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-widest text-slate-500">{t('contact.form.name')} <span className="text-primary">*</span></label>
                <input 
                  id="contact-name"
                  name="name"
                  type="text" 
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'error-contact-name' : undefined}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {errors.name && <p id="error-contact-name" className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-widest text-slate-500">{t('contact.form.email')} <span className="text-primary">*</span></label>
                <input 
                  id="contact-email"
                  name="email"
                  type="email" 
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'error-contact-email' : undefined}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {errors.email && <p id="error-contact-email" className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-widest text-slate-500">{t('contact.form.subject')} <span className="text-primary">*</span></label>
              <input 
                id="contact-subject"
                name="subject"
                type="text" 
                placeholder={t('contact.form.subjectPlaceholder')}
                required
                value={form.subject}
                onChange={handleChange}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'error-contact-subject' : undefined}
                className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              {errors.subject && <p id="error-contact-subject" className="text-sm text-red-500 mt-1">{errors.subject}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-widest text-slate-500">{t('contact.form.message')} <span className="text-primary">*</span></label>
              <textarea 
                id="contact-message"
                name="message"
                rows={5}
                placeholder={t('contact.form.messagePlaceholder')}
                required
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'error-contact-message' : undefined}
                className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              ></textarea>
              {errors.message && <p id="error-contact-message" className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full py-5 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 active:scale-95">
              {t('contact.form.submit')}
            </button>

            {statusMessage && (
              <div className="mt-4 rounded-md bg-green-50 border border-green-200 p-4 text-sm text-green-800 text-center">{statusMessage}</div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};
