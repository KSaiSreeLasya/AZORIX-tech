import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BadgeCheck,
  Brain,
  Cloud,
  Code2,
  Database,
  Lock,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import PortfolioTabs from "@/components/PortfolioTabs";

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Index() {
  const services = useMemo(
    () => [
      {
        icon: <Code2 />,
        title: "Web Development",
        desc: "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
      },
      {
        icon: <Phone />,
        title: "Mobile App Development",
        desc: "Native and cross-platform mobile applications that engage users and drive business growth.",
      },
   
      {
        icon: <Database />,
        title: "Data Analytics",
        desc: "Transform your data into actionable insights with our advanced analytics and visualization solutions.",
      },
     
      {
        icon: <Brain />,
        title: "AI & Machine Learning",
        desc: "Leverage AI to automate processes and gain competitive advantages through intelligent features.",
      },
    ],
    [],
  );

  const testimonials = [
    {
      quote:
        "Working with Azorix on our cloud migration was seamless. They handled complex challenges with ease and ensured zero downtime during the transition.",
      name: "Emily Rodriguez",
      role: "COO, TechStart Solutions",
    },
    {
      quote:
        "The mobile application developed by Azorix has significantly improved our customer engagement. Their attention to detail and user experience expertise is unmatched.",
      name: "Michael Chen",
      role: "CTO, HealthFirst",
    },
    {
      quote:
        "Azorix Technologies transformed our business with their innovative web platform. Their team was professional, responsive, and delivered beyond our expectations.",
      name: "Sarah Johnson",
      role: "CEO, NexGen Retail",
    },
  ];

  const [tIndex, setTIndex] = useState(0);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "");
    const message = String(form.get("message") || "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(`Thanks ${name || "there"}! We'll get back to you shortly.`);
        e.currentTarget.reset();
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="home">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-50 via-white to-emerald-50" />
        <div className="container py-20 md:py-28 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-white shadow-sm mb-4">
              <Sparkles className="h-4 w-4 text-cyan-600" /> Innovative
              Technology Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Transforming ideas into Digital Reality
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Azorix designs, builds, and ships high-impact products. From web
              and mobile to cloud modernization, we drive growth with elegant
              engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services">
                <Button size="lg">Our Services</Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Get in touch
                </Button>
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="50+" label="Clients Worldwide" />
              <Stat value="100+" label="Projects Completed" />
              <Stat value="15+" label="Expert Team Members" />
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

      {/* About (image left, text right) */}
      <section id="about" className="container py-16 md:py-24">
        <SectionTitle
          title="About Us"
          subtitle="Learn more about Azorix Technologies and our mission"
        />
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="mx-auto w-full max-w-lg">
            <img
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=80"
              alt="About illustration"
              className="rounded-2xl border bg-white shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Who We Are</h3>
            <p className="mt-3 text-muted-foreground">
              Azorix Technologies is a forward-thinking technology company
              dedicated to helping businesses thrive in the digital age. Founded
              in 2019, we've rapidly established ourselves as a trusted partner
              for organizations seeking innovative tech solutions.
            </p>

            <h4 className="mt-6 text-lg font-semibold">Our Mission</h4>
            <p className="mt-2 text-muted-foreground">
              Our mission is to empower businesses through technology,
              delivering solutions that are not just functional but
              transformative. We believe in creating technology that makes a
              meaningful difference.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
                <div className="text-xl font-bold text-cyan-600">50+</div>
                <div className="text-xs text-muted-foreground">
                  Clients Worldwide
                </div>
              </div>
              <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
                <div className="text-xl font-bold text-cyan-600">100+</div>
                <div className="text-xs text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
                <div className="text-xl font-bold text-cyan-600">15+</div>
                <div className="text-xs text-muted-foreground">
                  Expert Team Members
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products - clickable image goes to nipige.com */}
      <section id="products" className="bg-slate-50/80 py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="Our Products"
            subtitle="Discover our innovative solutions"
          />

          <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-8 shadow-xl">
            <div className="text-center">
              <a
                href="https://nipige.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1b9c62c1213140709e07580a4ee1f322%2F8ccf59825cdc4ee0bea569c64455e611?format=webp&width=1200"
                  alt="Product - Simplify Food Ordering"
                  className="mx-auto w-full max-w-[720px] rounded-lg border shadow-lg"
                />
              </a>
              <p className="mt-4 text-muted-foreground">
                Simplify Food Ordering Process with our Restaurant App — click
                the image to view the live site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - enhanced UI */}
      <section id="services" className="container py-16 md:py-24">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive technology solutions for your business needs"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="h-16 w-16 rounded-full bg-cyan-600/10 text-cyan-600 grid place-items-center mb-4">
                <div className="h-8 w-8">{s.icon}</div>
              </div>
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-slate-50/80 py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="Our Portfolio"
            subtitle="Explore some of our recent projects"
          />
          <PortfolioTabs />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container py-16 md:py-24">
        <SectionTitle
          title="Client Testimonials"
          subtitle="What our clients say about working with us"
        />
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed">
              “{testimonials[tIndex].quote}”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-cyan-50 grid place-items-center text-cyan-600">
                {/* avatar placeholder */}
                <Star />
              </div>
              <div>
                <p className="font-semibold">{testimonials[tIndex].name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[tIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setTIndex(
                  (tIndex - 1 + testimonials.length) % testimonials.length,
                )
              }
            >
              Prev
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setTIndex(i)}
                  className={
                    "h-2.5 w-6 rounded-full transition " +
                    (i === tIndex
                      ? "bg-cyan-600"
                      : "bg-slate-300 hover:bg-slate-400")
                  }
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTIndex((tIndex + 1) % testimonials.length)}
            >
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50/80 py-16 md:py-24">
        <div className="container grid gap-10 md:grid-cols-2 items-start">
          <div>
            <SectionTitle
              title="Contact Us"
              subtitle="Get in touch and let’s talk about your next project"
            />
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">Our Location:</strong> 500
                Market St, San Francisco, CA
              </li>
              <li>
                <strong className="text-foreground">Email Us:</strong>{" "}
                hello@azorix.com
              </li>
              <li>
                <strong className="text-foreground">Call Us:</strong> +1 (555)
                555‑1234
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project inquiry"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your goals"
                  rows={5}
                />
              </div>
              <Button type="submit" className="h-11 text-base">
                Send Message
              </Button>
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

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
