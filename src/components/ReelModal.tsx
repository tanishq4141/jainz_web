"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAccess: () => void;
}

// Set to a hosted video URL (e.g. Mux or Cloudflare Stream) once the reel is
// published; until then the modal shows an animated still from the scene.
const REEL_SRC: string | null = null;

export const ReelModal: React.FC<ReelModalProps> = ({
  isOpen,
  onClose,
  onRequestAccess,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="CineAgent reel"
    >
      <div onClick={onClose} className="fixed inset-0 bg-black/90 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-5xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-11 right-0 rounded-full p-1.5 text-muted transition-colors hover:text-fg"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative aspect-video overflow-hidden rounded-xl bg-black ring-1 ring-line">
          {REEL_SRC ? (
            <video src={REEL_SRC} controls autoPlay playsInline className="h-full w-full" />
          ) : (
            <>
              <div className="absolute inset-0 animate-push-in">
                <Image
                  src="/assets/hero_motion_comic.jpg"
                  alt="Scene 04, Neo-Shinjuku canal alley"
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                <span className="rounded bg-black/70 px-3 py-1.5 text-[13px] text-white/90 backdrop-blur-sm">
                  Whoever wiped the sector nine archive knew our cipher…
                </span>
              </div>
            </>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-muted">
            Scene 04 · <span className="text-fg/85">Neo-Shinjuku</span>
            {!REEL_SRC && " · Preview. The full reel is shared with studios on request."}
          </p>
          {!REEL_SRC && (
            <button
              onClick={() => {
                onClose();
                onRequestAccess();
              }}
              className="self-start rounded-full bg-fg px-5 py-2 text-[14px] font-medium text-ink transition-colors hover:bg-white sm:self-auto"
            >
              Request the full reel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
