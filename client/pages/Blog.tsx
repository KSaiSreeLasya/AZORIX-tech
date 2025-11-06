import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Blog() {
  useMetaTags({
    title: "Tech Insights & AI Innovations | Azorix Technologies Blog",
    description:
      "Read the latest insights, tutorials, and technology trends from Azorix Technologies. Stay ahead in AI, web development, and digital transformation.",
    canonical: "https://azorix.com/blog",
  });

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt:
        "Explore how artificial intelligence is transforming industries and creating new opportunities for innovation.",
      date: "December 15, 2024",
      category: "AI",
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices",
      excerpt:
        "Learn the key strategies for successful cloud migration with minimal downtime and maximum efficiency.",
      date: "December 10, 2024",
      category: "Cloud",
    },
    {
      id: 3,
      title: "Building Secure Web Applications",
      excerpt:
        "A comprehensive guide to implementing security best practices in your web applications.",
      date: "December 5, 2024",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Mobile App Development Trends 2024",
      excerpt:
        "Discover the latest trends and technologies shaping mobile app development.",
      date: "November 30, 2024",
      category: "Mobile",
    },
    {
      id: 5,
      title: "DevOps Automation Essentials",
      excerpt:
        "Master the fundamentals of DevOps and automate your deployment pipelines.",
      date: "November 25, 2024",
      category: "DevOps",
    },
    {
      id: 6,
      title: "Data Analytics for Business Growth",
      excerpt:
        "Leverage data analytics to make informed decisions and drive business growth.",
      date: "November 20, 2024",
      category: "Analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
        <p className="text-xl text-slate-300 mb-12">
          Latest news, insights, and tutorials on technology and digital
          innovation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm bg-blue-600 px-3 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-sm text-slate-400">{post.date}</span>
              </div>

              <h2 className="text-xl font-bold mb-3">{post.title}</h2>
              <p className="text-slate-300 mb-4">{post.excerpt}</p>

              <button className="text-blue-400 hover:text-blue-300 font-semibold">
                Read More →
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
