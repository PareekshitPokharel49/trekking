import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import { operatingPillars } from "@/app/data/site";

export default function OperatingPillars() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Operating Pillars"
          title="How We Work Differently"
          description="Replacing bureaucratic delays with transparent solidarity, ground authority, and direct community dialogue."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {operatingPillars.map((pillar) => (
            <article
              key={pillar.index}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                {pillar.image ? (
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-stone-400">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-4.35-4.35a2 2 0 0 0-2.83 0L3 21" />
                    </svg>
                    <span className="text-xs font-medium">Image coming soon</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                  Pillar {pillar.index}
                </span>
                <h3 className="mt-3 text-lg font-bold text-stone-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {pillar.description}
                </p>
                <p className="mt-5 border-t border-stone-100 pt-4 text-sm font-semibold text-stone-500">
                  {pillar.stat}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
