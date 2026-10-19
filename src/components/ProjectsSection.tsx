import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Activity, Radio, Cpu, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { projects } = PORTFOLIO_DATA;

  const categories = ['All', 'Distributed Systems', 'Cloud & Infra', 'Full-Stack Web'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <span>01. Production Works</span>
              <span aria-hidden="true">·</span>
              <span>Selected Architectures</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Production distributed event buses, kernel-level telemetry collectors, global Anycast edge networks, and real-time state sync applications.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#10141f] rounded-xl border border-slate-800 shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid of Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            // First card or third card takes 7 columns for Bento rhythm, others take 5
            const isWide = idx % 3 === 0;
            const colSpan = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-[#0d111a] hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/10 cursor-pointer ${colSpan}`}
              >
                {/* Media Container */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback container in case of error
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d111a] via-[#0d111a]/40 to-transparent" />

                  {/* Overlaid Category & Arrow Indicator */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300 drop-shadow-md">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Key highlight metrics over bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3 text-xs text-white font-mono">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800/80">
                        <span className="text-cyan-400 font-bold">{m.value}</span>
                        <span className="text-slate-400 ml-1.5">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-slate-400 font-medium mt-1 mb-3">
                      {project.subtitle}
                    </div>
                    <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Unboxed Tech Stack and Links (Zero-pill discipline) */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span>{tech}</span>
                          {tIdx < Math.min(project.techStack.length, 4) - 1 && (
                            <span className="text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 text-slate-400 hover:text-white transition-colors"
                        title="View GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                          title="View Live"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
