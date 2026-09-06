"use client";

import { useCallback, useEffect, useState } from "react";
import Container from "@/app/components/Container";
import { heroSlides, heroStats } from "@/app/data/site";

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const count = heroSlides.length;
  const [active, setActive] = useState(0);

  const goTo = useCallback(
    (i: number) => setActive((i + count) % count),
    [count]
  );

  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => setActive((i) => (i + 1) % count),
      AUTOPLAY_MS
    );
    return () => window.clearInterval(id);
  }, [count]);

  const slide = heroSlides[active];
  const stats = slide.stats ?? heroStats;

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden"
    >
      {/* Cross-fading background images */}
      {heroSlides.map((s, i) => (
        <div
          key={s.title}
          aria-hidden={i !== active}
          className={`absolute inset-0 -z-10 transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={s.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        </div>
      ))}

      <Container className="py-24">
        {/* key forces a re-mount so the copy fades in with each slide */}
        <div key={active} className="max-w-2xl text-white [animation:heroIn_.6s_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {slide.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            {slide.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-200">
            {slide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={slide.primaryCta.href}
              className="rounded-full bg-white px-6 py-3 text-center font-semibold text-stone-900 transition-colors hover:bg-stone-100"
            >
              {slide.primaryCta.label}
            </a>
            <a
              href={slide.secondaryCta.href}
              className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10"
            >
              {slide.secondaryCta.label}
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold">{stat.value}</dt>
                <dd className="mt-1 text-xs text-stone-300">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* Prev / next */}
      <button
        type="button"
        onClick={() => goTo(active - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2 text-white backdrop-blur transition-colors hover:bg-black/40 md:block"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2 text-white backdrop-blur transition-colors hover:bg-black/40 md:block"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
