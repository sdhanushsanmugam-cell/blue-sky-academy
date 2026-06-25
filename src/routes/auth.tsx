import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const searchSchema = z.object({
  mode: z.enum(["signin", "signup"]).optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Student Login — LumenEd" },
      { name: "description", content: "Sign in to your LumenEd student account or create one for free." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">(search.mode ?? "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard" });
    });
  }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { full_name: name },
          },
        });
        if (error) throw error;
        toast.success("Account created! Check your email to confirm, then sign in.");
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back!");
        navigate({ to: "/dashboard" });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Form side */}
      <div className="flex flex-col px-6 py-10 sm:px-12">
        <Link to="/" className="inline-flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          LumenEd
        </Link>

        <div className="mx-auto mt-16 w-full max-w-sm">
          <h1 className="text-3xl font-bold">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Sign in to access your courses and progress."
              : "Start learning with a 7-day free trial."}
          </p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            {mode === "signup" && (
              <div>
                <label className="text-sm font-medium">Full name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/40 focus:ring-2"
                />
              </div>
            )}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/40 focus:ring-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                required
                type="password"
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/40 focus:ring-2"
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "signin" ? "New to LumenEd?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="font-medium text-primary hover:underline"
            >
              {mode === "signin" ? "Create an account" : "Sign in"}
            </button>
          </p>
        </div>

        <p className="mt-auto pt-10 text-center text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">← Back to site</Link>
        </p>
      </div>

      {/* Visual side */}
      <div
        className="relative hidden flex-col justify-between p-12 text-white lg:flex"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="text-sm font-medium opacity-90">LumenEd · Student Portal</div>
        <div className="max-w-md">
          <p className="text-3xl font-bold leading-tight">
            "LumenEd gave me the structure of a bootcamp with the depth of a university — and the
            freedom to learn on my own schedule."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/20 font-semibold">JM</div>
            <div>
              <p className="font-semibold">Jordan Miles</p>
              <p className="text-sm opacity-80">Data Science · Class of 2025</p>
            </div>
          </div>
        </div>
        <div className="text-xs opacity-70">© {new Date().getFullYear()} LumenEd</div>
      </div>
    </div>
  );
}
