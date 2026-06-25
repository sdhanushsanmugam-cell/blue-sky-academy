import { createFileRoute } from "@tanstack/react-router";
import { Users, BookOpen } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { teachers } from "@/lib/site-data";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Our Teachers — LumenEd" },
      { name: "description", content: "Meet the practitioners and academics teaching at LumenEd." },
      { property: "og:title", content: "Our Teachers — LumenEd" },
      { property: "og:description", content: "Meet the practitioners and academics teaching at LumenEd." },
    ],
  }),
  component: TeachersPage,
});

function TeachersPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Meet our teachers</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Senior practitioners who care about your growth. Every instructor at LumenEd has
            shipped real work in their field — and loves teaching it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {teachers.map((t) => (
            <article key={t.slug} className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-card)]">
              <div
                className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl text-xl font-bold text-white"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-xl font-semibold">{t.name}</h2>
                <p className="text-sm font-medium text-primary">{t.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.bio}</p>
                <div className="mt-4 flex gap-5 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {t.courses} courses</span>
                  <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {t.students.toLocaleString()} students</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
