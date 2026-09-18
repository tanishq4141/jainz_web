"use client";

import React, { useState } from "react";
import { Cpu, Terminal, Sparkles, Menu, X, ShieldCheck, ChevronRight } from "lucide-react";

interface NavbarProps {
  onRequestAccess: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestAccess }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Architecture", href: "#architecture" },
    { label: "GPU Acceleration", href: "#gpu-compute" },
    { label: "Interactive Demo", href: "#interactive-demo" },
    { label: "Economics", href: "#economics" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#08090C]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-950/60 to-slate-900 shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            <Cpu className="h-5 w-5 text-cyan-400 transition-transform group-hover:scale-110" />
            <div className="absolute -inset-0.5 rounded-lg bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white">
                CineAgent
              </span>
              <span className="rounded bg-cyan-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-500/20">
                AI
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
              Generative Cinema
            </span>
          </div>
        </a>

        {/* Live Cluster Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3 py-1 text-xs font-mono text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#76B900]"></span>
          </span>
          <span>NVIDIA CLUSTER ONLINE</span>
          <span className="text-zinc-500">|</span>
          <span className="text-zinc-400">64x A100 / RTX 4090</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onRequestAccess}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] active:scale-95"
          >
            <span>Request Platform Access</span>
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#08090C] px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3 py-1 text-xs font-mono text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-[#76B900] animate-pulse"></span>
            <span>NVIDIA CLUSTER ONLINE (64x A100)</span>
          </div>

          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestAccess();
              }}
              className="w-full rounded-lg bg-cyan-500 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-slate-950 hover:bg-cyan-400"
            >
              Request Platform Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
