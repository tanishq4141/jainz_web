"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

interface NavbarProps {
  onRequestAccess: () => void;
}

const navLinks = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Technology", href: "#technology" },
  { label: "Showcase", href: "#showcase" },
  { label: "Economics", href: "#economics" },
  { label: "Company", href: "#company" },
];

export const Navbar: React.FC<NavbarProps> = ({ onRequestAccess }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-line bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-ink"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" aria-label="CineAgent home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={onRequestAccess}
            className="inline-flex h-9 items-center rounded-full bg-fg px-4 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            Request access
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="-mr-2 p-2 text-muted hover:text-fg md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-line py-3.5 text-[15px] text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestAccess();
            }}
            className="mt-6 h-11 w-full rounded-full bg-fg text-sm font-medium text-ink"
          >
            Request access
          </button>
        </div>
      )}
    </header>
  );
};
