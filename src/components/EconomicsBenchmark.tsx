"use client";

import React, { useState } from "react";
import {
  TrendingDown,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  Sparkles,
  Calculator,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export const EconomicsBenchmark: React.FC = () => {
  const [runtimeMinutes, setRuntimeMinutes] = useState(180);
  const [episodesCount, setEpisodesCount] = useState(1);

  // Economic calculations based on industry benchmarks
  // Traditional motion comic studio: ~$12,500 per produced minute
  const traditionalCost = runtimeMinutes * episodesCount * 12500;
  // Traditional production time: ~2.5 days per produced minute (in months)
  const traditionalMonths = Math.max(
    3,
    Math.round((runtimeMinutes * episodesCount * 2.3) / 30)
  );
  // CineAgent GPU compute cost: ~$0.85 per produced minute on distributed RTX 4090/A100 cluster
  const cineagentComputeCost = Math.round(runtimeMinutes * episodesCount * 0.85);
  // CineAgent wall clock time: ~1.85 minutes of compute per produced minute (in hours)
  const cineagentHours = (
    (runtimeMinutes * episodesCount * 1.83) /
    60
  ).toFixed(1);
  const totalSavings = traditionalCost - cineagentComputeCost;

  return (
    <section id="economics" className="relative py-20 lg:py-32 bg-[#0B0D12] border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-mono text-[#76B900]">
            <TrendingDown className="h-3.5 w-3.5" />
            <span>COMMERCIAL VIABILITY & UNIT ECONOMICS</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Disruptive Production Economics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Compare traditional animation studio budgets with CineAgent’s autonomous
            distributed GPU pipeline. Delivering feature-length theatrical releases
            at 99.9% lower capital expenditure.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Traditional Studio */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-8 backdrop-blur relative overflow-hidden">
            <div className="absolute top-0 right-0 rounded-bl-xl border-l border-b border-rose-500/30 bg-rose-950/30 px-3 py-1 font-mono text-[11px] text-rose-400">
              TRADITIONAL PIPELINE
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Legacy 2D Animation Studio
                </h3>
                <p className="text-xs text-zinc-500 font-mono">
                  Manual human keyframing & outsourcing
                </p>
              </div>
            </div>

            {/* Financial metric */}
            <div className="mt-6 border-y border-zinc-800/80 py-4">
              <div className="text-xs font-mono text-zinc-400 uppercase">
                Estimated 3-Hour Production Cost:
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-rose-400 mt-1">
                $1.8M – $3.5M+
              </div>
            </div>

            {/* Bullet points */}
            <ul className="mt-6 space-y-3.5 text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>12 to 18 Months</strong> wall-clock production schedule.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>40+ Illustrators & Animators</strong> required across layout, inking, coloring, and compositor teams.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Rigid Revision Cycles:</strong> Changing a plot beat or dialogue requires weeks of manual frame redrawing.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>High Financial Risk:</strong> Severe capital commitment before any audience validation.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: CineAgent Autonomous Release */}
          <div className="rounded-2xl border border-cyan-500/40 bg-zinc-900/90 p-8 backdrop-blur relative overflow-hidden shadow-2xl shadow-cyan-950/20">
            <div className="absolute top-0 right-0 rounded-bl-xl border-l border-b border-cyan-500/40 bg-cyan-950/60 px-3 py-1 font-mono text-[11px] text-cyan-300 font-bold">
              CINEAGENT AUTONOMOUS
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  CineAgent Neural Engine
                </h3>
                <p className="text-xs text-cyan-400/80 font-mono">
                  Distributed NVIDIA GPU multi-agent architecture
                </p>
              </div>
            </div>

            {/* Financial metric */}
            <div className="mt-6 border-y border-zinc-800/80 py-4">
              <div className="text-xs font-mono text-zinc-400 uppercase">
                Distributed GPU Compute Cost:
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#76B900] mt-1 flex items-baseline gap-2">
                <span>$120 – $195</span>
                <span className="text-xs text-zinc-400 font-sans font-normal">
                  (Total Cluster Billing)
                </span>
              </div>
            </div>

            {/* Bullet points */}
            <ul className="mt-6 space-y-3.5 text-sm text-zinc-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-[#76B900] shrink-0 mt-0.5" />
                <span>
                  <strong>~5.5 Hours Wall-Clock Time:</strong> From raw 20-line concept to final master delivery.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-[#76B900] shrink-0 mt-0.5" />
                <span>
                  <strong>1 Prompt Engineer / Showrunner:</strong> Autonomous multi-agent pipeline handles script, frames, sync, and compositing.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-[#76B900] shrink-0 mt-0.5" />
                <span>
                  <strong>Instant Regeneration:</strong> Re-shoot scenes or re-record dialogue with parametric prompt updates in minutes.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-[#76B900] shrink-0 mt-0.5" />
                <span>
                  <strong>Immediate IP Monetization:</strong> Prototype entire franchises at negligible marginal compute cost.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Studio ROI Calculator */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[#76B900]">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Interactive Studio Production ROI Calculator
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  Simulate your studio savings across custom runtimes and multi-episode slates.
                </p>
              </div>
            </div>
            <div className="font-mono text-xs text-emerald-400 border border-emerald-500/30 bg-emerald-950/20 px-3 py-1 rounded-md">
              NET CAPITAL SAVINGS: ~99.9%
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-300">Film / Episode Runtime:</span>
                  <span className="text-cyan-400 font-bold">{runtimeMinutes} Minutes</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="180"
                  step="15"
                  value={runtimeMinutes}
                  onChange={(e) => setRuntimeMinutes(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-600 mt-1">
                  <span>15m (Short)</span>
                  <span>90m (Standard)</span>
                  <span>180m (3-Hour Epic)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-300">Number of Releases / Episodes:</span>
                  <span className="text-[#76B900] font-bold">{episodesCount} Episode(s)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={episodesCount}
                  onChange={(e) => setEpisodesCount(Number(e.target.value))}
                  className="w-full accent-[#76B900] h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-600 mt-1">
                  <span>1 Feature</span>
                  <span>6 (Miniseries)</span>
                  <span>12 (Full Season)</span>
                </div>
              </div>
            </div>

            {/* Calculated Results Display */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 font-mono">
                <div className="text-[11px] text-zinc-500 uppercase">Legacy Studio Cost</div>
                <div className="text-xl sm:text-2xl font-bold text-rose-400 mt-1">
                  ${(traditionalCost / 1000000).toFixed(2)}M
                </div>
                <div className="text-[10px] text-zinc-500 mt-1">~{traditionalMonths} Months Wall-Clock</div>
              </div>

              <div className="rounded-xl border border-emerald-500/40 bg-zinc-950 p-4 font-mono">
                <div className="text-[11px] text-zinc-400 uppercase">CineAgent Compute</div>
                <div className="text-xl sm:text-2xl font-bold text-[#76B900] mt-1">
                  ${cineagentComputeCost.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-400 mt-1">~{cineagentHours} Hours Wall-Clock</div>
              </div>

              <div className="col-span-2 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 to-slate-900 p-4 font-mono flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">Total Capital Preserved:</div>
                  <div className="text-2xl font-bold text-white mt-0.5">
                    ${(totalSavings / 1000000).toFixed(2)} Million USD
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#76B900] font-bold">1800x FASTER</div>
                  <div className="text-[10px] text-zinc-500">Autonomous Speedup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
