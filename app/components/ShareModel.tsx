import Container from "@/app/components/Container";
import { shareStages } from "@/app/data/site";

export default function ShareModel() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 md:items-end md:gap-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              Equitable Ecosystem
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              The 50/50 Revenue &amp; Impact Model
            </h2>
          </div>
          <p className="text-base leading-relaxed text-stone-600">
            A modern ethical framework that ensures creators earn meaningful
            compensation while the mountain communities that host them receive
            permanent community dividends.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {shareStages.map((stage) => (
            <li
              key={stage.stage}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                {stage.stage.replace("Stage ", "")}
              </span>
              <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                {stage.stage}
              </span>
              <h3 className="mt-2 text-lg font-bold text-stone-900">
                {stage.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                {stage.description}
              </p>
              <p className="mt-5 border-t border-stone-100 pt-4 text-sm font-semibold text-stone-500">
                {stage.note}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
