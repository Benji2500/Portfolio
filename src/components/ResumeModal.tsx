import React from 'react';
import { X, Download, Printer, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, experiences, architectureSkills } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-[#0e121c] text-slate-100 shadow-2xl my-8 print:border-none print:bg-white print:text-black print:m-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 border-b border-slate-800 bg-[#090c13] flex items-center justify-between print:hidden">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Curriculum Vitae · Benjamin Boma
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[calc(85vh-8rem)] overflow-y-auto print:max-h-none print:p-0">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
              {profile.name}
            </h1>
            <div className="text-base font-semibold text-cyan-400 print:text-blue-600 mt-1">
              {profile.role}
            </div>

            {/* Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 print:text-slate-600 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400 print:text-black" />
                <span>{profile.location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-cyan-400 print:text-black" />
                <span>{profile.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-cyan-400 print:text-black" />
                <span>github.com/benjaminboma</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 mt-4 leading-relaxed">
              Senior Software Engineer & Systems Architect with 8+ years designing high-throughput distributed microservices, low-latency cloud infrastructure, and modern reactive full-stack web applications. Proven track record leading multi-disciplinary engineering squads and managing high-availability clusters operating at 99.99% uptime SLA.
            </p>
          </div>

          {/* Technical Core Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-600 mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 print:text-slate-800">
              {architectureSkills.map((domain, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-slate-800/80 bg-[#090c13] print:bg-slate-50 print:border-slate-200">
                  <div className="font-semibold text-white print:text-black mb-1">{domain.domain}</div>
                  <div className="text-slate-400 print:text-slate-600 font-mono text-[11px]">
                    {domain.skills.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-600 mb-4">
              Professional Work History
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="text-sm font-bold text-white print:text-black">{exp.role}</span>
                      <span className="text-xs text-cyan-400 print:text-blue-600 ml-2 font-medium">
                        @ {exp.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-500">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                    {exp.summary}
                  </p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 print:text-slate-700">
                        <span className="text-cyan-400 print:text-black shrink-0">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="pt-4 border-t border-slate-800 print:border-slate-300">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-600 mb-2">
              Education & Certifications
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-slate-300 print:text-slate-800">
              <div>
                <strong className="text-white print:text-black">B.S. in Computer Science & Systems Engineering</strong>
                <div className="text-slate-400 print:text-slate-600">Focus on Distributed Systems & Algorithms</div>
              </div>
              <span className="font-mono text-slate-400 print:text-slate-500 mt-1 sm:mt-0">Graduated with Honors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
