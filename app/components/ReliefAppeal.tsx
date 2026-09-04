import Container from "@/app/components/Container";
import { relief } from "@/app/data/site";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export default function ReliefAppeal() {
  const pct = Math.min(
    100,
    Math.round((relief.raisedAmount / relief.goalAmount) * 100)
  );

  return (
    <section id="relief" className="scroll-mt-16 bg-stone-50 py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Urgent Appeal
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Nepal Needs You
          </h2>

          <p className="mt-4 leading-relaxed text-stone-600">
            Recent devastating floods have displaced thousands of families in the
            western regions. Your travel helps the economy, but immediate
            humanitarian relief is critical right now. Join us in rebuilding
            lives and restoring hope.
          </p>

          <div className="mt-8">
            <div className="flex justify-between text-sm font-medium text-stone-700">
              <span>{relief.goalLabel}</span>
              <span>{usd(relief.goalAmount)}</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-200">
              <div
                className="h-full rounded-full bg-brand-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-stone-500">
              {usd(relief.raisedAmount)} raised so far · {pct}% of goal
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://pmdrf.nchl.com.np/"
              className="rounded-full bg-stone-900 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-stone-700"
            >
              Donate to Relief Fund
            </a>
            <a
              href="#"
              className="rounded-full border border-stone-300 px-6 py-3 text-center font-semibold text-stone-900 transition-colors hover:bg-stone-100"
            >
              Read Impact Report
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {relief.images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`w-full rounded-2xl object-cover ${
                img.span ? "col-span-2 h-56" : "h-36"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
