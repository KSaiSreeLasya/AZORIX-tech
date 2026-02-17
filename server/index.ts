import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContactSubmission } from "./routes/contact";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContactSubmission);

  // 404 handler for API routes
  app.use("/api/", (req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      error: "API endpoint not found",
    });
  });

  // Global error handler - must be last
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Unhandled error:", err);

    // Set response as JSON
    res.setHeader("Content-Type", "application/json");

    // Determine status code
    const statusCode = err.statusCode || err.status || 500;

    res.status(statusCode).json({
      success: false,
      error: err.message || "Internal server error",
    });
  });

  return app;
}
