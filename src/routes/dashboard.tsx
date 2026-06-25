import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LogOut, BookOpen, Trophy, Clock } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { courses } from "@/lib/site-data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Dashboard — LumenEd" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
      if (!session) navigate({ to: "/auth" });
    });
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setChecking(false);
      if (!data.session) navigate({ to: "/auth" });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  }

  if (checking || !user) {
    return (
      <SiteLayout>
        <div className="flex min-h-[60vh] items-center justify-center text-sm text-muted-foreground">
          Loading...
        </div>
      </SiteLayout>
    );
  }

  const enrolled = courses.slice(0, 3);
  const name = (user.user_metadata?.full_name as string | undefined) ?? user.email?.split("@")[0] ?? "Student";

  return (
    <SiteLayout>
      <section className="border-b border-border" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-10 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">Welcome back,</p>
            <h1 className="truncate text-3xl font-bold sm:text-4xl">{name} 👋</h1>
          </div>
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut className="mr-1.5 h-4 w-4" /> Sign out
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: BookOpen, k: enrolled.length, v: "Active courses" },
            { icon: Clock, k: "24h", v: "Learning this month" },
            { icon: Trophy, k: 3, v: "Certificates earned" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={v} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{k}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{v}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold">Continue learning</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {enrolled.map((c, idx) => {
            const progress = [62, 28, 84][idx] ?? 50;
            return (
              <div key={c.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[16/9]" style={{ background: c.color }} />
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">{c.category}</p>
                  <h3 className="mt-1 font-semibold">{c.title}</h3>
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span><span>{progress}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                  <Button className="mt-4 w-full" size="sm">Resume</Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-center">
          <h3 className="font-semibold">Looking for something new?</h3>
          <p className="mt-1 text-sm text-muted-foreground">Browse our catalog to enroll in another course.</p>
          <Button asChild className="mt-4">
            <Link to="/courses">Browse courses</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
