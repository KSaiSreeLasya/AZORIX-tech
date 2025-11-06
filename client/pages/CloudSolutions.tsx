import { useMetaTags } from "@/hooks/use-meta-tags";

export default function CloudSolutions() {
  useMetaTags({
    title:
      "Cloud Solutions & DevOps Services | Azorix Technologies Hyderabad",
    description:
      "Modernize your IT infrastructure with Azorix Cloud Solutions. Get scalable cloud migration, DevOps automation, and performance optimization tailored to your enterprise.",
    canonical: "https://azorix.com/cloud-solutions",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Cloud Solutions
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Scalable, secure, and cost-effective cloud infrastructure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Cloud Migration</h2>
            <p className="text-slate-300">
              Seamless migration of your applications and data to the cloud.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">DevOps Automation</h2>
            <p className="text-slate-300">
              Streamline development and deployment with DevOps practices.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Infrastructure Optimization
            </h2>
            <p className="text-slate-300">
              Optimize performance and reduce costs of your cloud infrastructure.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Cloud Security</h2>
            <p className="text-slate-300">
              Enterprise-grade security for your cloud environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
