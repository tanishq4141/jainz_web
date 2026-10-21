import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cineagent.ai"),
  title: "CineAgent — Generative cinema engine",
  description:
    "CineAgent turns a short story premise into a feature-length motion comic. A multi-agent pipeline for writing, illustration, voice and 2.5D compositing, running on NVIDIA GPU infrastructure.",
  keywords: [
    "CineAgent",
    "generative cinema",
    "motion comics",
    "AI animation",
    "2.5D parallax",
    "character consistency",
  ],
  authors: [{ name: "CineAgent Technologies, Inc." }],
  openGraph: {
    title: "CineAgent — Generative cinema engine",
    description:
      "Feature-length motion comics from a twenty-line premise, with consistent characters across every panel.",
    type: "website",
    locale: "en_US",
    siteName: "CineAgent",
  },
  twitter: {
    card: "summary_large_image",
    title: "CineAgent — Generative cinema engine",
    description:
      "Feature-length motion comics from a twenty-line premise, with consistent characters across every panel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} min-h-screen bg-ink font-sans text-fg antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
