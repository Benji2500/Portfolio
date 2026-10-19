import React, { useState } from 'react';
import { Sliders, Cpu, Server, Network, Database, ShieldCheck, Zap, RefreshCw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ArchitectureMatrix: React.FC = () => {
  const { architectureSkills } = PORTFOLIO_DATA;
  const [trafficRate, setTrafficRate] = useState<number>(25000);
  const [cacheMode, setCacheMode] = useState<'hot' | 'warm'>('hot');
  const [failoverSimulated, setFailoverSimulated] = useState<boolean>(false);

  // Dynamic calculations based on ingress load
  const workerPods = Math.max(4, Math.ceil(trafficRate / 4000));
  const baseLatency = cacheMode === 'hot' ? 14 : 32;
  const loadFactor = trafficRate / 100000;
  const p99Latency = Math.round(baseLatency + loadFactor * 18 + (failoverSimulated ? 12 : 0));
  const cacheHitRatio = cacheMode === 'hot' ? (98.6 - loadFactor * 2.1).toFixed(1) : (91.2 - loadFactor * 3.4).toFixed(1);
  const cpuUtilization = Math.min(88, Math.round(35 + loadFactor * 38)).toFixed(0);

  return (
    <section id="architecture" className="py-20 border-b border-slate-800/80 bg-[#07090e]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <span>02. Technical Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Competencies & Simulation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            System Design & Core Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            A comprehensive look at Benjamin's technical breadth across distributed systems, modern cloud infrastructure, database sharding, and real-time state orchestration.
          </p>
        </div>

        {/* 4 Architectural Competency Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {architectureSkills.map((domain, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-800 bg-[#0c1018] hover:border-slate-700/80 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white">{domain.domain}</h3>
                <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
              </div>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                {domain.lead}
              </p>

              {/* Unboxed skill list with typographic dots */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                {domain.skills.map((skill, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <span className="text-slate-200 hover:text-cyan-400 transition-colors">
                      {skill}
                    </span>
                    {sIdx < domain.skills.length - 1 && (
                      <span className="text-slate-600" aria-hidden="true">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Production Latency & Ingress Simulator */}
        <div className="rounded-2xl border border-slate-800 bg-[#0b0e16] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                <Sliders className="w-4 h-4" />
                <span>Interactive Live Architecture Simulator</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Distributed Ingress & Autoscaling Stress Model
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Adjust simulated ingress volume to observe dynamic cluster auto-scaling, p99 latency curve, and tier-1 cache performance.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFailoverSimulated(!failoverSimulated)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  failoverSimulated
                    ? 'bg-amber-500/10 border-amber-500/50 text-amber-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                {failoverSimulated ? 'Multi-Region Failover Active' : 'Simulate Region Failover'}
              </button>
              <button
                onClick={() => setCacheMode(cacheMode === 'hot' ? 'warm' : 'hot')}
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cache: <span className="text-cyan-400 uppercase font-mono">{cacheMode}</span>
              </button>
            </div>
          </div>

          {/* Controls & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls: Traffic Slider */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-300">Simulated Request Load</span>
                  <span className="text-cyan-400 font-mono text-base font-bold tabular-nums">
                    {trafficRate.toLocaleString()} req/sec
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="120000"
                  step="2000"
                  value={trafficRate}
                  onChange={(e) => setTrafficRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-xs text-slate-400 font-mono mt-1">
                  <span>2k/s (Quiet)</span>
                  <span>50k/s (Peak)</span>
                  <span>120k/s (Surge)</span>
                </div>
              </div>

              {/* Architecture Topology visual overview */}
              <div className="p-4 rounded-xl border border-slate-800/80 bg-[#080b11] space-y-2 text-xs text-slate-300">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Pipeline Routing Topology</span>
                </div>
                <div className="font-mono text-slate-400 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>1. Ingress Layer:</span>
                    <span className="text-slate-200">Envoy Anycast Edge</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>2. Message Mesh:</span>
                    <span className="text-slate-200">Kafka Partitioned Log</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>3. Compute Fleet:</span>
                    <span className="text-cyan-400 font-bold">{workerPods} Go Pods (EKS)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>4. Storage Tier:</span>
                    <span className="text-slate-200">Redis Cache + Sharded Postgres</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Display: Live Output Metrics */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-[#080b11]">
                <div className="text-xs text-slate-400 font-medium mb-1">p99 Latency</div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                  {p99Latency} <span className="text-xs text-slate-400 font-normal">ms</span>
                </div>
                <div className="text-xs text-emerald-400 mt-1">Within SLA Target</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#080b11]">
                <div className="text-xs text-slate-400 font-medium mb-1">Active Pods</div>
                <div className="text-2xl font-extrabold text-cyan-400 font-mono tabular-nums">
                  {workerPods}
                </div>
                <div className="text-xs text-slate-400 mt-1">HPA Autoscaled</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#080b11]">
                <div className="text-xs text-slate-400 font-medium mb-1">Cache Hit Rate</div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                  {cacheHitRatio}%
                </div>
                <div className="text-xs text-slate-400 mt-1">Tier-1 Redis</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#080b11]">
                <div className="text-xs text-slate-400 font-medium mb-1">Avg Fleet CPU</div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                  {cpuUtilization}%
                </div>
                <div className="text-xs text-slate-400 mt-1">Target &le; 75%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
