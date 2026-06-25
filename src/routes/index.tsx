import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Users, Award, Sparkles, CheckCircle2, Star } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { courses, teachers } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LumenEd — Learn skills that move you forward" },
      { name: "description", content: "Modern online courses taught by industry experts. Join 50,000+ students at LumenEd." },
      { property: "og:title", content: "LumenEd — Learn skills that move you forward" },
      { property: "og:description", content: "Modern online courses taught by industry experts." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = courses.slice(0, 3);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Spring 2026 enrollment is open
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Learn skills that <span className="text-primary">move you forward</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Modern, project-based courses taught by industry leaders. Join 50,000+ students
              building real-world skills at their own pace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/courses">
                  Browse courses <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/auth" search={{ mode: "signup" }}>
                  Start free trial
                </Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {[
                { k: "50k+", v: "Students" },
                { k: "120+", v: "Courses" },
                { k: "4.9★", v: "Avg rating" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-2xl font-bold text-foreground">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-3xl"
              style={{ background: "var(--gradient-hero)" }}
            />
            <img
              src={heroImg}
              alt="Students collaborating in a classroom"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-background p-4 shadow-[var(--shadow-soft)] sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Accredited certificates</p>
                  <p className="text-xs text-muted-foreground">Recognized by 200+ employers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: BookOpen, title: "Project-based learning", body: "Every course ships you a portfolio piece, not just a certificate." },
            { icon: Users, title: "Live cohorts & mentors", body: "Weekly office hours and small-group critique with senior practitioners." },
            { icon: Award, title: "Career-ready outcomes", body: "Interview prep, portfolio reviews and a global hiring network." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-card)]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular courses</h2>
              <p className="mt-2 text-muted-foreground">Most-loved by our students this season.</p>
            </div>
            <Link to="/courses" className="hidden text-sm font-medium text-primary hover:underline sm:inline">
              See all →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Learn from the best</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Practitioners from leading companies and universities — bringing real-world craft into every lesson.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((t) => (
              <div key={t.slug} className="rounded-2xl border border-border bg-card p-6 text-center transition hover:shadow-[var(--shadow-card)]">
                <div
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full text-lg font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <h3 className="mt-4 font-semibold">{t.name}</h3>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div
            className="overflow-hidden rounded-3xl p-10 text-center text-white shadow-[var(--shadow-soft)] sm:p-14"
            style={{ background: "var(--gradient-hero)" }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to start learning?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Join thousands of students building their future. 7-day free trial, cancel anytime.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/auth"
                search={{ mode: "signup" }}
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-white/90"
              >
                Create student account <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Browse courses
              </Link>
            </div>
            <ul className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/85">
              {["No credit card", "Cancel anytime", "Lifetime access"].map((i) => (
                <li key={i} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <Link
      to="/courses"
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-card)]"
    >
      <div className="relative aspect-[16/9]" style={{ background: course.color }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-foreground">
          {course.category}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
          {course.level}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-primary">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-current text-amber-500" />
            {course.rating} · {course.students.toLocaleString()} students
          </span>
          <span className="font-semibold text-foreground">${course.price}</span>
        </div>
      </div>
    </Link>
  );
}
