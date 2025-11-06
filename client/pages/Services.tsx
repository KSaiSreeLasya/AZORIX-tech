import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Services() {
  useMetaTags({
    title: "Software Development, AI & IoT Solutions | Azorix Technologies Hyderabad",
    description:
      "Discover innovative software, AI, and IoT services by Azorix Technologies. From web apps to enterprise automation — we build scalable, secure, and smart digital systems.",
    canonical: "https://azorix.com/services",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
        <p className="text-xl text-slate-300 mb-8">
          Comprehensive digital solutions tailored to your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Software Development</h2>
            <p className="text-slate-300">
              Custom software solutions built with modern technologies and best practices.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">AI & Machine Learning</h2>
            <p className="text-slate-300">
              Intelligent systems powered by advanced AI and machine learning algorithms.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">IoT Solutions</h2>
            <p className="text-slate-300">
              Connected devices and smart systems for the Internet of Things.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Enterprise Automation</h2>
            <p className="text-slate-300">
              Streamline operations with intelligent automation solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
