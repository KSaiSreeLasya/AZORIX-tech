export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50" id="footer">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8bf52f20c3654880b140d224131cfa2e%2F7d2091e7871d4914a98f4b957203bbbe?format=webp&width=200"
            alt="Azorix Technologies Logo"
            className="h-8 w-auto"
          />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Transforming ideas into digital reality with modern web, cloud, and
            mobile solutions.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#about" className="hover:text-foreground">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-foreground">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-foreground">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Our Services</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Web Development</li>
            <li>Mobile Apps</li>

            <li>Data & AI</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>info@azorixtech.com</li>
            <li>+91 9392193639</li>
            <li>Plot No 102,103, Temple Lane, Mythri Nagar,<br />
Mathrusri Nagar, K.v.rangareddy, Serilingampally,<br />
Hyderabad, Telangana 500049<br />
India</li><br />
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex items-center justify-between">
          <p>
            © {new Date().getFullYear()} Azorix Technologies. All rights
            reserved.
          </p>
          <p>Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
