import Container from "@/app/components/Container";
import { missionCta } from "@/app/data/site";

export default function MissionCta() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white md:px-12 md:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                {missionCta.eyebrow}
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                {missionCta.title}
              </h2>
              <p className="mt-3 leading-relaxed text-stone-300">
                {missionCta.description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={missionCta.primaryCta.href}
                className="rounded-full bg-amber-400 px-6 py-3 text-center font-semibold text-slate-900 transition-colors hover:bg-amber-300"
              >
                {missionCta.primaryCta.label}
              </a>
              <a
                href={missionCta.secondaryCta.href}
                className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10"
              >
                {missionCta.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
