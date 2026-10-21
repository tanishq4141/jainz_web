"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const rawScript = `SCENE 04 — EXT. NEO-SHINJUKU CANAL ALLEY — NIGHT

Heavy acid rain sheets off corrugated steel. KIRA (32), an
augmented detective in a reinforced trench coat, stands under
flickering noodle-bar signs. Her left ocular implant clicks
and glows, reading residue on the wet pavement.

                    KIRA
          (quiet, a synthetic rasp)
     Whoever purged sector nine wasn't after
     credits. They took the genesis kernels.

SFX: a low sonic pulse rolls through the sewer grates.
CAMERA: slow 2.5D push-in on Kira's iris.
MUSIC: synth bassline ducks under dialogue.`;

const characterBible = {
  entity_id: "KIRA_VEXEN_01",
  archetype: "Augmented detective",
  face_latent_seed: 491820491,
  identity_tokens: ["pulid_face_matrix", "cybernetic_iris_left"],
  wardrobe: "Dark carbon-fibre trench coat, water-repellent seams",
  lighting: "High-contrast cyan rim light, magenta spill",
};

const layerViews = [
  {
    id: "depth",
    label: "Depth",
    model: "Depth Anything 3",
    src: "/assets/depth_map.jpg",
    text: "Depth is estimated directly from the illustration, giving each pixel a distance from camera. This is what lets a flat panel support a dolly or pan without 3D rigging.",
  },
  {
    id: "mask",
    label: "Character",
    model: "SAM 2",
    src: "/assets/character_mask.jpg",
    text: "The character is segmented onto a clean alpha layer, so edges stay sharp when the foreground moves faster than the background.",
  },
  {
    id: "plate",
    label: "Background plate",
    model: "LaMa",
    src: "/assets/inpainted_plate.jpg",
    text: "The area hidden behind the character is inpainted, so the camera can move sideways without revealing holes in the scene.",
  },
] as const;

const steps = [
  { id: "input", label: "Premise" },
  { id: "layers", label: "Layers" },
  { id: "final", label: "Final scene" },
] as const;

type StepId = (typeof steps)[number]["id"];
type LayerId = (typeof layerViews)[number]["id"];

const waveform = [
  10, 15, 25, 40, 65, 80, 50, 30, 20, 45, 90, 75, 60, 40, 85, 95, 70, 50, 35,
  60, 75, 90, 80, 45, 30, 20, 15, 35, 60, 80, 55, 30, 15, 45, 70, 90, 65, 40,
  25, 10, 20, 50, 80, 95, 60, 30, 15, 25, 60, 85, 70, 40, 20, 10,
];

export const InteractiveShowcase: React.FC = () => {
  const [step, setStep] = useState<StepId>("final");
  const [layerId, setLayerId] = useState<LayerId>("depth");
  const [isPlaying, setIsPlaying] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const layer = layerViews.find((l) => l.id === layerId)!;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section id="showcase" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          eyebrow="Showcase"
          title="From premise to finished scene."
          description="Follow one scene through the pipeline: the written premise and the character bible extracted from it, the layers recovered from each panel, and the composited result."
        />

        <div
          role="tablist"
          aria-label="Pipeline steps"
          className="mt-14 flex gap-8 border-b border-line"
        >
          {steps.map((s, idx) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={step === s.id}
              onClick={() => setStep(s.id)}
              className={`-mb-px flex items-baseline gap-2 border-b pb-4 text-[15px] transition-colors ${
                step === s.id
                  ? "border-accent text-fg"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              <span className="font-mono text-xs text-subtle">0{idx + 1}</span>
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {step === "input" && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="overflow-hidden rounded-xl border border-line bg-surface lg:col-span-7">
                <div className="flex items-center justify-between border-b border-line px-5 py-3 text-[13px] text-subtle">
                  <span>Premise</span>
                  <span>Screenplay format</span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-fg/85">
                  {rawScript}
                </pre>
              </div>
              <div className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface lg:col-span-5">
                <div className="flex items-center justify-between border-b border-line px-5 py-3 text-[13px] text-subtle">
                  <span>Extracted character bible</span>
                  <span className="font-mono">json</span>
                </div>
                <pre className="flex-1 overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-fg/85">
                  {JSON.stringify(characterBible, null, 2)}
                </pre>
                <p className="border-t border-line px-5 py-4 text-[13px] leading-relaxed text-muted">
                  The identity seed is carried into every subsequent panel in
                  which Kira appears.
                </p>
              </div>
            </div>
          )}

          {step === "layers" && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-surface ring-1 ring-line lg:col-span-8">
                <Image
                  src={layer.src}
                  alt={`${layer.label} layer`}
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-4">
                <div className="flex flex-col">
                  {layerViews.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setLayerId(l.id)}
                      aria-pressed={layerId === l.id}
                      className={`flex items-baseline justify-between border-t border-line py-4 text-left transition-colors last:border-b ${
                        layerId === l.id ? "text-fg" : "text-muted hover:text-fg"
                      }`}
                    >
                      <span className="text-[15px]">{l.label}</span>
                      <span className="text-[13px] text-subtle">{l.model}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-6 text-[14px] leading-relaxed text-muted">
                  {layer.text}
                </p>
              </div>
            </div>
          )}

          {step === "final" && (
            <div>
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setOffset({ x: 0, y: 0 })}
                className="relative aspect-video overflow-hidden rounded-xl bg-surface ring-1 ring-line"
              >
                <div
                  className="absolute inset-0 transition-transform duration-200 ease-out"
                  style={{
                    transform: `scale(1.06) translate(${offset.x * -20}px, ${offset.y * -20}px)`,
                  }}
                >
                  <Image
                    src="/assets/hero_motion_comic.jpg"
                    alt="Final composited motion-comic panel"
                    fill
                    sizes="(min-width: 1152px) 1088px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className="absolute left-[6%] top-[8%] max-w-[15rem] rounded-[1.25rem] bg-white px-4 py-3 text-black shadow-xl transition-transform duration-150 ease-out sm:max-w-xs"
                  style={{
                    transform: `translate(${offset.x * 30}px, ${offset.y * 30}px)`,
                  }}
                >
                  <p className="text-[12px] font-semibold uppercase leading-snug tracking-wide sm:text-[13px]">
                    Whoever wiped the sector nine archive left no residue. They
                    took the genesis kernels.
                  </p>
                  <span className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 bg-white" />
                </div>

                <div className="absolute inset-x-0 bottom-5 flex justify-center px-4">
                  <span className="rounded bg-black/70 px-3 py-1.5 text-[13px] text-white/90 backdrop-blur-sm">
                    Whoever wiped the sector nine archive left no residue…
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4 rounded-xl border border-line px-5 py-4 sm:flex-row sm:items-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause waveform" : "Play waveform"}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fg text-ink"
                >
                  {isPlaying ? (
                    <Pause className="h-3.5 w-3.5 fill-current" />
                  ) : (
                    <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                  )}
                </button>
                <div className="flex h-8 flex-1 items-center gap-[3px]">
                  {waveform.map((val, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        isPlaying ? "bg-fg/70" : "bg-fg/25"
                      }`}
                      style={{
                        height: isPlaying ? `${val}%` : `${Math.max(12, val * 0.4)}%`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex gap-5 text-[13px] text-muted">
                  <span>−23 LUFS</span>
                  <span>−1 dBTP</span>
                  <span>Score ducked under dialogue</span>
                </div>
              </div>
              <p className="mt-3 text-[13px] text-subtle">
                Move the cursor over the frame to see the parallax between the
                character and background planes.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
