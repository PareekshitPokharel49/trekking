import Container from "@/app/components/Container";
import { aboutIntro } from "@/app/data/site";

export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden">
      <img
        src="/NepaliCulture.jpg"
        alt="Nepali cultural life beneath the Himalayas"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/55 to-black/75" />

      <Container className="py-24">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {aboutIntro.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            <span className="block">{aboutIntro.titleLead}</span>
            <span className="block text-brand-200">{aboutIntro.titleEmphasis}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-200">
            {aboutIntro.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {aboutIntro.tags.map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
