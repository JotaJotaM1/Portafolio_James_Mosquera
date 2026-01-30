
import React from 'react';

export const Contact: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase mb-4 tracking-tight">Let's Work Together</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Have a project in mind or just want to say hi? Feel free to send me a message.
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              ></textarea>
            </div>
            <button className="w-full py-5 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 active:scale-95">
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center gap-3 text-2xl md:text-4xl font-bold text-primary hover:text-primary-hover transition-colors">
            <span className="material-icons-outlined">mail</span>
            <a href="mailto:hello@alexmora.dev">hello@alexmora.dev</a>
          </div>
          <div className="flex justify-center gap-8 pt-4">
            <a href="#" className="text-slate-400 hover:text-primary transition-all"><span className="material-icons-outlined text-3xl">alternate_email</span></a>
            <a href="#" className="text-slate-400 hover:text-primary transition-all"><span className="material-icons-outlined text-3xl">smart_display</span></a>
            <a href="#" className="text-slate-400 hover:text-primary transition-all"><span className="material-icons-outlined text-3xl">language</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};
