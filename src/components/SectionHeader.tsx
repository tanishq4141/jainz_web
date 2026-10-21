import React from "react";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  description,
  children,
}) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
    <div className="md:col-span-7">
      <div className="flex items-center gap-3 text-[13px] text-muted">
        <span className="font-mono text-accent">{index}</span>
        <span className="h-px w-6 bg-line" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.01em] text-fg sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
    </div>
    {(description || children) && (
      <div className="md:col-span-5">
        {description && (
          <p className="text-[15px] leading-relaxed text-muted">{description}</p>
        )}
        {children}
      </div>
    )}
  </div>
);
