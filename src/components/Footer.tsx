import React from "react";
import { Logo } from "@/components/Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Pipeline", href: "#pipeline" },
      { label: "Technology", href: "#technology" },
      { label: "Showcase", href: "#showcase" },
      { label: "Economics", href: "#economics" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Team", href: "#company" },
      { label: "Contact", href: "mailto:contact@cineagent.ai" },
      { label: "Founders", href: "mailto:founders@cineagent.ai" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export const Footer: React.FC = () => (
  <footer className="border-t border-line">
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted">
            Generative cinema engine for long-form motion comics.
          </p>
          <address className="mt-6 text-[13px] not-italic leading-relaxed text-subtle">
            CineAgent Technologies, Inc.
            <br />
            548 Market St, Suite 74812
            <br />
            San Francisco, CA 94104
          </address>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h4 className="text-[13px] text-subtle">{col.title}</h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-2 border-t border-line pt-8 text-[13px] text-subtle sm:flex-row sm:justify-between">
        <span>© 2026 CineAgent Technologies, Inc. All rights reserved.</span>
        <span>A Delaware corporation</span>
      </div>
    </div>
  </footer>
);
