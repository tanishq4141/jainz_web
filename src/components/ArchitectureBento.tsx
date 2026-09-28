"use client";

import React, { useState } from "react";
import {
  GitBranch,
  Eye,
  Mic2,
  Box,
  Layers,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Sliders,
  Terminal,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react";

export const ArchitectureBento: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  const stages = [
    {
      id: 1,
      title: "Hierarchical Narrative Engine (HNE)",
      acronym: "D.O.M.E.",
      tag: "Stage 01 • Script & Continuity",
      subtitle:
        "Dynamic Outlining with Memory Enhancement (DOME). Expands 20-line premises across 3 Acts and 54 coherent scenes without context collapse or plot drift.",
      icon: GitBranch,
      accentColor: "border-cyan-500/30 text-cyan-400 bg-cyan-950/20",
      pillColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      techSpecs: [
        "Recursive 3-Act scene graph expansion",
        "Persistent Vector Memory Character Bibles",
        "Zero token-drift across 180-minute runtime",
        "Automated scene beats & dialogue scoring",
      ],
      codeSnippet: `{
  "act_decomposition": {
    "act_I": { "scenes": 12, "pacing": "inciting_incident" },
    "act_II": { "scenes": 26, "midpoint_twist": "cipher_revealed" },
    "act_III": { "scenes": 16, "resolution": "sector_climax" }
  },
  "character_bible_hash": "sha256:9b4a7d18c3ef",
  "identity_tokens": ["KIRA_01_CYBER_OCULAR", "MARCUS_DETECTIVE"]
}`,
    },
    {
      id: 2,
      title: "Identity-Locked Visual Diffusion",
      acronym: "FLUX.1 + PuLID",
      tag: "Stage 02 • Neural Synthesis",
      subtitle:
        "FLUX.1 [dev] + PuLID Spatial Decoupling. Constrains identity cross-attention strictly to facial bounding boxes to eliminate color bleeding across 2,160 sequential panels.",
      icon: Eye,
      accentColor: "border-sky-500/30 text-sky-400 bg-sky-950/20",
      pillColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
      techSpecs: [
        "12B Rectified Flow Transformer backbone",
        "PuLID identity adapter decoupled from background",
        "Zero facial drift across lighting conditions",
        "Batch inference on 8x RTX 4090 / A100 nodes",
      ],
      codeSnippet: `# Spatial Cross-Attention Decoupling
def apply_pulid_cross_attn(latent, id_embeds, bbox_mask):
    # Restrict PuLID injection strictly to bounding box coordinates
    face_attn = torch.matmul(latent * bbox_mask, id_embeds.transpose(-1, -2))
    bg_attn = standard_self_attn(latent * (1 - bbox_mask))
    return torch.lerp(bg_attn, face_attn, weight=0.88)`,
    },
    {
      id: 3,
      title: "Phoneme Forced Alignment & Audio Mastering",
      acronym: "WhisperX + Wav2Vec",
      tag: "Stage 03 • Acoustic Sync",
      subtitle:
        "WhisperX (Silero-VAD + Wav2Vec 2.0). Frame-accurate dialogue synchronization with automated sidechain BGM ducking and EBU R128 loudness compliance (-23 LUFS).",
      icon: Mic2,
      accentColor: "border-purple-500/30 text-purple-400 bg-purple-950/20",
      pillColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      techSpecs: [
        "Sub-20ms frame-level phoneme boundaries",
        "Automated sidechain ducking (-14dB dialogue duck)",
        "EBU R128 compliance with True-Peak limiting",
        "Multi-track spatial audio stem synthesis",
      ],
      codeSnippet: `# Sub-millisecond Phoneme Forced Alignment
whisperx_aligner = whisperx.load_align_model(
    language_code="en", 
    device="cuda:0"
)
aligned_tokens = whisperx.align(
    transcript=script_dialogue, 
    vad_segments=silero_vad_output, 
    sample_rate=48000
)
# Frame timestamp accuracy: ±0.016s (60 FPS sync)`,
    },
    {
      id: 4,
      title: "2.5D Depth & Parallax Compositing",
      acronym: "DA-3 + SAM 2 + Remotion",
      tag: "Stage 04 • Programmatic VFX",
      subtitle:
        "Depth Anything 3 + SAM 2 + LaMa. Converts 2D comic art into dynamic multi-plane stages animated with differential parallax velocity in Remotion.",
      icon: Box,
      accentColor: "border-emerald-500/30 text-[#76B900] bg-emerald-950/20",
      pillColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      techSpecs: [
        "Depth Anything 3 16-bit metric depth estimation",
        "SAM 2 zero-shot character layer segmentation",
        "LaMa Fourier multi-plane inpainting plate",
        "Headless React Remotion 4K video rendering",
      ],
      codeSnippet: `// Remotion Differential Parallax Camera Motion
export const ParallaxStage = ({ foreground, background, depthMap }) => {
  const frame = useCurrentFrame();
  const panX = interpolate(frame, [0, 90], [0, 42]);
  const camPush = interpolate(frame, [0, 90], [1.0, 1.15]);
  
  return (
    <div style={{ transform: \`scale(\${camPush})\` }}>
      <Layer depth={0.2} translateX={panX * 0.3} src={background} />
      <Layer depth={0.8} translateX={panX * 1.2} src={foreground} />
    </div>
  );
};`,
    },
  ];

  return (
    <section id="architecture" className="relative py-20 lg:py-32 bg-[#08090C]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#76B900]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-400">
            <Workflow className="h-3.5 w-3.5" />
            <span>PROPRIETARY MULTI-AGENT PIPELINE</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            The 4-Stage Autonomous Engine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A continuous neural pipeline orchestrating hierarchical screenwriting,
            spatial diffusion attention decoupling, acoustic alignment, and programmatic
            2.5D parallax cinematography.
          </p>
        </div>

        {/* Live Data Flow Indicator Bar */}
        <div className="mt-12 hidden lg:flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-zinc-200 font-bold">PIPELINE DATA FLOW:</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-cyan-400">20-Line Concept</span>
            <ArrowRight className="h-3.5 w-3.5 text-zinc-600" />
            <span className="text-cyan-300">DOME Scene Graphs</span>
            <ArrowRight className="h-3.5 w-3.5 text-zinc-600" />
            <span className="text-sky-400">FLUX.1 + PuLID Frames</span>
            <ArrowRight className="h-3.5 w-3.5 text-zinc-600" />
            <span className="text-purple-400">WhisperX Timestamps</span>
            <ArrowRight className="h-3.5 w-3.5 text-zinc-600" />
            <span className="text-[#76B900] font-semibold">2.5D Remotion 4K Master</span>
          </div>

          <div className="rounded border border-emerald-500/30 bg-emerald-950/40 px-2 py-0.5 text-[11px] text-emerald-400">
            LATENCY: 5.5h / 180min
          </div>
        </div>

        {/* Bento Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isSelected = selectedStage === stage.id;
            return (
              <div
                key={stage.id}
                onClick={() => setSelectedStage(isSelected ? null : stage.id)}
                className={`group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/90 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/70 ${
                  isSelected ? "ring-2 ring-cyan-500/50 border-cyan-500/50" : ""
                }`}
              >
                <div>
                  {/* Top Bar with Stage & Acronym */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-mono font-medium border ${stage.pillColor}`}
                    >
                      {stage.tag}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      [{stage.acronym}]
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-5 flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${stage.accentColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Subtitle / Description */}
                  <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-normal">
                    {stage.subtitle}
                  </p>

                  {/* Tech Specifications */}
                  <div className="mt-6 space-y-2 border-t border-zinc-800/80 pt-4">
                    {stage.techSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code / Tensor Log Preview Drawer */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Code2 className="h-3.5 w-3.5 text-zinc-400" />
                      INTERMEDIATE TENSOR / LOG REPRESENTATION:
                    </span>
                    <span className="text-[10px] text-cyan-400 hover:underline">
                      {isSelected ? "Collapse" : "Expand Code"}
                    </span>
                  </div>
                  <pre className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950/90 p-3.5 text-[11px] font-mono text-zinc-300 leading-relaxed max-h-36">
                    <code>{stage.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
