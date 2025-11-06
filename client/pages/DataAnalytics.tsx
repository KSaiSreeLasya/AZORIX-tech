import { useMetaTags } from "@/hooks/use-meta-tags";

export default function DataAnalytics() {
  useMetaTags({
    title:
      "Business Intelligence & Data Analytics Solutions | Azorix Technologies",
    description:
      "Unlock data-driven insights with Azorix's advanced analytics and visualization tools. Empower your business decisions with AI-backed intelligence.",
    canonical: "https://azorix.com/data-analytics",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Analytics
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Transform data into actionable insights with advanced analytics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Business Analytics</h2>
            <p className="text-slate-300">
              Data analysis to support strategic business decisions.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Data Visualization</h2>
            <p className="text-slate-300">
              Interactive dashboards and visualizations for better insights.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Big Data Solutions</h2>
            <p className="text-slate-300">
              Process and analyze massive datasets with modern tools.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Data Warehousing</h2>
            <p className="text-slate-300">
              Centralized data management for efficient analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
