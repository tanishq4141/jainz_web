import { ImageResponse } from "next/og";

export const alt = "CineAgent — Generative cinema engine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0B0B0C",
          color: "#EDEBE6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
            <path
              d="M24.13 7.87 A11.5 11.5 0 1 0 24.13 24.13"
              stroke="#EDEBE6"
              strokeWidth="3.6"
              strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="4.4" fill="#E9A23B" />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>
            CineAgent
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -2, maxWidth: 950 }}>
            Feature-length motion comics, from a twenty-line premise.
          </div>
          <div style={{ fontSize: 28, color: "#8E8C87" }}>
            Generative cinema engine · cineagent.ai
          </div>
        </div>
      </div>
    ),
    size,
  );
}
