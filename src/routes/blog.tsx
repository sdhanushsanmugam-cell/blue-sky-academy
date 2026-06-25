import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — LumenEd" },
      { name: "description", content: "Study tips, career advice and product updates from the LumenEd team." },
      { property: "og:title", content: "LumenEd Blog" },
      { property: "og:description", content: "Study tips, career advice and updates from the LumenEd team." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <SiteLayout>
      <section className="border-b border-border" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Blog</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ideas worth learning.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Practical writing on studying, careers, design and the future of education.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Featured */}
        <article className="grid gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div
            className="aspect-[4/3] rounded-2xl"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div>
            <span className="inline-flex rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary">
              {featured.category}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight">{featured.title}</h2>
            <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime} read</span>
              <span>· by {featured.author}</span>
            </div>
          </div>
        </article>

        {/* Rest */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {rest.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-card)]">
              <div
                className="aspect-[16/9]"
                style={{ background: `linear-gradient(135deg, oklch(0.55 0.18 ${230 + p.title.length % 30}), oklch(0.70 0.12 ${220 + p.title.length % 40}))` }}
              />
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-auto flex items-center gap-3 pt-4 text-xs text-muted-foreground">
                  <span>{p.date}</span><span>·</span><span>{p.readTime} read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
