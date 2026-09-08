import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CineAgent AI | Autonomous Generative Cinema & Motion Comics",
  description:
    "Autonomous generative cinema system transforming 20-line concepts into 3-hour feature-length motion comics. Distributed multi-agent engine powered by NVIDIA GPU clusters, FLUX.1 identity locks, and 2.5D parallax compositing.",
  keywords: [
    "CineAgent",
    "Generative Cinema",
    "Autonomous Motion Comics",
    "NVIDIA Inception",
    "FLUX.1",
    "PuLID",
    "WhisperX",
    "CUDA Acceleration",
    "Depth Anything 3",
    "SAM 2",
    "Remotion Compositing",
  ],
  authors: [{ name: "CineAgent Technologies, Inc." }],
  openGraph: {
    title: "CineAgent AI | Autonomous Generative Cinema System",
    description:
      "Transform 20-line concepts into 3-hour motion comics with zero-shot facial consistency and sub-millisecond audio alignment on distributed NVIDIA GPUs.",
    type: "website",
    locale: "en_US",
    siteName: "CineAgent AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "CineAgent AI — Deep-Tech Generative Cinema",
    description:
      "Autonomous 3-hour motion comics generated via distributed NVIDIA RTX 4090/A100 clusters.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#08090C] text-[#F3F4F6] antialiased selection:bg-[#38BDF8]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
