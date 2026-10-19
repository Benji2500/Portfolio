import React, { useState } from 'react';
import { Menu, X, Github, ArrowUpRight, GitBranch } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenGitHubHub: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenGitHubHub }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090b10]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark (Single text element in display face, single line) */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
        >
          Benjamin Boma
        </a>

        {/* Zone 2: Navigation Links (4-5 single-line clean text links) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#projects"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-cyan-400"
          >
            Work
          </a>
          <a
            href="#architecture"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-cyan-400"
          >
            Architecture
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-cyan-400"
          >
            Experience
          </a>
          <a
            href="#writings"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-cyan-400"
          >
            Writings
          </a>
          <button
            onClick={onOpenGitHubHub}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>GitHub Push Hub</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-all hover:bg-cyan-400 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer shadow-sm shadow-cyan-500/20"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenGitHubHub}
            className="p-2 text-cyan-400 hover:text-white transition-colors"
            title="GitHub Setup"
          >
            <GitBranch className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c0f17] px-6 py-5">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-200">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              Work & Projects
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              Architecture & Stack
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              Experience
            </a>
            <a
              href="#writings"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              Writings
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubHub();
              }}
              className="flex items-center gap-2 py-1 text-left text-cyan-400 font-semibold"
            >
              <GitBranch className="w-4 h-4" />
              <span>GitHub Push Hub</span>
            </button>
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full rounded-lg bg-cyan-500 py-2.5 text-center text-sm font-semibold text-slate-950"
              >
                Get in Touch
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
