import { useMetaTags } from "@/hooks/use-meta-tags";

export default function VLSISemiconductor() {
  useMetaTags({
    title:
      "VLSI & Semiconductor Design Training | Azorix Technologies Hyderabad",
    description:
      "Azorix Technologies offers expert-led semiconductor design training in SystemVerilog, UVM, and Verification — empowering future chip designers.",
    canonical: "https://azorix.com/vlsi-semiconductor",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          VLSI & Semiconductor Division
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Expertise in chip design, verification, and semiconductor development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">SystemVerilog Design</h2>
            <p className="text-slate-300">
              Expert training and development in SystemVerilog hardware design.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">UVM Verification</h2>
            <p className="text-slate-300">
              Universal Verification Methodology for comprehensive testing.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Chip Design</h2>
            <p className="text-slate-300">
              Full-chip design from architecture to implementation.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Design Verification</h2>
            <p className="text-slate-300">
              Comprehensive verification and validation of semiconductor
              designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
