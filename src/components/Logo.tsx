import React from "react";

// The mark is an open ring (the "C", and a lens barrel) around a solid
// pupil: a camera that sees, or an eye behind a lens. The opening on the
// right reads as the direction of play.
export const LogoMark: React.FC<{ className?: string }> = ({
  className = "h-7 w-7",
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M24.13 7.87 A11.5 11.5 0 1 0 24.13 24.13"
      stroke="currentColor"
      strokeWidth="3.6"
      strokeLinecap="round"
    />
    <circle cx="16" cy="16" r="4.4" fill="var(--color-accent)" />
  </svg>
);

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={`inline-flex items-center gap-2.5 text-fg ${className}`}>
    <LogoMark className="h-7 w-7" />
    <span className="text-[17px] font-semibold tracking-[-0.02em]">
      CineAgent
    </span>
  </span>
);
