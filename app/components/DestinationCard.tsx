import type { Destination } from "@/app/data/site";

export default function DestinationCard({
  tag,
  title,
  description,
  image,
}: Destination) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/70">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-stone-800 shadow-sm">
          {tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-stone-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
          {description}
        </p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all hover:gap-2.5"
        >
          View itinerary <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
