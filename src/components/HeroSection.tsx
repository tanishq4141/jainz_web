"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  onRequestAccess: () => void;
  onWatchReel: () => void;
}

const layers = [
  {
    id: "rgb",
    label: "Final frame",
    src: "/assets/hero_motion_comic.jpg",
    caption: "Composited panel, as it appears in the finished scene.",
  },
  {
    id: "depth",
    label: "Depth",
    src: "/assets/depth_map.jpg",
    caption: "Per-pixel depth estimated from the flat illustration.",
  },
  {
    id: "mask",
    label: "Segmentation",
    src: "/assets/character_mask.jpg",
    caption: "Character isolated from the background on its own plane.",
  },
] as const;

type LayerId = (typeof layers)[number]["id"];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestAccess,
  onWatchReel,
}) => {
  const [activeLayer, setActiveLayer] = useState<LayerId>("rgb");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const layer = layers.find((l) => l.id === activeLayer)!;

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-[13px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Generative cinema engine
          </p>

          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-[-0.015em] text-fg sm:text-6xl lg:text-[5.25rem]">
            Feature-length motion comics, from a{" "}
            <em className="text-accent">twenty-line</em> premise.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            CineAgent is a multi-agent production pipeline that writes,
            illustrates, voices and composites long-form motion comics, keeping
            every character consistent across thousands of panels. It runs on
            NVIDIA GPU infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              onClick={onRequestAccess}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-[15px] font-medium text-ink transition-colors hover:bg-white"
            >
              Request studio access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={onWatchReel}
              className="inline-flex h-12 items-center gap-2.5 rounded-full border border-line px-6 text-[15px] text-fg transition-colors hover:border-subtle hover:bg-white/[0.03]"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Watch the reel
            </button>
          </div>
        </div>

        <figure className="mt-16 md:mt-20">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-surface ring-1 ring-line"
          >
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out"
              style={{
                transform: `scale(1.05) translate(${mousePos.x * -14}px, ${mousePos.y * -14}px)`,
              }}
            >
              <Image
                src={layer.src}
                alt={`${layer.label}: ${layer.caption}`}
                fill
                priority
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <figcaption className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div
              role="tablist"
              aria-label="Frame layers"
              className="inline-flex self-start rounded-full border border-line p-1"
            >
              {layers.map((l) => (
                <button
                  key={l.id}
                  role="tab"
                  aria-selected={activeLayer === l.id}
                  onClick={() => setActiveLayer(l.id)}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] transition-colors ${
                    activeLayer === l.id
                      ? "bg-raised text-fg"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <span className="text-[13px] text-muted">{layer.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
