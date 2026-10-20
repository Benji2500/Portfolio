import { ExternalLink, Github, CheckCircle2, Layers, TrendingUp } from 'lucide-react';
import { Project } from '../data/portfolioData';
import type { FC } from 'react';
import { ModalOverlay, ModalCloseButton } from './ui/ModalOverlay';
import { DotSeparatedList } from './ui/DotSeparatedList';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => (
  <ModalOverlay isOpen={project !== null} onClose={onClose}>
    {project && (
      <>
        {/* Modal Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e121c] via-[#0e121c]/40 to-transparent" />

          <ModalCloseButton
            onClose={onClose}
            className="absolute top-4 right-4 rounded-full bg-slate-900/80 p-2.5 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60 transition-colors cursor-pointer"
          />

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Case Study</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[calc(85vh-20rem)] overflow-y-auto">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl border border-slate-800 bg-[#0a0d14]">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-lg sm:text-xl font-extrabold text-cyan-400 font-mono tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Architecture & Summary */}
          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Architectural Overview</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0a0d14]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                Challenge & Constraints
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0a0d14]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Engineered Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Quantifiable Impact */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Measurable Production Impact</span>
            </h3>
            <ul className="space-y-2.5">
              {project.impact.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack - Unboxed Text */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Frameworks
            </h3>
            <DotSeparatedList
              items={project.techStack}
              itemClassName="text-cyan-300"
              className="text-xs text-slate-300 font-mono"
            />
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-slate-800/80 bg-[#0c1018] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </>
    )}
  </ModalOverlay>
);
