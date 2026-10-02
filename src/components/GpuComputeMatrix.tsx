"use client";

import React, { useState } from "react";
import {
  Cpu,
  Server,
  Zap,
  Gauge,
  Layers,
  CheckCircle,
  TrendingUp,
  Activity,
  HardDrive,
  Shield,
  Clock,
} from "lucide-react";

export const GpuComputeMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"matrix" | "cluster">("matrix");

  const computeWorkloads = [
    {
      stage: "Vision Diffusion",
      model: "FLUX.1 [dev] 12B Rectified Flow Transformer",
      hardware: "8x NVIDIA RTX 4090 (24GB) / A100 (80GB SXM4)",
      cudaOptimization:
        "Headless ComfyUI API workers, BF16 mixed-precision, FlashAttention-2, PyTorch compile",
      speedup: "4.8x vs Baseline FP32",
      badge: "Vision Core",
    },
    {
      stage: "Spatial Depth & Segmentation",
      model: "Depth Anything 3 + Segment Anything (SAM 2)",
      hardware: "NVIDIA Tensor Core GPUs (Half-Precision FP16)",
      cudaOptimization:
        "Custom CUDA metric depth kernels, Triton-optimized cross-attention, Zero-copy memory buffers",
      speedup: "6.2x Inference Boost",
      badge: "CV Metric",
    },
    {
      stage: "Acoustic Alignment & DAW",
      model: "WhisperX (Silero-VAD + Wav2Vec 2.0 CTC)",
      hardware: "NVIDIA L40S / RTX 4090 Distributed Nodes",
      cudaOptimization:
        "Parallelized CTC decoding across 16 CUDA streams, automated sidechain loudness normalization",
      speedup: "< 20ms frame accuracy",
      badge: "Acoustic",
    },
    {
      stage: "Inference Engine Optimization",
      model: "TensorRT-LLM + TensorRT Diffusion Engine",
      hardware: "NVIDIA Hopper / Ada Lovelace Architecture",
      cudaOptimization:
        "INT8 / FP8 post-training quantization, kernel auto-tuning, reduced VRAM footprint by 45%",
      speedup: "3.2x Generation Speedup",
      badge: "Roadmap Q3",
    },
  ];

  const clusterNodes = [
    {
      id: "NODE-A100-01",
      gpu: "NVIDIA A100-SXM4-80GB",
      task: "FLUX.1 Transformer Batch Worker",
      vram: "68.2 / 80.0 GB",
      vramPct: 85,
      tensorLoad: 94,
      streams: 16,
      temp: "54°C",
      status: "COMPUTING",
    },
    {
      id: "NODE-A100-02",
      gpu: "NVIDIA A100-SXM4-80GB",
      task: "PuLID Identity Spatial Attention",
      vram: "59.4 / 80.0 GB",
      vramPct: 74,
      tensorLoad: 91,
      streams: 12,
      temp: "52°C",
      status: "COMPUTING",
    },
    {
      id: "NODE-4090-03",
      gpu: "NVIDIA GeForce RTX 4090 (24GB)",
      task: "SAM 2 + Depth Anything 3 Metric",
      vram: "19.8 / 24.0 GB",
      vramPct: 82,
      tensorLoad: 96,
      streams: 8,
      temp: "61°C",
      status: "COMPUTING",
    },
    {
      id: "NODE-4090-04",
      gpu: "NVIDIA GeForce RTX 4090 (24GB)",
      task: "Remotion 2.5D Parallax Compositor",
      vram: "16.4 / 24.0 GB",
      vramPct: 68,
      tensorLoad: 88,
      streams: 8,
      temp: "57°C",
      status: "COMPUTING",
    },
  ];

  return (
    <section id="gpu-compute" className="relative py-20 lg:py-32 bg-[#0B0D12] border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-mono text-[#76B900]">
              <Cpu className="h-3.5 w-3.5" />
              <span>NVIDIA INCEPTION BENCHMARK ARCHITECTURE</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              GPU Compute & Acceleration Matrix
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
              Engineered from the ground up for high-throughput parallelized NVIDIA
              hardware: TensorRT compiler pipelines, headless ComfyUI workers, and
              half-precision CUDA kernel execution.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-950 p-1 font-mono text-xs">
            <button
              onClick={() => setActiveTab("matrix")}
              className={`rounded-lg px-4 py-2 transition-all ${
                activeTab === "matrix"
                  ? "bg-[#76B900] text-black font-bold shadow-lg shadow-[#76B900]/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Hardware Workload Matrix
            </button>
            <button
              onClick={() => setActiveTab("cluster")}
              className={`rounded-lg px-4 py-2 transition-all ${
                activeTab === "cluster"
                  ? "bg-[#76B900] text-black font-bold shadow-lg shadow-[#76B900]/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Live Cluster Telemetry
            </button>
          </div>
        </div>

        {/* Tab 1: Hardware Workload Matrix Table */}
        {activeTab === "matrix" && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm">
                <thead className="border-b border-zinc-800 bg-zinc-950/80 font-mono text-xs uppercase tracking-wider text-zinc-400">
                  <tr>
                    <th scope="col" className="py-4 px-6">Pipeline Stage</th>
                    <th scope="col" className="py-4 px-6">Neural Model / Engine</th>
                    <th scope="col" className="py-4 px-6">Target NVIDIA Hardware</th>
                    <th scope="col" className="py-4 px-6">CUDA / Acceleration Stack</th>
                    <th scope="col" className="py-4 px-6 text-right">Inference Speedup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 font-sans">
                  {computeWorkloads.map((item, idx) => (
                    <tr
                      key={idx}
                      className="transition-colors hover:bg-zinc-800/40 font-normal"
                    >
                      <td className="py-5 px-6 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{item.stage}</span>
                          <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-300">
                            {item.badge}
                          </span>
                        </div>
                      </td>
                      <td className="py-5 px-6 font-mono text-xs text-cyan-300">
                        {item.model}
                      </td>
                      <td className="py-5 px-6 font-mono text-xs text-zinc-300">
                        <div className="flex items-center gap-1.5">
                          <Server className="h-3.5 w-3.5 text-[#76B900]" />
                          <span>{item.hardware}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-xs text-zinc-400 max-w-xs leading-relaxed">
                        {item.cudaOptimization}
                      </td>
                      <td className="py-5 px-6 text-right font-mono text-xs font-bold text-[#76B900]">
                        {item.speedup}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Inception Value Banner */}
            <div className="border-t border-zinc-800 bg-zinc-950/80 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#76B900]/10 border border-[#76B900]/30 text-[#76B900]">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-zinc-200">
                    NVIDIA TensorRT Acceleration Roadmap
                  </div>
                  <div className="text-zinc-500">
                    Transitioning transformer backbones to TensorRT-LLM and TensorRT 10.x for 3.2x higher throughput per GPU dollar.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-[#76B900] font-bold">FP8 QUANTIZED INFERENCE</span>
                <span>• CUDA 12.4+ COMPATIBLE</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Live Cluster Telemetry Nodes */}
        {activeTab === "cluster" && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {clusterNodes.map((node) => (
              <div
                key={node.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur transition-all hover:border-[#76B900]/50 hover:shadow-xl hover:shadow-[#76B900]/5"
              >
                {/* Node Header */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3 w-3 rounded-full bg-[#76B900] animate-pulse" />
                    <div>
                      <div className="font-mono text-sm font-bold text-white">
                        {node.id}
                      </div>
                      <div className="font-mono text-[11px] text-zinc-400">
                        {node.gpu}
                      </div>
                    </div>
                  </div>
                  <span className="rounded border border-[#76B900]/30 bg-[#76B900]/10 px-2 py-0.5 text-[10px] font-mono text-[#76B900]">
                    {node.status}
                  </span>
                </div>

                {/* Node Task */}
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Current Task:</span>
                  <span className="font-mono text-cyan-300 font-medium">
                    {node.task}
                  </span>
                </div>

                {/* VRAM Progress Bar */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400 flex items-center gap-1">
                      <HardDrive className="h-3 w-3 text-zinc-500" />
                      VRAM Allocation
                    </span>
                    <span className="text-zinc-200">{node.vram} ({node.vramPct}%)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-[#76B900]"
                      style={{ width: `${node.vramPct}%` }}
                    />
                  </div>
                </div>

                {/* Hardware Telemetry Counters */}
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-zinc-800/80 pt-4 text-center font-mono">
                  <div className="rounded-lg bg-zinc-950/60 p-2 border border-zinc-800">
                    <div className="text-[10px] text-zinc-500">TENSOR LOAD</div>
                    <div className="text-sm font-bold text-[#76B900]">
                      {node.tensorLoad}%
                    </div>
                  </div>
                  <div className="rounded-lg bg-zinc-950/60 p-2 border border-zinc-800">
                    <div className="text-[10px] text-zinc-500">CUDA STREAMS</div>
                    <div className="text-sm font-bold text-cyan-400">
                      {node.streams}
                    </div>
                  </div>
                  <div className="rounded-lg bg-zinc-950/60 p-2 border border-zinc-800">
                    <div className="text-[10px] text-zinc-500">THERMAL DIE</div>
                    <div className="text-sm font-bold text-zinc-300">
                      {node.temp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
