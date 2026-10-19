import React from 'react';
import { ArrowDown, Github, ArrowUpRight, Terminal, FileText, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenGitHubHub: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenGitHubHub, onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Split-Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Clean unboxed kicker (no pill capsules!) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">
              <span>Software Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Distributed Systems</span>
              <span aria-hidden="true">·</span>
              <span>Cloud Platforms</span>
            </div>

            {/* Hero Headline with text-wrap: balance */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Building resilient distributed systems and intuitive digital products.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Hi, I'm <strong className="font-semibold text-white">Benjamin Boma</strong>. A Senior Software Engineer & Solutions Architect focused on low-latency cloud infrastructure, fault-tolerant message streaming pipelines, and high-performance full-stack web applications.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400 active:scale-[0.98] cursor-pointer shadow-sm shadow-cyan-500/20"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenGitHubHub}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-slate-500 hover:text-white active:scale-[0.98] cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Push to GitHub</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-transparent px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-slate-500 hover:text-white active:scale-[0.98] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>View CV</span>
              </button>
            </div>

            {/* Unboxed Metadata & Availability */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-slate-300 font-medium">{profile.location}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium">{profile.availability}</span>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Container (Portrait Showcase) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle ambient backplate */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-xl opacity-60" />

              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0d111a] shadow-2xl">
                <img
                  src={profile.portrait}
                  alt="Benjamin Boma - Software Engineer"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-square object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                />

                {/* Overlaid caption info */}
                <div className="p-5 border-t border-slate-800/80 bg-[#0c1018]/90 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">Benjamin Boma</span>
                    <span className="text-xs text-slate-400 font-mono">STAFF / SENIOR</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Distributed Systems & Cloud Architecture · San Francisco, CA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric & Impact Strip below the hero split */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
