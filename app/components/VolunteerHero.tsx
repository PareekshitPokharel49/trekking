import Container from "@/app/components/Container";

export default function VolunteerHero() {
  return (
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden">
      <img
        src="/NepalHome.jpg"
        alt="Volunteers working alongside villagers beneath the Himalayas"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />

      <Container className="py-24 text-center">
        <div className="mx-auto max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            Volunteer with us
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Be the change: join our humanitarian missions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-200">
            Step beyond traditional travel. Immerse yourself in the heart of
            Nepal, offering your skills to build, teach, and heal communities
            nestled beneath the Himalayas.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Register interest
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
