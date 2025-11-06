import { useMetaTags } from "@/hooks/use-meta-tags";

export default function MobileAppDevelopment() {
  useMetaTags({
    title:
      "Mobile App Development Services | Android & iOS | Azorix Technologies",
    description:
      "Design and develop high-performance Android and iOS apps with Azorix Technologies — combining creativity, usability, and business impact.",
    canonical: "https://azorix.com/mobile-app-development",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mobile App Development
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          High-performance native and cross-platform mobile applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">iOS Development</h2>
            <p className="text-slate-300">
              Native iOS apps built with Swift and modern Apple technologies.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Android Development</h2>
            <p className="text-slate-300">
              Robust Android applications for diverse device ecosystems.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Cross-Platform Apps</h2>
            <p className="text-slate-300">
              Efficient multi-platform solutions with React Native and Flutter.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">App Maintenance</h2>
            <p className="text-slate-300">
              Ongoing support, updates, and optimization for your mobile apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
