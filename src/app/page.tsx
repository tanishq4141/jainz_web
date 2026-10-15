"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { ArchitectureBento } from "@/components/ArchitectureBento";
import { GpuComputeMatrix } from "@/components/GpuComputeMatrix";
import { InteractiveShowcase } from "@/components/InteractiveShowcase";
import { EconomicsBenchmark } from "@/components/EconomicsBenchmark";
import { EngineeringTeam } from "@/components/EngineeringTeam";
import { Footer } from "@/components/Footer";
import { RequestAccessModal } from "@/components/RequestAccessModal";
import { ReelModal } from "@/components/ReelModal";

export default function Home() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isReelModalOpen, setIsReelModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#08090C] text-[#F3F4F6] selection:bg-[#38BDF8]/30 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onRequestAccess={() => setIsAccessModalOpen(true)} />

      {/* Hero Section with Interactive 2.5D Parallax Viewport */}
      <HeroSection
        onRequestAccess={() => setIsAccessModalOpen(true)}
        onWatchReel={() => setIsReelModalOpen(true)}
      />

      {/* High-Impact GPU & Continuous Generation Stats Strip */}
      <StatsStrip />

      {/* The 4-Stage Autonomous Engine Bento Grid */}
      <ArchitectureBento />

      {/* GPU Compute & Acceleration Matrix for NVIDIA Inception */}
      <GpuComputeMatrix />

      {/* Interactive 3-Step Multi-Modal CV Showcase */}
      <InteractiveShowcase />

      {/* Production Unit Economics & Studio ROI Calculator */}
      <EconomicsBenchmark />

      {/* Verified Engineering Leadership & Scientific Advisory Board */}
      <EngineeringTeam />

      {/* Corporate Compliance & Transparency Footer */}
      <Footer />

      {/* Studio / Enterprise Request Access Modal */}
      <RequestAccessModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
      />

      {/* 4K Cinematic Master Reel Modal */}
      <ReelModal
        isOpen={isReelModalOpen}
        onClose={() => setIsReelModalOpen(false)}
      />
    </main>
  );
}
