export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50" id="footer">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-xl">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 text-white grid place-items-center">A</div>
            Azorix
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Transforming ideas into digital reality with modern web, cloud, and mobile solutions.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#portfolio" className="hover:text-foreground">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Our Services</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Cloud & DevOps</li>
            <li>Data & AI</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@azorix.com</li>
            <li>+1 (555) 555-1234</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} Azorix Technologies. All rights reserved.</p>
          <p>Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
