"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: "Scene 01: Rain in Neo-Shinjuku", time: "0:00 - 0:45" },
    { title: "Scene 02: Neural Breach Discovery", time: "0:45 - 1:40" },
    { title: "Scene 03: Sector 9 Parallax Confrontation", time: "1:40 - 3:00" },
  ];

  useEffect(() => {
    if (!isPlaying || !isOpen) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
      />

      {/* Main Viewport Container */}
      <div className="relative w-full max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-950 p-2 sm:p-4 shadow-2xl z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-3 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-[#76B900] animate-pulse" />
            <span className="font-bold text-white">
              CINEAGENT 4K CINEMATIC MASTER REEL (3 MIN)
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-cyan-400 hidden sm:inline">
              REMOTION PARALLAX ENGINE V2.4
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cinematic 16:9 Screen */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black mt-2">
          <Image
            src="/assets/hero_motion_comic.jpg"
            alt="CineAgent Master Reel"
            fill
            className={`object-cover transition-transform duration-700 ease-out ${
              isPlaying ? "scale-105" : "scale-100"
            }`}
          />

          {/* Vignette & scanlines */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          <div className="scanline-effect" />

          {/* Camera Grid Lines HUD */}
          <div className="pointer-events-none absolute inset-0 p-6 flex flex-col justify-between font-mono text-[10px] text-cyan-400">
            <div className="flex justify-between">
              <span>MASTER: 3840x2160 @ 60.00 FPS</span>
              <span className="text-[#76B900]">CUDA STREAM #04: OK</span>
            </div>

            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full border border-cyan-400/30 flex items-center justify-center">
                <div className="h-1 w-1 bg-cyan-400 rounded-full" />
              </div>
            </div>

            <div className="flex justify-between text-zinc-400">
              <span>AUDIO: EBU R128 (-23.1 LUFS)</span>
              <span>SCENE_04 / FRAME 0942</span>
            </div>
          </div>

          {/* Subtitle speech highlight */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
            <div className="rounded-lg border border-cyan-500/40 bg-black/85 px-4 py-2 font-mono text-xs sm:text-sm text-cyan-300 shadow-2xl backdrop-blur">
              <span>[Kira]: “Whoever wiped the sector nine archive knew our neural cipher...”</span>
            </div>
          </div>
        </div>

        {/* Video Scrubber & Playback Controls */}
        <div className="mt-3 px-4 py-2 space-y-2">
          {/* Progress bar */}
          <div className="relative h-1.5 w-full rounded-full bg-zinc-800 cursor-pointer overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-[#76B900] transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 rounded-lg bg-zinc-800 px-3 py-1.5 text-white hover:bg-zinc-700"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-3.5 w-3.5 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Play</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-zinc-400 hover:text-white"
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4 text-rose-400" />
                ) : (
                  <Volume2 className="h-4 w-4 text-cyan-400" />
                )}
              </button>

              <span className="text-zinc-500">
                01:14 / 03:00 (Chapter: {chapters[activeChapter].title})
              </span>
            </div>

            {/* Chapter Selection */}
            <div className="hidden sm:flex items-center gap-2">
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveChapter(idx);
                    setProgress(idx * 33 + 5);
                  }}
                  className={`rounded px-2.5 py-1 text-[11px] font-mono transition-all ${
                    activeChapter === idx
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Ch 0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
