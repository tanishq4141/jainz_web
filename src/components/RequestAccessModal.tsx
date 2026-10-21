"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT_EMAIL = "contact@cineagent.ai";

const inputClass =
  "w-full rounded-lg border border-line bg-ink px-3.5 py-2.5 text-[14px] text-fg placeholder:text-subtle focus:border-muted focus:outline-none";

export const RequestAccessModal: React.FC<RequestAccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    studio: "",
    email: "",
    role: "Producer / Studio head",
    format: "Feature (90–180 min)",
    logline: "",
  });

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const update =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [field]: e.target.value });

  // There is no backend yet, so the request is handed to the visitor's
  // email client, addressed to the company inbox.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Studio access request: ${formData.studio}`;
    const body = [
      `Name: ${formData.name}`,
      `Studio: ${formData.studio}`,
      `Email: ${formData.email}`,
      `Role: ${formData.role}`,
      `Format: ${formData.format}`,
      ...(formData.logline ? ["", `Project: ${formData.logline}`] : []),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="access-title"
    >
      <div onClick={handleClose} className="fixed inset-0 bg-black/75 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted transition-colors hover:bg-raised hover:text-fg"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <>
            <h3 id="access-title" className="font-display text-3xl tracking-[-0.01em] text-fg">
              Request studio access
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              We are onboarding a small number of studios. Tell us about your
              project and a founder will reply within two business days.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[13px] text-muted">Name</span>
                  <input required value={formData.name} onChange={update("name")} className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] text-muted">Studio or company</span>
                  <input required value={formData.studio} onChange={update("studio")} className={inputClass} />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-[13px] text-muted">Work email</span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={update("email")}
                  placeholder="you@studio.com"
                  className={inputClass}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[13px] text-muted">Role</span>
                  <select value={formData.role} onChange={update("role")} className={inputClass}>
                    <option>Producer / Studio head</option>
                    <option>Showrunner / Director</option>
                    <option>Pipeline / VFX lead</option>
                    <option>Investor</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] text-muted">Format</span>
                  <select value={formData.format} onChange={update("format")} className={inputClass}>
                    <option>Feature (90–180 min)</option>
                    <option>Episodic series</option>
                    <option>Graphic novel adaptation</option>
                    <option>Short / proof of concept</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-[13px] text-muted">
                  Project logline <span className="text-subtle">(optional)</span>
                </span>
                <textarea
                  rows={3}
                  value={formData.logline}
                  onChange={update("logline")}
                  className={inputClass}
                />
              </label>

              <button
                type="submit"
                className="mt-2 h-11 w-full rounded-full bg-fg text-[15px] font-medium text-ink transition-colors hover:bg-white"
              >
                Send request
              </button>
            </form>
          </>
        ) : (
          <div className="py-4">
            <h3 id="access-title" className="font-display text-3xl tracking-[-0.01em] text-fg">
              Thank you.
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">
              Your email app should have opened with the request ready to send.
              If it didn&apos;t, write to us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-fg underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <button
              onClick={handleClose}
              className="mt-8 h-11 rounded-full border border-line px-6 text-[14px] text-fg transition-colors hover:bg-raised"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
