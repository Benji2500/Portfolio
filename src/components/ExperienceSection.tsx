import type { FC } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { DotSeparatedList } from './ui/DotSeparatedList';

export const ExperienceSection: FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <span>03. Track Record</span>
            <span aria-hidden="true">·</span>
            <span>Career Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Over 8 years scaling distributed systems, leading high-velocity engineering squads, and delivering mission-critical cloud infrastructure.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-800 bg-[#0c1018] p-6 sm:p-8 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    <span className="text-cyan-400 font-semibold">{exp.company}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{exp.location}</span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-mono text-cyan-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0 self-start">
                  {exp.period}
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {exp.summary}
              </p>

              {/* Quantifiable Highlights */}
              <div className="space-y-2.5 mb-6">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="uppercase text-[11px] mr-1">Stack:</span>
                <DotSeparatedList items={exp.technologies} itemClassName="text-slate-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
