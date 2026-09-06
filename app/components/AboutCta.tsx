import Container from "@/app/components/Container";
import { aboutCta } from "@/app/data/site";

export default function AboutCta() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand-700 px-6 py-12 text-white md:px-12 md:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
                {aboutCta.eyebrow}
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                {aboutCta.title}
              </h2>
              <p className="mt-3 leading-relaxed text-brand-50">
                {aboutCta.description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={aboutCta.primaryCta.href}
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                {aboutCta.primaryCta.label}
              </a>
              <a
                href={aboutCta.secondaryCta.href}
                className="rounded-full border border-white/40 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10"
              >
                {aboutCta.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
