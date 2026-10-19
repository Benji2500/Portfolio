import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, TrendingUp } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-[#0e121c] text-slate-100 shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e121c] via-[#0e121c]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-slate-900/80 p-2.5 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

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
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg sm:text-xl font-extrabold text-cyan-400 font-mono tabular-nums">
                  {m.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Architecture & Summary */}
          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Architectural Overview</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0a0d14]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                Challenge & Constraints
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0a0d14]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Engineered Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Quantifiable Impact */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Measurable Production Impact</span>
            </h3>
            <ul className="space-y-2.5">
              {project.impact.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
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
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-cyan-300">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span className="text-slate-600" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
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
      </div>
    </div>
  );
};
