import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Cybersecurity() {
  useMetaTags({
    title:
      "Cybersecurity & Data Protection Services | Azorix Technologies",
    description:
      "Secure your digital assets with Azorix's cybersecurity solutions — including network defense, data encryption, and threat detection for enterprises.",
    canonical: "https://azorix.com/cybersecurity",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cybersecurity</h1>
        <p className="text-xl text-slate-300 mb-8">
          Enterprise-grade security solutions for your digital assets
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Network Security</h2>
            <p className="text-slate-300">
              Advanced firewall and network defense systems.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Data Encryption</h2>
            <p className="text-slate-300">
              Protect sensitive data with military-grade encryption.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Threat Detection</h2>
            <p className="text-slate-300">
              Real-time monitoring and detection of security threats.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Security Audits</h2>
            <p className="text-slate-300">
              Comprehensive security assessments and penetration testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
