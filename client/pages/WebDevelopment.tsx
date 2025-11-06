import { useMetaTags } from "@/hooks/use-meta-tags";

export default function WebDevelopment() {
  useMetaTags({
    title: "Custom Web Development Company in Hyderabad | Azorix Technologies",
    description:
      "Build dynamic, responsive, and SEO-optimized websites with Azorix Technologies. We craft digital experiences using React, Node.js, and modern frameworks.",
    canonical: "https://azorix.com/web-development",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Development</h1>
        <p className="text-xl text-slate-300 mb-8">
          Modern, responsive web applications built with cutting-edge
          technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">React Development</h2>
            <p className="text-slate-300">
              Fast, interactive web applications built with React and modern
              frameworks.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Full-Stack Development</h2>
            <p className="text-slate-300">
              Complete web solutions with frontend and backend integration.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">E-Commerce Solutions</h2>
            <p className="text-slate-300">
              Scalable online stores and commerce platforms.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Progressive Web Apps</h2>
            <p className="text-slate-300">
              Fast, reliable web apps that work offline and on all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
