import Container from "@/app/components/Container";
import { forumPosts } from "@/app/data/site";

export default function OpenForum() {
  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              Live Ground &amp; Diaspora Dialogue
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              The Open Forum in Action
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone-600">
            Real-time updates posted directly by community elders, regional trail
            guides, and overseas diaspora circles.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
            <span className="inline-flex flex-wrap items-center gap-2 text-sm font-semibold text-stone-900">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Recent Community Feed
              <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-500">
                Trishuli &amp; Solukhumbu Corridors
              </span>
            </span>
            <span className="text-xs text-stone-400">Updated 24m ago</span>
          </div>

          <ul className="divide-y divide-stone-100">
            {forumPosts.map((post) => (
              <li key={post.name} className="flex gap-4 py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                  {post.initials}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-semibold text-stone-900">
                      {post.name}
                    </span>
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                      {post.role}
                    </span>
                    <span className="text-xs text-stone-400">{post.time}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    {post.message}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 border-t border-stone-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-stone-500">
              Every message, resource request, and financial clearance is verified
              and recorded without middlemen.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand-700 transition-all hover:gap-2.5"
            >
              Enter Community Forum &amp; Logs <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
