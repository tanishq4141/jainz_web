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
    <>
      <Navbar onRequestAccess={() => setIsAccessModalOpen(true)} />

      <main>
        <HeroSection
          onRequestAccess={() => setIsAccessModalOpen(true)}
          onWatchReel={() => setIsReelModalOpen(true)}
        />
        <StatsStrip />
        <ArchitectureBento />
        <GpuComputeMatrix />
        <InteractiveShowcase />
        <EconomicsBenchmark />
        <EngineeringTeam />
      </main>

      <Footer />

      <RequestAccessModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
      />
      <ReelModal
        isOpen={isReelModalOpen}
        onClose={() => setIsReelModalOpen(false)}
        onRequestAccess={() => setIsAccessModalOpen(true)}
      />
    </>
  );
}
