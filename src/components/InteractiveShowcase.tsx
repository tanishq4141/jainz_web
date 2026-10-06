"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Layers,
  Sparkles,
  Sliders,
  Play,
  Pause,
  Volume2,
  CheckCircle2,
  Terminal,
  Cpu,
  ArrowRight,
  Eye,
  RefreshCw,
} from "lucide-react";

export const InteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"input" | "layers" | "final">("final");
  const [selectedLayer, setSelectedLayer] = useState<"mask" | "depth" | "plate">("depth");
  const [splitPosition, setSplitPosition] = useState(50);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const rawScript = `SCENE 04 - EXT. NEO-SHINJUKU CANAL ALLEYWAY - NIGHT
[HEAVY ACID RAIN cascades down corrugated steel conduits.]
[KIRA (32), augmented detective in reinforced trench coat, stands beneath flickering holographic noodle bar signs.]
[Her left ocular cybernetic aperture clicks and glows electric cyan, analyzing residual biometric nanites on the pavement.]

KIRA
(quietly, voice raspy, synthesized undertone)
"Whoever purged the sector nine cold storage wasn't after credits. 
They took the genesis memory kernels."

[SFX: Low frequency sonic pulse reverberates through sewer grates.]
[CAMERA: 2.5D Slow parallax push-in on Kira's iris as HUD telemetry reflects off the damp puddles.]
[BGM: Dark synthwave bassline ducks automatically by -14dB as Kira speaks.]`;

  const characterBible = {
    entity_id: "KIRA_VEXEN_01",
    archetype: "Augmented Cyberpunk Detective",
    face_latent_seed: 491820491,
    identity_tokens: ["pulid_facial_feature_matrix", "cyan_cybernetic_iris_left"],
    wardrobe: "Dark reinforced carbon-fiber trench coat with water-repellent seams",
    lighting_preference: "High-contrast volumetric cyan rim-light with magenta spill",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section id="interactive-demo" className="relative py-20 lg:py-32 bg-[#08090C]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-400">
            <Sliders className="h-3.5 w-3.5" />
            <span>INTERACTIVE DEEP-TECH INSPECTOR</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            From 15-Line Premise to 4K Parallax Scene
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Inspect the underlying intermediate representations that power CineAgent’s
            autonomous motion comic pipeline. Scrub layers, examine extracted depth,
            and review multi-modal alignment.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="mt-12 flex justify-center">
          <div className="flex rounded-xl border border-zinc-800 bg-zinc-950 p-1 font-mono text-xs shadow-xl">
            <button
              onClick={() => setActiveTab("input")}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 transition-all ${
                activeTab === "input"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Step 1: Raw Input & Bible</span>
            </button>

            <button
              onClick={() => setActiveTab("layers")}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 transition-all ${
                activeTab === "layers"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>Step 2: Multi-Modal CV Layers</span>
            </button>

            <button
              onClick={() => setActiveTab("final")}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 transition-all ${
                activeTab === "final"
                  ? "bg-[#76B900]/20 text-[#76B900] border border-[#76B900]/40 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>Step 3: Final 2.5D Scene</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Raw Script Input & Character Bible */}
        {activeTab === "input" && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Raw Neo-Noir Script */}
            <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-xs text-zinc-400">
                <span className="flex items-center gap-2 text-white font-semibold">
                  <FileText className="h-4 w-4 text-cyan-400" />
                  RAW SCREENPLAY SCRIPT PROMPT (15 LINES)
                </span>
                <span className="text-zinc-500">FORMAT: FOUNTAIN / DOME</span>
              </div>
              <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-950 p-4 font-mono text-xs text-zinc-300 leading-relaxed max-h-[380px]">
                <code>{rawScript}</code>
              </pre>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Tokens: 148 | Est. Render Panels: 4</span>
                <button
                  onClick={() => setActiveTab("layers")}
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <span>Deconstruct Into CV Layers</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Extracted Character Bible & Scene Graph */}
            <div className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-xs text-zinc-400">
                  <span className="flex items-center gap-2 text-white font-semibold">
                    <Terminal className="h-4 w-4 text-[#76B900]" />
                    EXTRACTED CHARACTER BIBLE (JSON)
                  </span>
                  <span className="text-[#76B900]">IDENTITY LOCKED</span>
                </div>
                <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-950 p-4 font-mono text-xs text-zinc-300 leading-relaxed max-h-[280px]">
                  <code>{JSON.stringify(characterBible, null, 2)}</code>
                </pre>
              </div>

              <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3.5 text-xs text-cyan-300 font-mono">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                  HNE MEMORY ANCHOR ESTABLISHED
                </div>
                <div className="text-zinc-400 mt-1 text-[11px]">
                  PuLID identity seed 491820491 injected into all subsequent 2,160 keyframe latents.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Multi-Modal Layers (Mask, Depth Map, Background Plate) */}
        {activeTab === "layers" && (
          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur">
            {/* Top Selector for layers */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Multi-Modal Computer Vision Layer Inspection
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  Isolated neural stages extracted before Remotion compositing.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => setSelectedLayer("depth")}
                  className={`rounded-lg px-3 py-1.5 border transition-all ${
                    selectedLayer === "depth"
                      ? "bg-purple-500/20 text-purple-300 border-purple-500/50"
                      : "border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  1. Depth Map D(x, y)
                </button>
                <button
                  onClick={() => setSelectedLayer("mask")}
                  className={`rounded-lg px-3 py-1.5 border transition-all ${
                    selectedLayer === "mask"
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50"
                      : "border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  2. SAM 2 Foreground Mask
                </button>
                <button
                  onClick={() => setSelectedLayer("plate")}
                  className={`rounded-lg px-3 py-1.5 border transition-all ${
                    selectedLayer === "plate"
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50"
                      : "border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  3. Inpainted Plate (LaMa)
                </button>
              </div>
            </div>

            {/* Visual Viewport with Layer info */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-black">
                {selectedLayer === "depth" && (
                  <Image
                    src="/assets/depth_map.jpg"
                    alt="Depth Anything 3 Metric Depth Map"
                    fill
                    className="object-cover"
                  />
                )}
                {selectedLayer === "mask" && (
                  <Image
                    src="/assets/character_mask.jpg"
                    alt="SAM 2 Character Segmentation Mask"
                    fill
                    className="object-cover"
                  />
                )}
                {selectedLayer === "plate" && (
                  <Image
                    src="/assets/inpainted_plate.jpg"
                    alt="LaMa Inpainted Background Plate"
                    fill
                    className="object-cover"
                  />
                )}

                {/* HUD Overlay */}
                <div className="pointer-events-none absolute top-4 left-4 rounded bg-black/80 px-2.5 py-1 text-[11px] font-mono text-cyan-400 border border-cyan-500/30">
                  {selectedLayer === "depth" && "MODEL: DEPTH ANYTHING 3 (16-BIT FLOAT)"}
                  {selectedLayer === "mask" && "MODEL: SAM 2 SEGMENTATION (IoU 0.986)"}
                  {selectedLayer === "plate" && "MODEL: LAMA FOURIER INPAINTING (4K)"}
                </div>
              </div>

              {/* Technical breakdown sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3">
                  <div className="text-zinc-400 font-semibold uppercase tracking-wider">
                    Layer Telemetry & Metric
                  </div>

                  {selectedLayer === "depth" && (
                    <>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-500">Z-Buffer Range:</span>
                        <span className="text-white">0.35m — 145.0m</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-500">Precision:</span>
                        <span className="text-[#76B900]">16-bit Uncompressed</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-500">Parallax Differential:</span>
                        <span className="text-cyan-400">4.2x Multi-Plane Ratio</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal pt-1">
                        Extracts metric depth geometry directly from 2D diffusion latents,
                        enabling camera dolly and pan without 3D rigging.
                      </p>
                    </>
                  )}

                  {selectedLayer === "mask" && (
                    <>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-500">Prompting Mode:</span>
                        <span className="text-white">Zero-Shot Bounding Box</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-500">Confidence Score:</span>
                        <span className="text-[#76B900]">98.6%</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-500">Edge Feathering:</span>
                        <span className="text-pink-400">Sub-pixel Antialiasing</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal pt-1">
                        Isolates character foreground elements into clean alpha channels,
                        preventing edge artifacts during parallax camera shifts.
                      </p>
                    </>
                  )}

                  {selectedLayer === "plate" && (
                    <>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-500">Inpaint Architecture:</span>
                        <span className="text-white">LaMa Fast Fourier (FFT)</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-500">Hole Fill Accuracy:</span>
                        <span className="text-[#76B900]">99.1% Structural</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                        <span className="text-zinc-500">Background Plate:</span>
                        <span className="text-emerald-400">Seamless Occlusion Fill</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal pt-1">
                        Hallucinates background geometry occluded by the character so
                        the camera can move laterally without revealing black voids.
                      </p>
                    </>
                  )}
                </div>

                <button
                  onClick={() => setActiveTab("final")}
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-950 hover:from-cyan-400 hover:to-blue-500 flex items-center justify-center gap-2"
                >
                  <span>Composite In Remotion (Step 3)</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Final 2.5D Scene with Parallax, Typography & Audio */}
        {activeTab === "final" && (
          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#76B900] animate-pulse" />
                  <h3 className="text-lg font-bold text-white">
                    Final 4K Programmatic Remotion Composite
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Dynamic vector typography • Differential parallax push-in • Sidechain ducked master.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-mono font-semibold transition-all ${
                    isPlayingAudio
                      ? "bg-cyan-500 text-slate-950"
                      : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                  }`}
                >
                  {isPlayingAudio ? (
                    <>
                      <Pause className="h-3.5 w-3.5 fill-current" />
                      <span>PAUSE AUDIO STEM</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 fill-current" />
                      <span>PLAY DIALOGUE STEM</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Interactive Final Viewport */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-black cursor-crosshair"
            >
              <div
                className="relative h-full w-full transition-transform duration-75 ease-out"
                style={{
                  transform: `scale(1.05) translate(${mouseOffset.x * -24}px, ${
                    mouseOffset.y * -24
                  }px)`,
                }}
              >
                <Image
                  src="/assets/hero_motion_comic.jpg"
                  alt="Final 2.5D Motion Comic Composited Panel"
                  fill
                  className="object-cover"
                />

                {/* Comic Vector Dialogue Bubble */}
                <div
                  className="absolute top-8 left-8 sm:left-14 z-20 max-w-xs sm:max-w-md rounded-xl border border-cyan-400 bg-black/90 p-4 shadow-2xl backdrop-blur transition-transform duration-150"
                  style={{
                    transform: `translate(${mouseOffset.x * 35}px, ${
                      mouseOffset.y * 35
                    }px)`,
                  }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 border-b border-cyan-900 pb-1 mb-1.5">
                    <span className="font-bold">SPEECH BALLOON: KIRA [SEC_04_P02]</span>
                    <span>WHISPERX SYNC</span>
                  </div>
                  <p className="text-sm font-semibold text-white tracking-wide leading-snug">
                    “Whoever wiped the sector nine archive left no digital residue... They took the genesis memory kernels.”
                  </p>
                  <div className="absolute -bottom-2 left-10 h-3 w-3 rotate-45 border-r border-b border-cyan-400 bg-black" />
                </div>

                {/* Subtitle Telemetry Band */}
                <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center px-4">
                  <div className="rounded-lg border border-white/20 bg-black/85 px-4 py-2 font-mono text-xs sm:text-sm text-yellow-400 shadow-xl backdrop-blur">
                    <span>[Kira]: “Whoever wiped the sector nine archive left no digital residue...”</span>
                  </div>
                </div>
              </div>

              {/* Interactive cursor cue */}
              <div className="pointer-events-none absolute top-4 right-4 rounded-md bg-black/80 px-2.5 py-1 text-[11px] font-mono text-zinc-300 border border-zinc-800">
                DRAG / HOVER TO TEST 2.5D CAMERA PARALLAX
              </div>
            </div>

            {/* Audio Waveform and Loudness Master Strip */}
            <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-zinc-400 border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2 text-white">
                  <Volume2 className="h-4 w-4 text-purple-400" />
                  <span>ACOUSTIC DAW MASTERING (WHISPERX + EBU R128)</span>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span className="text-emerald-400">INTEGRATED LOUDNESS: -23.0 LUFS</span>
                  <span className="text-cyan-400">TRUE PEAK: -1.0 dBTP</span>
                  <span className="text-purple-400">SIDECHAIN DUCK: -14.2 dB</span>
                </div>
              </div>

              {/* Waveform graphic bar */}
              <div className="mt-3 flex items-center gap-1 h-8 overflow-hidden">
                {[
                  10, 15, 25, 40, 65, 80, 50, 30, 20, 45, 90, 75, 60, 40, 85, 95,
                  70, 50, 35, 60, 75, 90, 80, 45, 30, 20, 15, 35, 60, 80, 55, 30,
                  15, 45, 70, 90, 65, 40, 25, 10, 20, 50, 80, 95, 60, 30, 15, 25,
                  60, 85, 70, 40, 20, 10,
                ].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500 via-sky-400 to-purple-500 transition-all duration-150"
                    style={{
                      height: isPlayingAudio ? `${val}%` : `${Math.max(12, val * 0.35)}%`,
                      opacity: isPlayingAudio ? 0.95 : 0.4,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
