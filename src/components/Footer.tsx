import type { FC } from 'react';
import { ArrowUp, Github, Mail, GitBranch } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenGitHubHub: () => void;
  onOpenContact: () => void;
}

export const Footer: FC<FooterProps> = ({ onOpenGitHubHub, onOpenContact }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#07090e] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="text-lg font-bold text-white tracking-tight">
              {profile.name}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {profile.role} · {profile.location}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Work
            </a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">
              Architecture
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#writings" className="hover:text-cyan-400 transition-colors">
              Writings
            </a>
            <button
              onClick={onOpenGitHubHub}
              className="hover:text-cyan-400 transition-colors cursor-pointer text-left flex items-center gap-1 text-cyan-400"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>GitHub Hub</span>
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Benjamin Boma. Crafted with precision.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
