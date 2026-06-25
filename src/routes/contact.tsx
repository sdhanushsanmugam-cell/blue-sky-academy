import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LumenEd" },
      { name: "description", content: "Questions about a course, a partnership or your enrollment? We'd love to hear from you." },
      { property: "og:title", content: "Contact LumenEd" },
      { property: "og:description", content: "Get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll get back to you within 1 business day.");
    }, 600);
  }

  return (
    <SiteLayout>
      <section className="border-b border-border" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Get in touch</h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Questions about a course, partnerships or your enrollment? We're here to help.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-6 lg:col-span-1">
          {[
            { icon: Mail, title: "Email", body: "hello@lumened.com", sub: "Replies within a business day" },
            { icon: Phone, title: "Phone", body: "+1 (415) 555-0192", sub: "Mon–Fri, 9am–6pm PT" },
            { icon: MapPin, title: "HQ", body: "548 Market St, San Francisco, CA", sub: "By appointment" },
          ].map(({ icon: Icon, title, body, sub }) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-0.5 text-sm">{body}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" className="mt-4" required />
          <div className="mt-4">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-1.5 w-full rounded-md border border-input bg-background p-3 text-sm outline-none ring-ring/40 focus:ring-2"
            />
          </div>
          <Button type="submit" size="lg" className="mt-6" disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </Button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/40 focus:ring-2"
      />
    </div>
  );
}
