import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "web" | "mobile";
  description: string;
  image: string;
  alt: string;
  link?: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    category: "web",
    description: "Modern e-commerce platform with responsive design",
    image: "https://images.pexels.com/photos/7667442/pexels-photo-7667442.jpeg",
    alt: "E-commerce website showcasing products on laptop",
  },
  {
    id: "financial-dashboard",
    title: "Financial Analytics Dashboard",
    category: "web",
    description: "Real-time financial analytics and reporting dashboard",
    image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg",
    alt: "Financial analytics report with business data",
  },
  {
    id: "fitness-app",
    title: "Fitness Tracking App",
    category: "mobile",
    description:
      "Mobile app for tracking fitness activities and health metrics",
    image: "https://images.pexels.com/photos/4426517/pexels-photo-4426517.jpeg",
    alt: "Person checking fitness tracker app on smartphone",
  },
  {
    id: "food-delivery",
    title: "Food Delivery App",
    category: "mobile",
    description: "Full-featured food delivery mobile application",
    image: "https://images.pexels.com/photos/7363052/pexels-photo-7363052.jpeg",
    alt: "Delivery courier with mobile app on smartphone",
  },
];

type TabType = "all" | "web" | "mobile";

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filteredItems = useMemo(() => {
    if (activeTab === "all") {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <div>
      <div className="flex gap-3 justify-center mb-10 flex-wrap">
        <Button
          onClick={() => setActiveTab("all")}
          variant={activeTab === "all" ? "default" : "outline"}
          size="sm"
          className={activeTab === "all" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
        >
          All
        </Button>
        <Button
          onClick={() => setActiveTab("web")}
          variant={activeTab === "web" ? "default" : "outline"}
          size="sm"
          className={activeTab === "web" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
        >
          Web
        </Button>
        <Button
          onClick={() => setActiveTab("mobile")}
          variant={activeTab === "mobile" ? "default" : "outline"}
          size="sm"
          className={
            activeTab === "mobile" ? "bg-cyan-600 hover:bg-cyan-700" : ""
          }
        >
          Mobile
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="block rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative overflow-hidden h-40 bg-slate-100">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-white p-4 border-b border-l border-r border-slate-200">
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-cyan-600 capitalize">
                  {item.category}
                </span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
