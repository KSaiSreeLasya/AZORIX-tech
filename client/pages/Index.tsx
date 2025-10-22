import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BadgeCheck, Brain, Cloud, Code2, Database, Lock, Phone, Sparkles, Star, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Index() {
  const services = useMemo(
    () => [
      { icon: <Code2 className="text-cyan-600" />, title: "Web Development", desc: "Modern, scalable web apps with exceptional UX." },
      { icon: <Phone className="text-cyan-600" />, title: "Mobile App Development", desc: "Cross‑platform apps built with performance and polish." },
      { icon: <Cloud className="text-cyan-600" />, title: "Cloud Solutions", desc: "Architecture, migration, and DevOps on leading clouds." },
      { icon: <Database className="text-cyan-600" />, title: "Data Analytics", desc: "Dashboards and insights to power decisions." },
      { icon: <Lock className="text-cyan-600" />, title: "Cybersecurity", desc: "Security reviews, hardening, and best practices." },
      { icon: <Brain className="text-cyan-600" />, title: "AI & Machine Learning", desc: "Intelligent features that unlock new value." },
    ],
    [],
  );

  const testimonials = [
    {
      quote:
        "Working with Azorix was a delight. They navigated complex challenges and delivered beyond expectations.",
      name: "Emily Rodriguez",
      role: "CEO, Nova Systems",
    },
    {
      quote:
        "Superb communication and pixel‑perfect execution. Our migration finished ahead of schedule.",
      name: "Marcus Chen",
      role: "CTO, Orbit Labs",
    },
    {
      quote:
        "Their design sense and engineering rigor are rare to find together. Highly recommended.",
      name: "Aisha Khan",
      role: "Product Lead, Flowly",
    },
  ];

  const [tIndex, setTIndex] = useState(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    toast.success(`Thanks ${name || "there"}! We'll get back to you shortly.`);
    e.currentTarget.reset();
  };

  return (
    <div id="home">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-50 via-white to-emerald-50" />
        <div className="container py-20 md:py-28 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-white shadow-sm mb-4">
              <Sparkles className="h-4 w-4 text-cyan-600" /> Innovative Technology Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Transforming ideas into Digital Reality
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Azorix designs, builds, and ships high‑impact products. From web and mobile to cloud modernization, we drive growth with elegant engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services"><Button size="lg">Our Services</Button></a>
              <a href="#contact"><Button size="lg" variant="outline">Get in touch</Button></a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="50+" label="Projects" />
              <Stat value="100%" label="Client Satisfaction" />
              <Stat value="15+" label="Industries" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] rounded-2xl border bg-white p-6 shadow-xl">
              <div className="grid h-full place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
                <div className="text-center">
                  <Star className="mx-auto h-10 w-10" />
                  <p className="mt-2 font-semibold">Design • Build • Scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16 md:py-24">
        <SectionTitle title="About Us" subtitle="Learn more about Azorix and our mission" />
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Who We Are</h3>
            <p className="mt-3 text-muted-foreground">
              Azorix is a forward‑thinking technology company delivering robust solutions across web, mobile, and cloud. Our team blends strategy, design, and engineering to craft delightful experiences.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <Pill icon={<Users />} label="Experienced Team" />
              <Pill icon={<BadgeCheck />} label="Quality First" />
              <Pill icon={<Sparkles />} label="Innovation" />
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">
              We empower organizations through technology—reducing complexity, accelerating delivery, and ensuring measurable outcomes.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-6">
              <KPI value="50+" label="Successful projects" />
              <KPI value="100+" label="Happy clients" />
              <KPI value="15+" label="Years combined exp." />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-slate-50/80 py-16 md:py-24">
        <div className="container">
          <SectionTitle title="Our Products" subtitle="Discover our innovative solutions" />
          <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold">Simplify Food Ordering</h3>
                <p className="mt-2 text-muted-foreground">
                  End‑to‑end platform for restaurants: branded apps, real‑time order tracking, and analytics.
                </p>
                <div className="mt-4 flex gap-3">
                  <Button size="sm">Learn more</Button>
                  <Button size="sm" variant="outline">Request demo</Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-sm">
                <div className="relative mx-auto aspect-[9/19] w-64 rounded-[2rem] border bg-white p-3 shadow-2xl">
                  <div className="h-full rounded-[1.5rem] bg-gradient-to-br from-cyan-500 to-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-16 md:py-24">
        <SectionTitle title="Our Services" subtitle="Comprehensive solutions to reach your goals" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="h-11 w-11 rounded-lg bg-cyan-50 grid place-items-center mb-4">{s.icon}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-slate-50/80 py-16 md:py-24">
        <div className="container">
          <SectionTitle title="Our Portfolio" subtitle="Explore recent projects" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-xl border bg-gradient-to-br from-cyan-200 to-emerald-200/70" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container py-16 md:py-24">
        <SectionTitle title="Client Testimonials" subtitle="What our clients say about working with us" />
        <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
          <p className="text-lg leading-relaxed">“{testimonials[tIndex].quote}”</p>
          <div className="mt-6">
            <p className="font-semibold">{testimonials[tIndex].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[tIndex].role}</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <Button variant="outline" onClick={() => setTIndex((tIndex - 1 + testimonials.length) % testimonials.length)}>Prev</Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setTIndex(i)}
                  className={"h-2.5 w-2.5 rounded-full transition " + (i === tIndex ? "bg-cyan-600" : "bg-slate-300 hover:bg-slate-400")}
                />
              ))}
            </div>
            <Button variant="outline" onClick={() => setTIndex((tIndex + 1) % testimonials.length)}>Next</Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50/80 py-16 md:py-24">
        <div className="container grid gap-10 md:grid-cols-2 items-start">
          <div>
            <SectionTitle title="Contact Us" subtitle="Get in touch and let’s talk about your next project" />
            <ul className="space-y-4 text-muted-foreground">
              <li><strong className="text-foreground">Our Location:</strong> 500 Market St, San Francisco, CA</li>
              <li><strong className="text-foreground">Email Us:</strong> hello@azorix.com</li>
              <li><strong className="text-foreground">Call Us:</strong> +1 (555) 555‑1234</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" name="subject" required placeholder="Project inquiry" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                <Textarea id="message" name="message" required placeholder="Tell us about your goals" rows={5} />
              </div>
              <Button type="submit" className="h-11 text-base">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-xs shadow-sm">
      <span className="h-4 w-4">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
