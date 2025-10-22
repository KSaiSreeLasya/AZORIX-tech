import { RequestHandler } from "express";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Invalid email").max(255),
  subject: z.string().min(1, "Subject is required").max(255),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const validationResult = ContactSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: validationResult.error.errors,
      });
    }

    const { name, email, subject, message } = validationResult.data;

    // Get Supabase client from environment
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase credentials not configured");
      return res.status(500).json({
        error: "Server configuration error",
        success: false,
      });
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        created_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Supabase error:", response.status, errorText);
      return res.status(500).json({
        error: "Failed to save contact submission",
        success: false,
      });
    }

    return res.status(201).json({
      success: true,
      message: "Thank you! We've received your message and will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};
