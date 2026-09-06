import Container from "@/app/components/Container";
import { shareHeroStats } from "@/app/data/site";

export default function ShareHero() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Creator Revenue &amp; Community Solidarity
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-stone-900 md:text-5xl">
            Share Your Nepal Experience.{" "}
            <span className="text-brand-700">Turn stories</span> into sustainable
            impact.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
            Submit your high-quality photos or videos captured across Nepal. We
            license and feature your visuals to promote ethical tourism and
            cultural preservation. Every dollar generated is equitably split
            between you and frontline mountain welfare initiatives.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl">
          <img
            src="/NepalHome.jpg"
            alt="Creators filming among Himalayan peaks and prayer flags"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/65 to-stone-950/45" />

          <div className="relative grid gap-8 p-8 sm:grid-cols-3 md:p-10">
            {shareHeroStats.map((stat) => (
              <div key={stat.kicker}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-300">
                  {stat.kicker}
                </span>
                <div className="mt-2 text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
