"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import { navLinks, siteName, socialLinks } from "@/app/data/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-stone-900"
        >
          <Logo className="h-8 w-8" />
          {siteName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="https://pmdrf.nchl.com.np/"
            className="rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
          >
            Donate Now
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href={socialLinks.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLinks.facebook.label}
              className="text-stone-500 transition-colors hover:text-stone-900"
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              href={socialLinks.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLinks.instagram.label}
              className="text-stone-500 transition-colors hover:text-stone-900"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg text-stone-800 hover:bg-stone-100 md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-stone-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#relief"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-stone-900 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-stone-700"
            >
              Donate Now
            </Link>

            <div className="mt-2 flex items-center justify-center gap-6">
              <Link
                href={socialLinks.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLinks.facebook.label}
                className="text-stone-500 hover:text-stone-900"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link
                href={socialLinks.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLinks.instagram.label}
                className="text-stone-500 hover:text-stone-900"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
