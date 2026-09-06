import Container from "@/app/components/Container";
import { shareTestimonial } from "@/app/data/site";

export default function ShareTestimonial() {
  const t = shareTestimonial;

  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <Container>
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:grid-cols-[minmax(0,300px)_1fr] md:p-8">
          <div className="relative overflow-hidden rounded-2xl bg-stone-100">
            {t.image ? (
              <img
                src={t.image}
                alt={t.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-[240px] w-full flex-col items-center justify-center gap-2 text-stone-400">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-4.35-4.35a2 2 0 0 0-2.83 0L3 21" />
                </svg>
                <span className="text-xs font-medium">Contributor photo</span>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div
              className="flex gap-0.5 text-brand-600"
              aria-label="Rated 5 out of 5"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                </svg>
              ))}
            </div>

            <blockquote className="mt-4 text-lg font-medium leading-relaxed text-stone-800 md:text-xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-4">
              <p className="font-bold text-stone-900">{t.name}</p>
              <p className="text-sm text-stone-600">{t.role}</p>
              <p className="text-sm text-stone-500">{t.location}</p>
            </div>

            <dl className="mt-6 flex flex-wrap gap-3">
              {t.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-brand-50 px-4 py-3">
                  <dt className="text-lg font-bold text-brand-700">
                    {stat.value}
                  </dt>
                  <dd className="text-xs text-stone-600">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
