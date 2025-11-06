import { useMetaTags } from "@/hooks/use-meta-tags";

export default function UIUXDesign() {
  useMetaTags({
    title:
      "Creative UI/UX Design Agency | User-Centric Experiences | Azorix Technologies",
    description:
      "Deliver intuitive, elegant, and engaging designs with Azorix's UI/UX experts. We craft interfaces that boost engagement and customer satisfaction.",
    canonical: "https://azorix.com/ui-ux-design",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">UI/UX Design</h1>
        <p className="text-xl text-slate-300 mb-8">
          User-centric design solutions that drive engagement and satisfaction
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">User Interface Design</h2>
            <p className="text-slate-300">
              Beautiful and intuitive interfaces that users love.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">User Experience Design</h2>
            <p className="text-slate-300">
              Seamless user journeys optimized for satisfaction and conversion.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Design Systems</h2>
            <p className="text-slate-300">
              Consistent, scalable design systems for your brand.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Prototyping & Testing</h2>
            <p className="text-slate-300">
              Interactive prototypes and user testing for validation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
