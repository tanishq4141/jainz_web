"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Sparkles, Cpu, Layers, Volume2, Maximize2, Shield, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onRequestAccess: () => void;
  onWatchReel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestAccess,
  onWatchReel,
}) => {
  const [activeLayer, setActiveLayer] = useState<"rgb" | "depth" | "mask">("rgb");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtitle synchronization simulation
  const words = [
    { text: "Kira:", time: 0, speaker: true },
    { text: "The", time: 400 },
    { text: "damp", time: 700 },
    { text: "air", time: 1000 },
    { text: "in", time: 1300 },
    { text: "Neo-Shinjuku", time: 1600, highlight: true },
    { text: "tastes", time: 2300 },
    { text: "like", time: 2600 },
    { text: "ozone", time: 2900 },
    { text: "and", time: 3200 },
    { text: "copper.", time: 3500 },
    { text: "Whoever", time: 4200 },
    { text: "wiped", time: 4600 },
    { text: "sector", time: 5000 },
    { text: "nine", time: 5300 },
    { text: "left", time: 5700 },
    { text: "no", time: 6000 },
    { text: "digital", time: 6300 },
    { text: "residue...", time: 6700, highlight: true },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 400);
    return () => clearInterval(interval);
  }, [words.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const getImageSrc = () => {
    switch (activeLayer) {
      case "depth":
        return "/assets/depth_map.jpg";
      case "mask":
        return "/assets/character_mask.jpg";
      default:
        return "/assets/hero_motion_comic.jpg";
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-radial-vignette">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#76B900]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pill Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-xs font-mono backdrop-blur-md shadow-lg shadow-black/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#76B900] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#76B900]"></span>
            </span>
            <span className="text-zinc-300">
              Proprietary Autonomous Motion Comic Engine
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-[#76B900] font-semibold">
              GPU-Accelerated (CUDA)
            </span>
          </div>
        </div>

        {/* Hero Headline & Subheadline */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Transform 20-Line Concepts into{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              3-Hour Generative
            </span>{" "}
            Motion Comics.
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mx-auto">
            A distributed multi-agent system executing hierarchical narrative
            decomposition, zero-shot facial consistency on{" "}
            <span className="text-zinc-200 font-medium">FLUX.1</span>,
            sub-millisecond phoneme alignment via{" "}
            <span className="text-zinc-200 font-medium">WhisperX</span>, and
            programmatic <span className="text-cyan-400 font-medium">2.5D parallax cinematography</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRequestAccess}
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:from-cyan-300 hover:to-blue-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] active:scale-95"
            >
              <span>Request Studio Access</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onWatchReel}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/90 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition-all duration-200 hover:bg-zinc-800 hover:border-zinc-500 hover:shadow-lg hover:shadow-black/50"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </div>
              <span>Watch Cinematic Reel (3 Min)</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Container: Cinematic 16:9 Interactive Parallax Viewport */}
        <div className="mt-14 lg:mt-18 max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-2 sm:p-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
          >
            {/* Viewport Top Bar / Telemetry */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-2.5 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-zinc-500">|</span>
                <span className="text-zinc-300 font-semibold flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-[#76B900]" />
                  REMOTION_RENDER_STREAM_04
                </span>
                <span className="hidden sm:inline text-zinc-600">•</span>
                <span className="hidden sm:inline text-zinc-500">
                  RESOLUTION: 3840x2160 (4K UHD)
                </span>
              </div>

              {/* Layer Selection HUD */}
              <div className="flex items-center gap-1 bg-zinc-900/90 rounded-lg p-1 border border-zinc-800">
                <button
                  onClick={() => setActiveLayer("rgb")}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeLayer === "rgb"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  RGB Motion
                </button>
                <button
                  onClick={() => setActiveLayer("depth")}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeLayer === "depth"
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  16-Bit Depth D(x,y)
                </button>
                <button
                  onClick={() => setActiveLayer("mask")}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeLayer === "mask"
                      ? "bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  SAM 2 Mask
                </button>
              </div>
            </div>

            {/* Simulated 16:9 Display Frame */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              {/* Scanline overlay */}
              <div className="scanline-effect" />

              {/* Parallax image container */}
              <div
                className="relative h-full w-full transition-transform duration-100 ease-out"
                style={{
                  transform: `scale(1.04) translate(${mousePos.x * -18}px, ${
                    mousePos.y * -18
                  }px)`,
                }}
              >
                <Image
                  src={getImageSrc()}
                  alt="CineAgent Motion Comic Parallax Frame"
                  fill
                  priority
                  className="object-cover transition-opacity duration-300"
                />

                {/* Simulated Film Grain & Cinematic Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

                {/* HUD Camera Grid Lines & Focal Marks */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 opacity-40">
                  <div className="flex justify-between text-[10px] font-mono text-cyan-400">
                    <span>FOCAL: 50mm f/1.4</span>
                    <span>T-CORE: 94.2%</span>
                    <span>FPS: 60.00 RECT</span>
                  </div>

                  {/* Crosshair Center */}
                  <div className="flex items-center justify-center">
                    <div className="relative h-12 w-12 border border-cyan-400/30 rounded-full flex items-center justify-center">
                      <div className="h-1.5 w-1.5 bg-cyan-400 rounded-full" />
                    </div>
                  </div>

                  <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                    <span>DEPTH: METRIC Z-PLANE 0.82m</span>
                    <span>AUDIO DUCK: -12.4 dB</span>
                    <span>PARALLAX: 2.5D KINETIC</span>
                  </div>
                </div>

                {/* Dynamic Vector Speech Bubble */}
                <div
                  className="absolute top-10 right-10 sm:right-16 z-20 max-w-xs sm:max-w-sm rounded-xl border border-cyan-400/50 bg-black/85 p-3.5 backdrop-blur-md shadow-2xl shadow-cyan-950/60 transition-transform duration-200"
                  style={{
                    transform: `translate(${mousePos.x * 25}px, ${
                      mousePos.y * 25
                    }px)`,
                  }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1 border-b border-cyan-900/60 pb-1">
                    <span className="font-bold tracking-wider">SPEECH DIALOGUE [PULID_ID: KIRA_01]</span>
                    <span className="text-zinc-400">CH 01</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-100 italic leading-snug">
                    “Whoever erased the sector nine database knew our neural cipher... They’re not hiding from us. They’re waiting.”
                  </p>
                  {/* Comic Speech Arrow */}
                  <div className="absolute -bottom-2 left-8 h-3 w-3 rotate-45 border-r border-b border-cyan-400/50 bg-black/90" />
                </div>

                {/* Live Synchronized Subtitles Bar */}
                <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center px-4">
                  <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-black/80 px-4 py-2 backdrop-blur-md text-xs sm:text-sm font-medium shadow-xl">
                    <span className="text-cyan-400 font-mono font-bold mr-1">
                      [WHISPERX SYNC]:
                    </span>
                    {words.map((item, idx) => {
                      const isActive = idx === currentWordIndex;
                      return (
                        <span
                          key={idx}
                          className={`transition-all duration-150 ${
                            isActive
                              ? "text-yellow-400 scale-110 font-bold underline decoration-yellow-400"
                              : item.highlight
                              ? "text-cyan-300"
                              : "text-zinc-300"
                          }`}
                        >
                          {item.text}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Playback HUD Bar */}
              <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-zinc-800 bg-zinc-950/90 px-4 py-2 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-white"
                  >
                    <Volume2 className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{isPlayingAudio ? "SFX & SCORE ACTIVE" : "MUTED"}</span>
                  </button>

                  {/* Equalizer animation */}
                  <div className="flex items-end gap-0.5 h-3">
                    {[12, 18, 8, 22, 14, 26, 10, 16, 24, 12].map((height, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-cyan-400/80 transition-all duration-200"
                        style={{
                          height: isPlayingAudio ? `${height * 0.5}px` : "2px",
                          opacity: isPlayingAudio ? 0.9 : 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-zinc-500">
                  <span className="hidden sm:inline">CUDA STREAM: 0x7FA9B0</span>
                  <button
                    onClick={onWatchReel}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>EXPAND 4K REEL</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive instruction callout */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-zinc-500 font-mono px-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Interactive Viewport: Move cursor to test differential 2.5D parallax shift.</span>
            </div>
            <div>
              <span>Generated on 8x NVIDIA RTX 4090 • Inference: 1.84s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
