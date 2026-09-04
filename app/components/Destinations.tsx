import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import DestinationCard from "@/app/components/DestinationCard";
import { destinations } from "@/app/data/site";

export default function Destinations() {
  return (
    <section id="destinations" className="scroll-mt-16 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Discover"
          title="Discover the wonders"
          description="Journey through ancient cities, trek legendary trails, and immerse yourself in a culture rich with history and warmth."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {destinations.map((place) => (
            <DestinationCard key={place.title} {...place} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="rounded-full border border-stone-300 px-6 py-3 font-semibold text-stone-900 transition-colors hover:bg-stone-100"
          >
            View all destinations
          </a>
        </div>
      </Container>
    </section>
  );
}
