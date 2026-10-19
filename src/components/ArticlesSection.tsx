import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, X } from 'lucide-react';
import { PORTFOLIO_DATA, Article } from '../data/portfolioData';

export const ArticlesSection: React.FC = () => {
  const { articles } = PORTFOLIO_DATA;
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="writings" className="py-20 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <span>04. Publications</span>
            <span aria-hidden="true">·</span>
            <span>Technical Deep-Dives</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Articles & Architectural Essays
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Reflections and engineering breakdowns on distributed state convergence, database sharding, and high-load production patterns.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0c1018] p-6 sm:p-7 hover:border-slate-700 transition-all duration-200 cursor-pointer"
            >
              <div>
                {/* Unboxed Metadata (Zero-pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <span className="text-cyan-400 font-medium">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.publishedDate}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-[#0e121c] text-slate-100 shadow-2xl p-6 sm:p-8 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 rounded-full bg-slate-900/80 p-2 text-slate-300 hover:text-white border border-slate-700/60 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="text-cyan-400 font-semibold">{selectedArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.publishedDate}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 pr-8">
              {selectedArticle.title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">By Benjamin Boma</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
