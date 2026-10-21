import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  // Optional: path under /public, e.g. "/team/jane.jpg". Initials are shown otherwise.
  photo?: string;
  links: { label: string; href: string }[];
}

// Replace with the real founding team. Reviewers and investors check these
// profiles, so every name, photo and link here should belong to a real person.
const team: TeamMember[] = [
  {
    name: "Founder Name",
    role: "Founder & Chief Executive",
    bio: "Two or three sentences on relevant background: what you built before, where, and why you are the person to build this.",
    links: [
      { label: "LinkedIn", href: "" },
      { label: "GitHub", href: "" },
    ],
  },
  {
    name: "Co-founder Name",
    role: "Co-founder & Head of AI Systems",
    bio: "Two or three sentences on technical background: distributed training, inference optimisation, generative vision, and any published work.",
    links: [
      { label: "LinkedIn", href: "" },
      { label: "GitHub", href: "" },
    ],
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const EngineeringTeam: React.FC = () => (
  <section id="company" className="border-t border-line py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        index="05"
        eyebrow="Company"
        title="The team."
        description="CineAgent is built by engineers from film production and machine-learning systems, working on the problem of long-form visual storytelling."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
        {team.map((member) => {
          const links = member.links.filter((l) => l.href);
          return (
            <article key={member.name} className="flex flex-col bg-ink p-6 sm:p-8">
              <div className="flex items-center gap-4">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover grayscale"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-raised text-[15px] text-muted">
                    {initials(member.name)}
                  </div>
                )}
                <div>
                  <h3 className="text-lg tracking-[-0.01em] text-fg">{member.name}</h3>
                  <p className="text-[13px] text-muted">{member.role}</p>
                </div>
              </div>
              <p className="mt-6 flex-1 text-[14px] leading-relaxed text-muted">
                {member.bio}
              </p>
              {links.length > 0 && (
                <div className="mt-6 flex gap-5">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] text-fg/85 hover:text-fg"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
