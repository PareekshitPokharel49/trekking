import Container from "@/app/components/Container";
import { aboutIntro } from "@/app/data/site";

export default function AboutHero() {
  return (
    <section className="border-b border-stone-200 bg-white">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            {aboutIntro.eyebrow}
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-stone-900 md:text-6xl">
            <span className="block">{aboutIntro.titleLead}</span>
            <span className="block text-brand-700">{aboutIntro.titleEmphasis}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            {aboutIntro.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {aboutIntro.tags.map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700"
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
