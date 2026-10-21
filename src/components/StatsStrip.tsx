import React from "react";

const stats = [
  { value: "180", unit: "min", label: "Continuous runtime generated from a single premise" },
  { value: "2,160", unit: "panels", label: "Per feature, with locked character identity" },
  { value: "<20", unit: "ms", label: "Dialogue-to-frame alignment accuracy" },
  { value: "~5.5", unit: "hrs", label: "Wall-clock render on an 8-GPU node" },
];

export const StatsStrip: React.FC = () => (
  <section className="border-y border-line">
    <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
      {stats.map((stat, idx) => (
        <div
          key={stat.label}
          className={`py-10 pr-6 md:py-12 ${
            idx > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""
          } ${idx % 2 === 1 ? "border-l border-line pl-6 lg:pl-8" : ""} ${
            idx < 2 ? "border-b border-line lg:border-b-0" : ""
          }`}
        >
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-5xl tracking-[-0.02em] text-fg md:text-6xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted">{stat.unit}</span>
          </div>
          <p className="mt-3 max-w-[15rem] text-[13px] leading-relaxed text-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);
