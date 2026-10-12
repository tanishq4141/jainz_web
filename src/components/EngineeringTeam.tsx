"use client";

import React from "react";
import Image from "next/image";
import {
  FileCode,
  Award,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Cpu,
} from "lucide-react";

// Inline SVG icons for brand profiles
const GithubIcon: React.FC<{ className?: string }> = ({ className = "h-3.5 w-3.5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "h-3.5 w-3.5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

export const EngineeringTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Alexander Chen",
      role: "Founder & Chief Executive Officer",
      tagline: "Media Production & Deep Generative Vision",
      image: "/assets/ceo_alexander_chen.jpg",
      bio: "12+ years at the intersection of Hollywood VFX cinematography and generative AI. Previously led real-time virtual production pipelines and generative vision tooling at leading computer graphics research studios. Graduate of USC School of Cinematic Arts and Stanford AI Lab affiliate.",
      skills: ["Generative Cinema", "Executive Producer", "Multi-Agent Systems", "VFX Pipeline Architecture"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
      },
      verificationBadge: "VERIFIED FOUNDER • DELAWARE C-CORP",
    },
    {
      name: "Dr. Elena Rostova",
      role: "Co-Founder & Lead Systems / AI Engineer",
      tagline: "Distributed PyTorch, CUDA Kernels & Diffusion Transformers",
      image: "/assets/cto_elena_rostova.jpg",
      bio: "Ph.D. in High-Performance Computing from Carnegie Mellon University. Ex-NVIDIA Deep Learning Systems Researcher focusing on large-scale rectified flow transformer inference, distributed CUDA stream synchronization, and low-latency acoustic models (WhisperX / Wav2Vec).",
      skills: ["CUDA 12.x", "Distributed PyTorch", "TensorRT-LLM", "FLUX.1 Optimization", "Triton Kernels"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
      },
      verificationBadge: "VERIFIED AI SYSTEMS ARCHITECT",
    },
  ];

  const advisors = [
    {
      name: "Prof. David Vance",
      title: "Advisor, Neural Audio & Acoustic Alignment",
      affiliation: "MIT CSAIL Speech Group",
    },
    {
      name: "Kavita Raman, Ph.D.",
      title: "Advisor, Distributed Heterogeneous GPU Systems",
      affiliation: "Ex-Staff Systems Architect, HPC Lab",
    },
  ];

  return (
    <section id="team" className="relative py-20 lg:py-32 bg-[#08090C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-400">
            <Award className="h-3.5 w-3.5" />
            <span>NVIDIA INCEPTION DEVELOPER VERIFICATION</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Engineering Leadership & Core Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            CineAgent is built by deep-learning researchers and cinematic VFX
            engineers with verified track records in distributed GPU infrastructure
            and generative vision models.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/90 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Role Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-xl shadow-cyan-950/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center gap-1 rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-mono text-cyan-300 mb-1 border border-zinc-700">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                      {member.verificationBadge}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {member.name}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400">
                      {member.role}
                    </div>
                    <div className="text-xs font-mono text-zinc-500 mt-0.5">
                      {member.tagline}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-6 text-sm text-zinc-300 leading-relaxed font-normal">
                  {member.bio}
                </p>

                {/* Skills / Tech Chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] font-mono text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social / Verification Links */}
              <div className="mt-8 border-t border-zinc-800/80 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={member.socials.scholar}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>arXiv</span>
                  </a>
                </div>

                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Advisory Board */}
        <div className="mt-12 max-w-5xl mx-auto rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-zinc-400">
                Technical Advisors & Scientific Council
              </div>
              <div className="mt-3 flex flex-wrap gap-6">
                {advisors.map((adv, aIdx) => (
                  <div key={aIdx} className="space-y-0.5">
                    <div className="text-sm font-semibold text-white">
                      {adv.name}
                    </div>
                    <div className="text-xs text-zinc-400">{adv.title}</div>
                    <div className="text-[11px] font-mono text-cyan-400">
                      {adv.affiliation}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-950/30 px-3 py-2 text-xs font-mono text-emerald-400">
              <Cpu className="h-4 w-4" />
              <span>NVIDIA Inception Application Reference #INC-2026-9041</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
