import { useMetaTags } from "@/hooks/use-meta-tags";

export default function About() {
  useMetaTags({
    title: "About Azorix Technologies | Innovation-Driven Software Company",
    description:
      "At Azorix Technologies, we deliver intelligent solutions through AI, software, and automation. Driven by innovation and expertise, we shape the digital future.",
    canonical: "https://azorix.com/about",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-slate-300 mb-8">
          Leading innovation in software, AI, and digital transformation
        </p>

        <div className="space-y-12">
          <section className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-300 mb-4">
              At Azorix Technologies, we believe in the power of innovation and
              technology to transform businesses. Our mission is to deliver
              intelligent solutions that solve complex problems and drive
              digital transformation for our clients.
            </p>
          </section>

          <section className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-300 mb-4">
              We envision a world where technology empowers businesses to
              achieve their full potential. Through cutting-edge AI, software
              development, and automation, we help organizations stay ahead in
              the digital age.
            </p>
          </section>

          <section className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
            <ul className="text-slate-300 space-y-2">
              <li>✓ Artificial Intelligence & Machine Learning</li>
              <li>✓ Cloud Solutions & DevOps</li>
              <li>✓ Web & Mobile Development</li>
              <li>✓ Cybersecurity & Data Protection</li>
              <li>✓ IoT & Automation Solutions</li>
              <li>✓ UI/UX Design & Analytics</li>
            </ul>
          </section>

          <section className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why Choose Azorix?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Expert Team</h3>
                <p className="text-slate-300">
                  Experienced professionals with deep expertise across all
                  technologies.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Proven Results</h3>
                <p className="text-slate-300">
                  Track record of successful projects and satisfied clients
                  globally.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Innovative Solutions</h3>
                <p className="text-slate-300">
                  Cutting-edge approaches to solve your business challenges.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Client-Focused</h3>
                <p className="text-slate-300">
                  Your success is our priority, with dedicated support
                  throughout.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
