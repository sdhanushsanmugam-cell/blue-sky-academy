import { createFileRoute } from "@tanstack/react-router";
import { Target, Heart, Globe2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LumenEd — Our story & mission" },
      { name: "description", content: "We're on a mission to make great education accessible, modern and human." },
      { property: "og:title", content: "About LumenEd" },
      { property: "og:description", content: "Our story, our mission and the team behind LumenEd." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="border-b border-border" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">About us</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Education that respects your time and your potential.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            LumenEd started in 2021 with a simple idea: online learning should feel like a great
            classroom — focused, social and taught by people who do the work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, title: "Outcome-first", body: "We measure success by what you can build, not just what you watched." },
            { icon: Heart, title: "Human teachers", body: "Cohorts, office hours and feedback — never just a video library." },
            { icon: Globe2, title: "Globally accessible", body: "Available in 12 languages with scholarships in 40 countries." },
            { icon: Sparkles, title: "Modern craft", body: "Courses refreshed every season to match how teams actually work." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our story</h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                We were tired of online courses that felt like watching TV. So we built a school
                that combines the structure of a university, the pace of a bootcamp, and the
                flexibility of self-paced learning.
              </p>
              <p>
                Today, 50,000+ students from 80+ countries study with us — supported by 40
                full-time educators and a community that helps each other ship their first
                projects, land interviews and grow careers.
              </p>
              <p>
                We're a small, profitable team based in San Francisco and Lisbon, hiring teachers
                we'd want to learn from ourselves.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "50,000+", v: "Active students" },
              { k: "80+", v: "Countries" },
              { k: "120+", v: "Courses live" },
              { k: "92%", v: "Completion rate" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl font-bold text-primary">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
