"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";

const stages = [
  {
    title: "Narrative engine",
    method: "Hierarchical outlining with persistent memory",
    description:
      "Expands a short premise into three acts and 54 scenes. A persistent character bible keeps names, motives and appearance stable for the full runtime, so the story does not drift in its third hour.",
    specs: [
      "Recursive act → sequence → scene expansion",
      "Vector-memory character bibles",
      "Scene beats and dialogue passes",
    ],
    language: "json",
    code: `{
  "act_decomposition": {
    "act_I":   { "scenes": 12, "pacing": "inciting_incident" },
    "act_II":  { "scenes": 26, "midpoint": "cipher_revealed" },
    "act_III": { "scenes": 16, "resolution": "sector_climax" }
  },
  "character_bible": "sha256:9b4a7d18c3ef",
  "identity_tokens": ["KIRA_01", "MARCUS_DETECTIVE"]
}`,
  },
  {
    title: "Identity-locked illustration",
    method: "FLUX.1 [dev] with PuLID spatial decoupling",
    description:
      "Identity attention is confined to each character's face region, so likeness holds across 2,160 sequential panels without colour bleeding into the rest of the frame.",
    specs: [
      "12B rectified-flow transformer",
      "Identity adapter separated from background",
      "Stable likeness across lighting and pose",
    ],
    language: "python",
    code: `def apply_pulid_cross_attn(latent, id_embeds, bbox_mask):
    # Restrict identity injection to the face bounding box
    face = torch.matmul(latent * bbox_mask, id_embeds.transpose(-1, -2))
    bg = standard_self_attn(latent * (1 - bbox_mask))
    return torch.lerp(bg, face, weight=0.88)`,
  },
  {
    title: "Voice and sound",
    method: "WhisperX forced alignment, EBU R128 mastering",
    description:
      "Dialogue is aligned to the frame at the phoneme level, then the score is ducked under speech and the mix is mastered to broadcast loudness automatically.",
    specs: [
      "Frame-accurate word timing at 60 fps",
      "Automatic side-chain ducking under dialogue",
      "−23 LUFS integrated, true-peak limited",
    ],
    language: "python",
    code: `aligner = whisperx.load_align_model(language_code="en", device="cuda:0")
aligned = whisperx.align(
    transcript=script_dialogue,
    vad_segments=silero_vad_output,
    sample_rate=48_000,
)
# Word boundaries within one frame (±16 ms at 60 fps)`,
  },
  {
    title: "2.5D compositing",
    method: "Depth Anything 3, SAM 2, LaMa, Remotion",
    description:
      "Each panel is split into depth planes: the character is segmented, the background behind them is inpainted, and the camera moves through the layers with real parallax.",
    specs: [
      "Metric depth from a single illustration",
      "Zero-shot character segmentation",
      "Programmatic 4K camera moves",
    ],
    language: "tsx",
    code: `export const ParallaxStage = ({ foreground, background }) => {
  const frame = useCurrentFrame();
  const pan = interpolate(frame, [0, 90], [0, 42]);
  const push = interpolate(frame, [0, 90], [1.0, 1.15]);

  return (
    <div style={{ transform: \`scale(\${push})\` }}>
      <Layer depth={0.2} translateX={pan * 0.3} src={background} />
      <Layer depth={0.8} translateX={pan * 1.2} src={foreground} />
    </div>
  );
};`,
  },
];

export const ArchitectureBento: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const stage = stages[selected];

  return (
    <section id="pipeline" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          eyebrow="Pipeline"
          title="Four stages, one continuous pipeline."
          description="Story, image, sound and camera are handled by specialised agents that share state, so a change to the script carries through to every frame that depends on it."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <ol className="lg:col-span-5">
            {stages.map((s, idx) => {
              const isActive = idx === selected;
              return (
                <li key={s.title} className="border-t border-line last:border-b">
                  <button
                    onClick={() => setSelected(idx)}
                    aria-pressed={isActive}
                    className="group flex w-full items-baseline gap-5 py-6 text-left"
                  >
                    <span
                      className={`font-mono text-[13px] ${
                        isActive ? "text-accent" : "text-subtle"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block text-xl tracking-[-0.01em] transition-colors ${
                          isActive ? "text-fg" : "text-muted group-hover:text-fg"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="mt-1 block text-[13px] text-subtle">
                        {s.method}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
              <p className="text-[15px] leading-relaxed text-fg/90">
                {stage.description}
              </p>
              <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {stage.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex gap-2.5 text-[13px] leading-relaxed text-muted"
                  >
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-lg border border-line bg-ink">
                <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-xs text-subtle">
                  <span>Stage 0{selected + 1}</span>
                  <span className="font-mono">{stage.language}</span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-fg/80">
                  <code>{stage.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
