import { Link } from "@tanstack/react-router";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            LumenEd
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A modern learning platform helping students master tomorrow's skills, today.
          </p>
          <div className="mt-5 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        <FooterCol title="Explore" items={[
          { to: "/courses", label: "All courses" },
          { to: "/teachers", label: "Teachers" },
          { to: "/blog", label: "Blog" },
        ]} />
        <FooterCol title="Company" items={[
          { to: "/about", label: "About us" },
          { to: "/contact", label: "Contact" },
          { to: "/auth", label: "Student login" },
        ]} />

        <div>
          <h4 className="text-sm font-semibold text-foreground">Stay in the loop</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            New courses and learning tips, every month.
          </p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@school.edu"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/40 focus:ring-2"
            />
            <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} LumenEd. All rights reserved.</p>
          <p>Built with care for curious minds.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-muted-foreground transition hover:text-primary">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
