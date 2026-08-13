"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/data/siteData";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-hdm-bg/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/assets/hdm-logo.png"
            alt="HDM logo"
            width={48}
            height={48}
            className="h-10 w-auto rounded-lg border border-white/15 bg-hdm-card/70 p-1"
          />
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-hdm-accent/40 bg-hdm-card text-sm font-black text-hdm-accent">
            HDM
          </span>
          <span className="text-base font-semibold tracking-[0.1em] text-hdm-text">Honey Do Man</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-hdm-muted transition hover:text-hdm-text">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#estimate"
          className="hidden rounded-full border border-hdm-accent/50 bg-hdm-accent px-5 py-3 text-xs font-extrabold tracking-[0.1em] text-hdm-bg transition hover:-translate-y-0.5 hover:shadow-glow md:inline-flex"
        >
          GET FREE ESTIMATE
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/20 p-2 text-hdm-text md:hidden"
          onClick={() => setOpen((state) => !state)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-hdm-secondary px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-hdm-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#estimate"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-hdm-accent px-4 py-3 text-center text-sm font-extrabold tracking-[0.08em] text-hdm-bg"
            >
              GET FREE ESTIMATE
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
