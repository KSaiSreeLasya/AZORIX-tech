import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F8bf52f20c3654880b140d224131cfa2e%2F7d2091e7871d4914a98f4b957203bbbe?format=webp&width=200"
      alt="Azorix Technologies Logo"
      className={cn("h-12 w-auto", className)}
    />
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="shrink-0" aria-label="Azorix home">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith("/#") && location.pathname !== "/") {
                  e.preventDefault();
                  window.location.href = item.href;
                }
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="/#contact"
            onClick={(e) => {
              if (location.pathname !== "/") {
                e.preventDefault();
                window.location.href = "/#contact";
              }
            }}
          >
            <Button size="sm">Get in touch</Button>
          </a>
        </div>
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="container py-3 grid">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(item.href);
                  if (item.href.startsWith("/#") && location.pathname !== "/") {
                    e.preventDefault();
                    window.location.href = item.href;
                  }
                }}
                className="py-2 text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
