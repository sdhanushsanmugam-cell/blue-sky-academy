import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Clock, BookOpen, Star, Search } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { courses } from "@/lib/site-data";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "All Courses — LumenEd" },
      { name: "description", content: "Browse our full catalog of expert-led online courses across engineering, design, data and business." },
      { property: "og:title", content: "All Courses — LumenEd" },
      { property: "og:description", content: "Browse our full catalog of expert-led online courses." },
    ],
  }),
  component: CoursesPage,
});

const categories = ["All", "Engineering", "Data & AI", "Design", "Business", "Humanities"] as const;

function CoursesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchCat = cat === "All" || c.category === cat;
      const matchQ =
        q.trim() === "" ||
        c.title.toLowerCase().includes(q.toLowerCase()) ||
        c.description.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <SiteLayout>
      <section className="border-b border-border" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">All courses</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {courses.length} courses across {categories.length - 1} disciplines, taught by industry practitioners.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-3 text-sm outline-none ring-ring/40 focus:ring-2"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition " +
                  (cat === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:text-foreground")
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">No courses match your search.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <article
                key={c.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[16/9]" style={{ background: c.color }}>
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-foreground">
                    {c.category}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    {c.level}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-lg font-semibold leading-snug group-hover:text-primary">
                    {c.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.description}</p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration}</span>
                    <span className="inline-flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {c.lessons} lessons</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3.5 w-3.5 fill-current text-amber-500" />
                      {c.rating} · {c.students.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-base font-semibold">${c.price}</span>
                      <Link
                        to="/auth"
                        search={{ mode: "signup" }}
                        className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
                      >
                        Enroll
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
