"use client";

import React from "react";
import { Clock, Film, Zap, Server, Activity } from "lucide-react";

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: "180 Min",
      label: "Continuous Autonomous Generation",
      description: "Full 3-hour theatrical-length motion comic movie generated without narrative drift or context degradation.",
      icon: Film,
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/40",
      badge: "Full Feature Length",
    },
    {
      value: "2,160 Panels",
      label: "Identity-Locked 2.5D Keyframes",
      description: "PuLID spatial attention decoupling ensures zero facial identity drift across every sequential visual panel.",
      icon: Zap,
      accent: "text-sky-300",
      border: "hover:border-sky-500/40",
      badge: "FLUX.1 + PuLID",
    },
    {
      value: "< 20 ms",
      label: "Phoneme-to-Cut Audio Sync",
      description: "Silero-VAD and Wav2Vec 2.0 forced alignment achieving frame-accurate speech timing and dialogue cuts.",
      icon: Clock,
      accent: "text-purple-400",
      border: "hover:border-purple-500/40",
      badge: "WhisperX Engine",
    },
    {
      value: "~5.5 Hours",
      label: "Distributed Wall-Clock Render",
      description: "Total wall-clock render time for a full 3-hour 4K movie on an 8-node NVIDIA RTX 4090 / A100 cluster.",
      icon: Server,
      accent: "text-[#76B900]",
      border: "hover:border-[#76B900]/50",
      badge: "NVIDIA CUDA Cluster",
    },
  ];

  return (
    <section className="relative border-y border-zinc-800/80 bg-[#0B0D12] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur transition-all duration-300 ${stat.border} hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-black/60`}
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[10px] font-mono uppercase text-zinc-400">
                    {stat.badge}
                  </span>
                  <div className={`p-2 rounded-lg bg-zinc-950/80 ${stat.accent}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Stat Big Number */}
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                  <span className={stat.accent}>{stat.value}</span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-2 text-sm font-semibold tracking-wide text-zinc-200">
                  {stat.label}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {stat.description}
                </p>

                {/* Subtle bottom decorative line */}
                <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-cyan-500/40 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Live Cluster Activity Ticker */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between rounded-lg border border-zinc-800/80 bg-zinc-950/90 px-4 py-2.5 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Activity className="h-4 w-4 text-[#76B900] animate-pulse" />
            <span className="text-zinc-200 font-semibold">LIVE GPU ORCHESTRATION TELEMETRY:</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-emerald-400">
              ● WORKER_NODE_07: FLUX.1 Denoising (Step 24/28)
            </span>
            <span className="text-zinc-600 hidden md:inline">|</span>
            <span className="text-cyan-400 hidden md:inline">
              ● WORKER_NODE_03: SAM 2 Metric Segmentation (98.6% Conf)
            </span>
            <span className="text-zinc-600 hidden lg:inline">|</span>
            <span className="text-purple-400 hidden lg:inline">
              ● AUDIO_DAW: EBU R128 Loudness Master (-23 LUFS Target)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
