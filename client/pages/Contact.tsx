import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { Toaster, toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  useMetaTags({
    title: "Contact Azorix Technologies | Software & AI Experts in Hyderabad",
    description:
      "Get in touch with Azorix Technologies for project consultations, partnerships, or career inquiries. Let's build something extraordinary together.",
    canonical: "https://azorix.com/contact",
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data: any = {};
      const contentType = response.headers.get("content-type");

      // Only attempt to parse as JSON if the response has JSON content type
      if (contentType?.includes("application/json")) {
        try {
          data = await response.json();
        } catch (parseError) {
          console.error("Failed to parse JSON response:", parseError);
          throw new Error("Invalid response format from server");
        }
      } else {
        throw new Error("Invalid response from server");
      }

      // Check for success
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit form");
      }

      toast.success(data.message || "Thank you! We've received your message");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to submit form"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Toaster />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-slate-300 mb-8">
          We'd love to hear from you. Get in touch with us today!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 ${
                    errors.name ? "ring-red-500" : "focus:ring-blue-500"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 ${
                    errors.email ? "ring-red-500" : "focus:ring-blue-500"
                  }`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 ${
                    errors.subject ? "ring-red-500" : "focus:ring-blue-500"
                  }`}
                  placeholder="Subject of your message"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 h-32 ${
                    errors.message ? "ring-red-500" : "focus:ring-blue-500"
                  }`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 text-white font-bold py-2 rounded transition-colors"
              >
                {isLoading ? "Sending..." : "Send Message"}
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
