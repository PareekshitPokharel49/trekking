import Container from "@/app/components/Container";
import { missionIntro } from "@/app/data/site";

export default function MissionHero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 text-white">
      {/* Drop a background image in later, e.g.:
      <img src="/mission/hero.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" /> */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />

      <Container className="py-24 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {missionIntro.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            <span className="block">{missionIntro.titleLead}</span>
            <span className="block text-stone-300">{missionIntro.titleEmphasis}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
            {missionIntro.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {missionIntro.tags.map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-stone-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
