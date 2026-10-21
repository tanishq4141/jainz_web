"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";

const comparison = [
  { label: "Budget, 3-hour feature", studio: "$1.8M – $3.5M", cineagent: "$120 – $195 in GPU compute" },
  { label: "Schedule", studio: "12 – 18 months", cineagent: "~5.5 hours wall-clock" },
  { label: "Crew", studio: "40+ illustrators and animators", cineagent: "One showrunner directing the pipeline" },
  { label: "Revisions", studio: "Weeks of redrawing per change", cineagent: "Regenerate affected scenes in minutes" },
];

// Industry benchmark for traditional motion comics: ~$12,500 and ~2.3 days of
// production per finished minute. CineAgent: ~$0.85 of GPU compute and ~1.83
// minutes of wall-clock render per finished minute.
const STUDIO_COST_PER_MIN = 12500;
const STUDIO_DAYS_PER_MIN = 2.3;
const COMPUTE_COST_PER_MIN = 0.85;
const RENDER_MIN_PER_MIN = 1.83;

const formatMoney = (value: number) =>
  value >= 1_000_000
    ? `$${(value / 1_000_000).toFixed(2)}M`
    : `$${Math.round(value).toLocaleString()}`;

export const EconomicsBenchmark: React.FC = () => {
  const [runtime, setRuntime] = useState(180);
  const [episodes, setEpisodes] = useState(1);

  const minutes = runtime * episodes;
  const studioCost = minutes * STUDIO_COST_PER_MIN;
  const studioMonths = Math.max(3, Math.round((minutes * STUDIO_DAYS_PER_MIN) / 30));
  const computeCost = minutes * COMPUTE_COST_PER_MIN;
  const renderHours = (minutes * RENDER_MIN_PER_MIN) / 60;

  return (
    <section id="economics" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="Economics"
          title="A different cost structure for animation."
          description="Traditional motion comics are priced by the drawing. CineAgent is priced by GPU time, which changes what a studio can afford to try before committing to a release."
        />

        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-line text-[13px] text-subtle">
                <th scope="col" className="w-1/4 pb-4 pr-6 font-normal" />
                <th scope="col" className="pb-4 pr-6 font-normal">Traditional studio</th>
                <th scope="col" className="pb-4 font-normal">
                  <span className="text-accent">CineAgent</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-line">
                  <th scope="row" className="py-5 pr-6 text-[13px] font-normal text-muted">
                    {row.label}
                  </th>
                  <td className="py-5 pr-6 text-[15px] text-muted">{row.studio}</td>
                  <td className="py-5 text-[15px] text-fg">{row.cineagent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 rounded-xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-xl tracking-[-0.01em] text-fg">Estimate a slate</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Adjust runtime and episode count to compare a traditional
              production budget with CineAgent compute.
            </p>

            <div className="mt-8 space-y-8">
              <label className="block">
                <span className="flex justify-between text-[13px]">
                  <span className="text-muted">Runtime per episode</span>
                  <span className="tabular-nums text-fg">{runtime} min</span>
                </span>
                <input
                  type="range"
                  min={15}
                  max={180}
                  step={15}
                  value={runtime}
                  onChange={(e) => setRuntime(Number(e.target.value))}
                  className="mt-3 w-full accent-accent"
                />
              </label>
              <label className="block">
                <span className="flex justify-between text-[13px]">
                  <span className="text-muted">Episodes</span>
                  <span className="tabular-nums text-fg">{episodes}</span>
                </span>
                <input
                  type="range"
                  min={1}
                  max={12}
                  step={1}
                  value={episodes}
                  onChange={(e) => setEpisodes(Number(e.target.value))}
                  className="mt-3 w-full accent-accent"
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:col-span-7">
            <div className="bg-surface p-6">
              <div className="text-[13px] text-muted">Traditional studio</div>
              <div className="mt-3 font-display text-4xl tabular-nums tracking-[-0.02em] text-muted sm:text-5xl">
                {formatMoney(studioCost)}
              </div>
              <div className="mt-2 text-[13px] text-subtle">~{studioMonths} months</div>
            </div>
            <div className="bg-surface p-6">
              <div className="text-[13px] text-muted">CineAgent compute</div>
              <div className="mt-3 font-display text-4xl tabular-nums tracking-[-0.02em] text-fg sm:text-5xl">
                {formatMoney(computeCost)}
              </div>
              <div className="mt-2 text-[13px] text-subtle">
                ~{renderHours.toFixed(1)} hours
              </div>
            </div>
            <div className="col-span-2 flex items-baseline justify-between bg-surface p-6">
              <span className="text-[13px] text-muted">Difference</span>
              <span className="text-lg tabular-nums text-accent">
                {formatMoney(studioCost - computeCost)}
              </span>
            </div>
          </div>

          <p className="text-[12px] leading-relaxed text-subtle lg:col-span-12">
            Studio figures use an industry benchmark of about $12,500 per
            finished minute. CineAgent figures cover GPU compute only and
            exclude staff, licensing and distribution.
          </p>
        </div>
      </div>
    </section>
  );
};
