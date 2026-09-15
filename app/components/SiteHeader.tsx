"use client";

import { useId, useState } from "react";
import Link from "next/link";
import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import { navLinks, siteName, socialLinks } from "@/app/data/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.5 12.5h-2.1V19h-2.7v-6.5H9.2v-2.3h1.5V9.4c0-1.5.9-2.9 3.2-2.9.9 0 1.6.1 1.6.1v2.2h-1.1c-.9 0-1.1.4-1.1 1.1v1.5h2.3l-.1 2.1Z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  const gradientId = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="24" x2="24" y2="0">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="20%" stopColor="#FA7E1E" />
          <stop offset="45%" stopColor="#D62976" />
          <stop offset="70%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill={`url(#${gradientId})`} />
      <rect x="6" y="6" width="12" height="12" rx="3.5" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="16.1" cy="7.9" r="0.9" fill="#fff" />
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

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="https://pmdrf.nchl.com.np/"
            className="rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
          >
            Donate Now
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href={socialLinks.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLinks.facebook.label}
              className="transition-opacity hover:opacity-80"
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              href={socialLinks.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLinks.instagram.label}
              className="transition-opacity hover:opacity-80"
            >
              <InstagramIcon className="h-6 w-6" />
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
                className="transition-opacity hover:opacity-80"
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link
                href={socialLinks.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLinks.instagram.label}
                className="transition-opacity hover:opacity-80"
              >
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
