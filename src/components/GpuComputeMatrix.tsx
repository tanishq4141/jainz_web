import React from "react";
import { SectionHeader } from "@/components/SectionHeader";

const workloads = [
  {
    stage: "Illustration",
    model: "FLUX.1 [dev] 12B rectified-flow transformer",
    hardware: "RTX 4090 (24 GB) / A100 (80 GB SXM4)",
    optimization: "Headless ComfyUI workers, BF16, FlashAttention-2, torch.compile",
    status: "Production",
  },
  {
    stage: "Depth and segmentation",
    model: "Depth Anything 3, SAM 2",
    hardware: "Tensor Core GPUs, FP16",
    optimization: "Half-precision kernels, Triton-optimised attention, zero-copy buffers",
    status: "Production",
  },
  {
    stage: "Speech alignment",
    model: "WhisperX (Silero VAD + Wav2Vec 2.0 CTC)",
    hardware: "L40S / RTX 4090",
    optimization: "CTC decoding parallelised across CUDA streams",
    status: "Production",
  },
  {
    stage: "Inference optimisation",
    model: "TensorRT-LLM, TensorRT diffusion engines",
    hardware: "Hopper / Ada Lovelace",
    optimization: "FP8 / INT8 post-training quantisation, kernel auto-tuning",
    status: "Roadmap",
  },
];

export const GpuComputeMatrix: React.FC = () => (
  <section id="technology" className="border-t border-line py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        index="02"
        eyebrow="Technology"
        title="Built for NVIDIA GPU infrastructure."
        description="Every stage runs as a GPU worker behind a job queue, so a feature-length project is split across nodes and rendered in parallel rather than frame by frame."
      />

      <div className="mt-16 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-[13px] text-subtle">
              <th scope="col" className="pb-4 pr-6 font-normal">Stage</th>
              <th scope="col" className="pb-4 pr-6 font-normal">Model</th>
              <th scope="col" className="pb-4 pr-6 font-normal">Hardware</th>
              <th scope="col" className="pb-4 pr-6 font-normal">Acceleration</th>
              <th scope="col" className="pb-4 text-right font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {workloads.map((w) => (
              <tr key={w.stage} className="border-b border-line align-top">
                <td className="py-6 pr-6 font-medium text-fg">{w.stage}</td>
                <td className="py-6 pr-6 text-fg/85">{w.model}</td>
                <td className="py-6 pr-6 text-muted">{w.hardware}</td>
                <td className="max-w-xs py-6 pr-6 leading-relaxed text-muted">
                  {w.optimization}
                </td>
                <td className="py-6 text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] ${
                      w.status === "Production" ? "text-fg/85" : "text-muted"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        w.status === "Production" ? "bg-accent" : "border border-subtle"
                      }`}
                    />
                    {w.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
