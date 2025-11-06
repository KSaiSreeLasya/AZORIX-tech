import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Careers() {
  useMetaTags({
    title: "Careers at Azorix Technologies | Join Our Innovative Team",
    description:
      "Build your future with Azorix Technologies. Explore exciting career opportunities in AI, software development, and digital innovation.",
    canonical: "https://azorix.com/careers",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
        <p className="text-xl text-slate-300 mb-8">
          Join our innovative team and shape the future of technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Software Engineers</h2>
            <p className="text-slate-300">
              Exciting opportunities for talented engineers across all levels.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">AI/ML Specialists</h2>
            <p className="text-slate-300">
              Work on cutting-edge machine learning and AI projects.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Full-Stack Developers</h2>
            <p className="text-slate-300">
              Build complete solutions with modern web technologies.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">UI/UX Designers</h2>
            <p className="text-slate-300">
              Create stunning user experiences for millions of users.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-slate-700 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
          <ul className="text-slate-300 space-y-2">
            <li>✓ Work with cutting-edge technology</li>
            <li>✓ Competitive compensation and benefits</li>
            <li>✓ Continuous learning and growth opportunities</li>
            <li>✓ Collaborative and innovative work environment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
