import { useMetaTags } from "@/hooks/use-meta-tags";

export default function AutomationRobotics() {
  useMetaTags({
    title:
      "AI-Powered Automation & Robotics Development | Azorix Technologies",
    description:
      "Enhance productivity through robotics, IoT integration, and AI-driven automation solutions built by Azorix Technologies' innovation experts.",
    canonical: "https://azorix.com/automation-robotics",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Automation & Robotics
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Intelligent automation solutions powered by AI and robotics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Process Automation</h2>
            <p className="text-slate-300">
              Automate repetitive business processes to improve efficiency.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Robotics Solutions</h2>
            <p className="text-slate-300">
              Custom robotic systems for manufacturing and industrial operations.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">IoT Integration</h2>
            <p className="text-slate-300">
              Connected devices for smart manufacturing and monitoring.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">AI-Driven Optimization</h2>
            <p className="text-slate-300">
              Machine learning algorithms for process optimization and control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
