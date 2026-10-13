"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  ShieldCheck,
  Cpu,
  Key,
  CheckCircle2,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestAccessModal: React.FC<RequestAccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [formData, setFormData] = useState({
    studioName: "",
    workEmail: "",
    role: "Producer / Studio Head",
    format: "3-Hour Feature Film (180 Min)",
    computeTier: "Hosted CineAgent NVIDIA Cloud (A100/4090)",
    logline: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const dummyApiKey = "cine_preview_sec9_4a8f902b7cd1e5a8";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(dummyApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#0d0f14] p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Early Studio Access Program
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
              Request CineAgent Platform Access
            </h3>
            <p className="mt-1 text-xs text-zinc-400 font-sans">
              Enter your studio credentials to access the private SDK, headless
              ComfyUI API workers, and dedicated NVIDIA GPU clusters.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1">
                  Studio / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studioName}
                  onChange={(e) =>
                    setFormData({ ...formData, studioName: e.target.value })
                  }
                  placeholder="e.g. Warner Animation, Cyberpunk Studios"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1">
                  Professional Work Email (Domain Verified) *
                </label>
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, workEmail: e.target.value })
                  }
                  placeholder="director@yourstudio.com"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1">
                    Your Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option>Producer / Studio Head</option>
                    <option>Showrunner / Director</option>
                    <option>AI / VFX Pipeline Lead</option>
                    <option>Venture Investor / Partner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1">
                    Target Format
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) =>
                      setFormData({ ...formData, format: e.target.value })
                    }
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option>3-Hour Feature Film (180 Min)</option>
                    <option>Episodic Series (10x 22 Min)</option>
                    <option>Graphic Novel IP Adaptation</option>
                    <option>Short Film Proof-of-Concept</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1">
                  Compute Infrastructure Preference
                </label>
                <select
                  value={formData.computeTier}
                  onChange={(e) =>
                    setFormData({ ...formData, computeTier: e.target.value })
                  }
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option>Hosted CineAgent NVIDIA Cloud (RTX 4090 / A100)</option>
                  <option>On-Premises Studio Cluster (Slurm / Kubernetes)</option>
                  <option>Hybrid Burst Deployment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1">
                  Story Premise / Project Logline (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.logline}
                  onChange={(e) =>
                    setFormData({ ...formData, logline: e.target.value })
                  }
                  placeholder="e.g. A rogue synthetic detective in 2094 uncovers a memory black market beneath Neo-Shinjuku..."
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-semibold uppercase tracking-wider text-slate-950 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-950/50 flex items-center justify-center gap-2"
                >
                  <span>Submit Studio Access Request</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#76B900]" />
                <span>NDA Protected • Direct Founder Review within 24 Hours</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[#76B900]">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
              Access Request Confirmed
            </h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-md mx-auto">
              Your studio priority application has been queued on Node A100-02.
              Our engineering team has reserved your provisional SDK API token:
            </p>

            {/* Generated API Token */}
            <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-left font-mono">
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                <span>PROVISIONAL CINEAGENT SDK TOKEN:</span>
                <span className="text-[#76B900] font-bold">STATUS: STAGED</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-900/80 rounded-lg p-2.5 border border-zinc-800">
                <code className="text-xs text-cyan-300 font-bold overflow-hidden text-ellipsis">
                  {dummyApiKey}
                </code>
                <button
                  onClick={handleCopyKey}
                  className="p-1 text-zinc-400 hover:text-white transition-colors"
                >
                  {copiedKey ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={onClose}
                className="w-full rounded-xl bg-cyan-500 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                Return To Architecture Overview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
