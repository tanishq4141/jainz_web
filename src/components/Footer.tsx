"use client";

import React from "react";
import {
  Cpu,
  ShieldCheck,
  Mail,
  MapPin,
  ExternalLink,
  Terminal,
  FileText,
  Lock,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#08090C] text-zinc-400 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-cyan-400">
                <Cpu className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white">
                  CineAgent
                </span>
                <span className="rounded bg-cyan-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-500/20">
                  AI
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              CineAgent Technologies, Inc. is an autonomous generative cinema
              company developing deep-tech neural pipelines for 3-hour motion
              comics, powered by distributed NVIDIA RTX 4090 and A100 GPU clusters.
            </p>

            {/* Corporate Transparency Info (Mandatory for Inception) */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/80 p-3.5 text-xs font-mono text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <ShieldCheck className="h-4 w-4 text-[#76B900]" />
                <span className="font-semibold">
                  Registered Delaware C-Corporation
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>548 Market St, Suite 74812, San Francisco, CA 94104</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400 text-[11px]">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span>contact@cineagent.ai • founders@cineagent.ai</span>
              </div>
            </div>
          </div>

          {/* Column 1: Neural Architecture */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
              Architecture & Models
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="#architecture"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Hierarchical Script (DOME)
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="hover:text-cyan-400 transition-colors"
                >
                  FLUX.1 + PuLID Spatial Decoupling
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="hover:text-cyan-400 transition-colors"
                >
                  WhisperX Phoneme Forced Alignment
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Depth Anything 3 + SAM 2 Metric
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Programmatic Remotion Compositor
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Compute & Acceleration */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
              GPU & Acceleration
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="#gpu-compute"
                  className="hover:text-[#76B900] transition-colors"
                >
                  Headless ComfyUI API Workers
                </a>
              </li>
              <li>
                <a
                  href="#gpu-compute"
                  className="hover:text-[#76B900] transition-colors"
                >
                  NVIDIA TensorRT Implementation
                </a>
              </li>
              <li>
                <a
                  href="#gpu-compute"
                  className="hover:text-[#76B900] transition-colors"
                >
                  CUDA 12.4+ Half-Precision Kernels
                </a>
              </li>
              <li>
                <a
                  href="#economics"
                  className="hover:text-[#76B900] transition-colors"
                >
                  Unit Economics & ROI Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://www.nvidia.com/en-us/startups/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#76B900] hover:underline"
                >
                  <span>NVIDIA Inception Member Portal</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Developers */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
              Legal & Compliance
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-mono">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy & GDPR
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  IP & Generative Copyright Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security Whitepaper (SOC2 Type II)
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Developer Verification
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright strip */}
        <div className="mt-14 border-t border-zinc-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 CineAgent Technologies, Inc. All rights
            reserved.
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-[#76B900]" />
            <span>NVIDIA Inception Program Applicant System</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
