import { useEffect, useRef, useState } from 'react';
import { X }
// placeholder

interface GitHubPushHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPushHub = ({ isOpen, onClose }: GitHubPushHubProps) => { = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('benjaminboma');
  const [repoName, setRepoName] = useState('portfolio');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'https' | 'ssh' | 'cli'>('https');

  // Terminal simulator state
  const [simulating, setSimulating] = useState(false);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([]);
  const [simCompleted, setSimCompleted] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!isOpen) return null;

  const repoUrlHttps = `https://github.com/${username}/${repoName}.git`;
  const repoUrlSsh = `git@github.com:${username}/${repoName}.git`;
  const repoWebUrl = `https://github.com/${username}/${repoName}`;

  const getCommand = () => {
    if (activeTab === 'https') {
      return `git remote add origin ${repoUrlHttps}\ngit branch -M main\ngit push -u origin main`;
    }
    if (activeTab === 'ssh') {
      return `git remote add origin ${repoUrlSsh}\ngit branch -M main\ngit push -u origin main`;
    }
    return `gh repo create ${repoName} --public --source=. --remote=origin --push`;
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSimulatePush = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setSimulating(true);
    setSimCompleted(false);
    setSimulatedLogs([]);

    const steps = [
      `$ git remote add origin ${activeTab === 'ssh' ? repoUrlSsh : repoUrlHttps}`,
      `$ git branch -M main`,
      `$ git push -u origin main`,
      `Enumerating objects: 38, done.`,
      `Counting objects: 100% (38/38), done.`,
      `Compressing objects: 100% (32/32), done.`,
      `Writing objects: 100% (38/38), 342.18 KiB | 14.25 MiB/s, done.`,
      `Total 38 (delta 12), reused 0 (delta 0), pack-reused 0`,
      `remote: Resolving deltas: 100% (12/12), done.`,
      `To ${activeTab === 'ssh' ? repoUrlSsh : repoUrlHttps}`,
      ` * [new branch]      main -> main`,
      `Branch 'main' set up to track remote branch 'main' from 'origin'.`,
      `✔ SUCCESS: Successfully pushed to GitHub repository!`,
    ];

    let current = 0;
    intervalRef.current = setInterval(() => {
      if (current < steps.length) {
        const nextLog = steps[current];
        if (nextLog) {
          setSimulatedLogs((prev) => [...prev, nextLog]);
        }
        current++;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setSimulating(false);
        setSimCompleted(true);
      }
    }, 280);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-[#0c1018] text-slate-100 shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-[#0a0d14]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <GitBranch className="w-3.5 h-3.5" />
                <span>GitHub Deployment Center</span>
              </div>
              <h2 className="text-xl font-bold text-white">Push Portfolio to Your GitHub</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-12rem)] overflow-y-auto">
          {/* Status summary */}
          <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white font-semibold">Repository Initialized & Ready:</strong> All portfolio assets, responsive components, Tailwind styles, and GitHub Actions CI/CD workflows are committed and ready to sync with your GitHub profile.
            </div>
          </div>

          {/* Repo configuration inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl border border-slate-800 bg-[#090b10]">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                GitHub Username / Org
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.trim())}
                placeholder="benjaminboma"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white font-mono focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Target Repository Name
              </label>
              <input
                type="text"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value.trim())}
                placeholder="portfolio"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white font-mono focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Step 1: Create repo link */}
          <div className="p-4 rounded-xl border border-slate-800 bg-[#0a0d14] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 1</div>
              <div className="text-sm font-semibold text-white">Create the repository on GitHub</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Make sure you create an empty repository named <code className="text-cyan-300 font-mono">{repoName}</code> without initializing README or license.
              </div>
            </div>
            <a
              href="https://github.com/new"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-semibold text-white transition-colors shrink-0 self-start sm:self-auto"
            >
              <span>Open github.com/new</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Step 2: Push commands */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 2</div>
                <div className="text-sm font-semibold text-white">Run Push Commands in Your Terminal</div>
              </div>

              {/* Protocol selector tabs */}
              <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('https')}
                  className={`px-2.5 py-1 rounded transition-colors font-mono cursor-pointer ${
                    activeTab === 'https' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  HTTPS
                </button>
                <button
                  onClick={() => setActiveTab('ssh')}
                  className={`px-2.5 py-1 rounded transition-colors font-mono cursor-pointer ${
                    activeTab === 'ssh' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  SSH
                </button>
                <button
                  onClick={() => setActiveTab('cli')}
                  className={`px-2.5 py-1 rounded transition-colors font-mono cursor-pointer ${
                    activeTab === 'cli' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  GitHub CLI
                </button>
              </div>
            </div>

            {/* Terminal command display */}
            <div className="relative rounded-xl border border-slate-800 bg-[#06080d] p-4 font-mono text-xs text-slate-200">
              <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {getCommand()}
              </pre>

              <button
                onClick={() => copyToClipboard(getCommand(), 'command')}
                className="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-slate-800 hover:bg-slate-700 px-2.5 py-1.5 text-[11px] font-sans font-medium text-slate-200 transition-colors cursor-pointer"
              >
                {copiedId === 'command' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Commands</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Terminal Push Simulator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Interactive Git Push Terminal Simulator</span>
              </span>
              <button
                onClick={handleSimulatePush}
                disabled={simulating}
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 transition-colors disabled:opacity-50 cursor-pointer"
              >
                <Play className="w-3 h-3" />
                <span>{simulating ? 'Pushing...' : 'Test / Simulate Push'}</span>
              </button>
            </div>

            {simulatedLogs.length > 0 && (
              <div className="rounded-xl border border-slate-800 bg-[#05070a] p-3 font-mono text-xs text-slate-300 max-h-48 overflow-y-auto space-y-1">
                {simulatedLogs.map((log, idx) => {
                  if (!log) return null;
                  const isCmd = typeof log === 'string' && log.startsWith('$');
                  const isSuccess = typeof log === 'string' && (log.startsWith('✔') || log.includes('SUCCESS'));

                  return (
                    <div
                      key={idx}
                      className={
                        isCmd
                          ? 'text-cyan-400 font-bold'
                          : isSuccess
                          ? 'text-emerald-400 font-bold'
                          : 'text-slate-400'
                      }
                    >
                      {log}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* GitHub Pages & Actions Note */}
          <div className="p-4 rounded-xl border border-slate-800/80 bg-[#090c13] space-y-1.5">
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Automated GitHub Actions Deployment Included</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              This repository contains <code className="text-slate-200">.github/workflows/deploy.yml</code>. As soon as you push to GitHub, GitHub Actions will automatically test and publish your live portfolio to GitHub Pages (or Vercel / Cloudflare Pages) completely free.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-800 bg-[#0a0d14] flex items-center justify-between">
          <a
            href={repoWebUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>View {username}/{repoName} on GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onClose}
            className="rounded-lg bg-cyan-500 px-5 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
