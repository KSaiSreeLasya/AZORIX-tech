import { useMetaTags } from "@/hooks/use-meta-tags";

export default function ArtificialIntelligence() {
  useMetaTags({
    title:
      "AI & Machine Learning Development Company | Azorix Technologies",
    description:
      "Transform your business with AI-powered applications, predictive analytics, and machine learning models built by Azorix Technologies' data science experts.",
    canonical: "https://azorix.com/artificial-intelligence",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Artificial Intelligence
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Transform your business with cutting-edge AI solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Machine Learning</h2>
            <p className="text-slate-300">
              Custom ML models and algorithms for business intelligence and automation.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Predictive Analytics</h2>
            <p className="text-slate-300">
              Data-driven insights to predict trends and optimize decisions.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Natural Language Processing
            </h2>
            <p className="text-slate-300">
              AI systems that understand and process human language effectively.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Computer Vision</h2>
            <p className="text-slate-300">
              Visual intelligence systems for image and video analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
