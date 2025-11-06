import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Contact() {
  useMetaTags({
    title: "Contact Azorix Technologies | Software & AI Experts in Hyderabad",
    description:
      "Get in touch with Azorix Technologies for project consultations, partnerships, or career inquiries. Let's build something extraordinary together.",
    canonical: "https://azorix.com/contact",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-slate-300 mb-8">
          We'd love to hear from you. Get in touch with us today!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Message</label>
                <textarea
                  className="w-full bg-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-slate-300">Hyderabad, Telangana, India</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-slate-300">
                  <a
                    href="mailto:info@azorix.com"
                    className="hover:text-blue-400"
                  >
                    info@azorix.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-slate-300">
                  <a href="tel:+919876543210" className="hover:text-blue-400">
                    +91 98765 43210
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Business Hours</h3>
                <p className="text-slate-300">
                  Monday - Friday: 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
