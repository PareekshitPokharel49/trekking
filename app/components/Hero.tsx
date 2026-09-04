import Container from "@/app/components/Container";
import { heroStats } from "@/app/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden"
    >
      <img
        src="/NepalHome.jpg"
        alt="Himalayan mountain range at sunrise"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />

      <Container className="py-24">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Trips running • Relief fund open
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Where the sky touches the earth
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-200">
            Experience the breathtaking landscapes and vibrant culture of the
            Himalayas while making a lasting impact on local communities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#destinations"
              className="rounded-full bg-white px-6 py-3 text-center font-semibold text-stone-900 transition-colors hover:bg-stone-100"
            >
              Explore destinations
            </a>
            <a
              href="#relief"
              className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10"
            >
              Support the cause
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold">{stat.value}</dt>
                <dd className="mt-1 text-xs text-stone-300">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
