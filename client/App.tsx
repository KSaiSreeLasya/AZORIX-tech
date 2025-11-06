import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/TermsOfService";
import Services from "./pages/Services";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import CloudSolutions from "./pages/CloudSolutions";
import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import AutomationRobotics from "./pages/AutomationRobotics";
import Cybersecurity from "./pages/Cybersecurity";
import UIUXDesign from "./pages/UIUXDesign";
import DataAnalytics from "./pages/DataAnalytics";
import VLSISemiconductor from "./pages/VLSISemiconductor";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/artificial-intelligence"
            element={
              <Layout>
                <ArtificialIntelligence />
              </Layout>
            }
          />
          <Route
            path="/cloud-solutions"
            element={
              <Layout>
                <CloudSolutions />
              </Layout>
            }
          />
          <Route
            path="/web-development"
            element={
              <Layout>
                <WebDevelopment />
              </Layout>
            }
          />
          <Route
            path="/mobile-app-development"
            element={
              <Layout>
                <MobileAppDevelopment />
              </Layout>
            }
          />
          <Route
            path="/automation-robotics"
            element={
              <Layout>
                <AutomationRobotics />
              </Layout>
            }
          />
          <Route
            path="/cybersecurity"
            element={
              <Layout>
                <Cybersecurity />
              </Layout>
            }
          />
          <Route
            path="/ui-ux-design"
            element={
              <Layout>
                <UIUXDesign />
              </Layout>
            }
          />
          <Route
            path="/data-analytics"
            element={
              <Layout>
                <DataAnalytics />
              </Layout>
            }
          />
          <Route
            path="/vlsi-semiconductor"
            element={
              <Layout>
                <VLSISemiconductor />
              </Layout>
            }
          />
          <Route
            path="/careers"
            element={
              <Layout>
                <Careers />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/privacy"
            element={
              <Layout>
                <PrivacyPolicy />
              </Layout>
            }
          />
          <Route
            path="/terms"
            element={
              <Layout>
                <Terms />
              </Layout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
