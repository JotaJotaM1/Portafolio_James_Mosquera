import React from "react";

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              Front-End Developer
            </div>
            <h2 className="font-display text-5xl lg:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                Experiences
              </span>{" "}
              with <br />
              Clean Code
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Specialized in building pixel-perfect, performant interfaces with
              modern frameworks and design systems. I turn complex problems into
              simple, beautiful, and intuitive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#work"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary-hover shadow-glow transition-all duration-200 transform hover:-translate-y-1"
              >
                VIEW WORK
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-xl text-slate-700 dark:text-slate-300 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              >
                CONTACT ME
              </a>
            </div>
          </div>

          <div className="relative lg:h-[600px] w-full flex items-center justify-center perspective-1000">
            <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-500 ease-out group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-2 w-20 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="w-1/3 h-32 bg-slate-100 dark:bg-slate-900/50 rounded-xl relative overflow-hidden flex items-center justify-center">
                  <span className="material-icons-outlined text-primary text-4xl">
                    pie_chart
                  </span>
                </div>
                <div className="w-2/3 h-32 bg-slate-900 rounded-xl relative overflow-hidden p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                      Project Status
                    </div>
                    <span className="material-icons-outlined text-white text-sm">
                      more_horiz
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">
                      98%
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full">
                      <div className="bg-primary h-1.5 rounded-full w-[98%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-16 bg-slate-50 dark:bg-slate-900/30 rounded-xl p-3 flex items-center gap-4 border border-slate-100 dark:border-slate-700"
                  >
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${i === 1 ? "bg-purple-100 text-primary" : "bg-blue-100 text-blue-500"}`}
                    >
                      <span className="material-icons-outlined">
                        {i === 1 ? "code" : "widgets"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-16"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <span className="material-icons-outlined text-3xl text-primary">
                  terminal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
