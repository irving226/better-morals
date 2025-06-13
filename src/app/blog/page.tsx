"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // AnimatePresence removed as it's not used for internal view switching anymore
import Link from "next/link";

// Assume blogPostsData with slugs is defined or imported here
// For this example, I'll use the structure from previous responses.
// Ensure this data is consistent with what you have in your project (e.g., from src/lib/blogData.ts)
const blogPostsData = [
  {
    id: 1,
    title:
      "The True Cost of Surveillance Marketing: Why We're Walking Away from $2M in Revenue",
    slug: "the-true-cost-of-surveillance-marketing",
    excerpt:
      "Last month, we turned down a lucrative contract that would have required invasive user tracking. Here's why that decision will shape the future of ethical marketing.",
    author: "Clarity Skyz",
    date: "2025-06-01",
    readTime: 8,
    category: "Ethics in Practice",
    impactType: "Privacy Protection",
    impactScore: 9.2,
    discussionHeat: 87,
    tags: ["Privacy", "Revenue Ethics", "Industry Change"],
    image: "/blog/surveillance-cost.jpg",
    content:
      "Full blog post content for 'The True Cost of Surveillance Marketing' would go here...",
    size: "large",
    color: "from-red-500 to-orange-500",
    icon: "🛡️",
  },
  {
    id: 2,
    title: "Building AI That Amplifies Creativity: Our Open-Source Toolkit",
    slug: "building-ai-that-amplifies-creativity",
    excerpt:
      "We're releasing our creative AI framework for free. Because the future of work should empower artists, not replace them.",
    author: "Brian Irving",
    date: "2025-05-28",
    readTime: 12,
    category: "Technology",
    impactType: "Creative Empowerment",
    impactScore: 8.8,
    discussionHeat: 64,
    tags: ["AI Ethics", "Open Source", "Creative Tools"],
    image: "/blog/ai-creativity.jpg",
    content: "Full content for 'Building AI That Amplifies Creativity'...",
    size: "medium",
    color: "from-blue-500 to-purple-500",
    icon: "🎨",
  },
  {
    id: 3,
    title:
      "The Psychology of Ethical Persuasion: Moving Hearts Without Manipulation",
    slug: "the-psychology-of-ethical-persuasion",
    excerpt:
      "How neuroscience teaches us to influence ethically. The difference between inspiration and exploitation in modern marketing.",
    author: "Elizabeth So",
    date: "2025-05-25",
    readTime: 6,
    category: "Psychology",
    impactType: "Mental Wellness",
    impactScore: 8.5,
    discussionHeat: 92,
    tags: ["Neuroscience", "Ethical Influence", "Mental Health"],
    image: "/blog/ethical-persuasion.jpg",
    content: "Full content for 'The Psychology of Ethical Persuasion'...",
    size: "medium",
    color: "from-emerald-500 to-teal-500",
    icon: "🧠",
  },
  {
    id: 4,
    title:
      "Carbon Neutral Campaigns: Our First Year of Climate-Conscious Marketing",
    slug: "carbon-neutral-campaigns-our-first-year",
    excerpt:
      "Every digital ad has a carbon footprint. Here's how we measured, reduced, and offset ours while maintaining campaign effectiveness.",
    author: "Clarity Skyz",
    date: "2025-05-22",
    readTime: 10,
    category: "Environmental Impact",
    impactType: "Climate Action",
    impactScore: 9.0,
    discussionHeat: 56,
    tags: ["Climate", "Sustainability", "Green Marketing"],
    image: "/blog/carbon-neutral.jpg",
    content: "Detailed insights into our journey...",
    size: "small",
    color: "from-green-500 to-emerald-500",
    icon: "🌱",
  },
  {
    id: 5,
    title:
      "Deconstructing FOMO: How We Eliminated Scarcity Tactics and Increased Conversions by 34%",
    slug: "deconstructing-fomo-increased-conversions",
    excerpt:
      "Transparency beats manipulation. Our 6-month experiment in honest marketing produced surprising results.",
    author: "Elizabeth So",
    date: "2025-05-20",
    readTime: 7,
    category: "Case Studies",
    impactType: "Consumer Empowerment",
    impactScore: 8.3,
    discussionHeat: 78,
    tags: ["FOMO", "Honest Marketing", "Case Study"],
    image: "/blog/fomo-study.jpg",
    content: "A case study on how we replaced FOMO...",
    size: "medium",
    color: "from-purple-500 to-pink-500",
    icon: "📊",
  },
  {
    id: 6,
    title:
      "The Future of Work: Supporting Creative Communities Through Tech Transition",
    slug: "the-future-of-work-supporting-creative-communities",
    excerpt:
      "As AI reshapes creative industries, how do we ensure artists thrive rather than just survive? Our community support initiatives.",
    author: "Brian Irving",
    date: "2025-05-18",
    readTime: 9,
    category: "Future of Work",
    impactType: "Economic Justice",
    impactScore: 8.7,
    discussionHeat: 43,
    tags: ["Future of Work", "Creative Economy", "Community"],
    image: "/blog/creative-future.jpg",
    content: "Exploring strategies and initiatives...",
    size: "large",
    color: "from-cyan-500 to-blue-500",
    icon: "🚀",
  },
  {
    id: 7,
    title: "Ethical Data Handling: A Non-Negotiable Pillar of Trust",
    slug: "ethical-data-handling-a-non-negotiable-pillar-of-trust",
    excerpt:
      "Our comprehensive guide to responsible data collection, storage, and usage in marketing campaigns.",
    author: "Clarity Skyz",
    date: "2025-05-15",
    readTime: 11,
    category: "Data Privacy",
    impactType: "Privacy Protection",
    impactScore: 9.1,
    discussionHeat: 70,
    tags: ["Data Ethics", "GDPR", "Trust"],
    image: "/blog/data-handling.jpg",
    content: "A deep dive into ethical data practices...",
    size: "medium",
    color: "from-indigo-500 to-violet-500",
    icon: "🔒",
  },
  {
    id: 8,
    title: "Accessible Design: Why Inclusivity Drives Better Marketing",
    slug: "accessible-design-why-inclusivity-drives-better-marketing",
    excerpt:
      "Creating campaigns that are usable and understandable by everyone, regardless of ability.",
    author: "Elizabeth So",
    date: "2025-05-12",
    readTime: 7,
    category: "Accessibility",
    impactType: "Social Inclusion",
    impactScore: 8.6,
    discussionHeat: 60,
    tags: ["Accessibility", "Inclusive Design", "WCAG"],
    image: "/blog/accessible-design.jpg",
    content: "Guidelines and best practices...",
    size: "small",
    color: "from-pink-500 to-rose-500",
    icon: "♿",
  },
];
const impactTypes = [
  "All",
  "Privacy Protection",
  "Creative Empowerment",
  "Mental Wellness",
  "Climate Action",
  "Consumer Empowerment",
  "Economic Justice",
  "Social Inclusion",
];
const POSTS_PER_PAGE = 3;

export default function EthicalBlog() {
  const [selectedImpact, setSelectedImpact] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredPost] = useState(blogPostsData[0]);
  const [scrollY, setScrollY] = useState(0);
  const [visiblePostsCount, setVisiblePostsCount] = useState(POSTS_PER_PAGE);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredAndSortedPosts = blogPostsData
    .filter((post) => {
      const matchesImpact =
        selectedImpact === "All" || post.impactType === selectedImpact;
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.content &&
          post.content.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesImpact && matchesSearch && post.id !== featuredPost.id;
    })
    .sort((a, b) =>
      new Date(b.date).toString().localeCompare(new Date(a.date).toString())
    ); // Ensure proper date sorting

  const postsToDisplay = filteredAndSortedPosts.slice(0, visiblePostsCount);

  const getCardSize = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 bg-gradient-to-br from-cyan-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full opacity-15 bg-gradient-to-br from-purple-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full opacity-10 bg-gradient-to-br from-emerald-500/30 to-transparent blur-[80px]"></div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        key="blogGridContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hero Featured Post */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* ... Hero content remains the same ... */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              willChange: "transform",
            }}
          >
            <div
              className={`w-full h-full bg-gradient-to-br ${featuredPost.color} blur-3xl`}
            ></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="text-3xl">{featuredPost.icon}</span>
                  <span className="text-sm font-medium tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
                    Featured Story
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {featuredPost.title}
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {featuredPost.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {featuredPost.author}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {featuredPost.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{featuredPost.readTime} min read</span>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <span>Impact Score: {featuredPost.impactScore}</span>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} passHref>
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all duration-300">
                    <span className="absolute inset-0 border-2 border-cyan-400 rounded-lg"></span>
                    <span className="absolute inset-0 scale-0 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 transition-transform duration-500 group-hover:scale-100"></span>
                    <span className="relative text-cyan-300 group-hover:text-white transition-colors duration-300 flex items-center">
                      Read Full Story
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${featuredPost.color} opacity-20 flex items-center justify-center`}
                  >
                    <span className="text-6xl opacity-50">
                      {featuredPost.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        {/* REFACTOR: Added top margin (mt-16 lg:mt-24) to this section */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 mt-16 lg:mt-24 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3 justify-center">
              {impactTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedImpact(type);
                    setVisiblePostsCount(POSTS_PER_PAGE);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedImpact === type
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700/50 hover:text-gray-300"
                  } backdrop-blur-sm`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
          {/* REFACTOR: Added [grid-auto-flow:dense] to attempt filling gaps.
              Note: This might reorder items visually. Remove if order is critical and gaps are acceptable or managed by loading more items. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(0,_1fr)] [grid-auto-flow:dense]">
            {postsToDisplay.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                // Removed legacyBehavior and passHref
                // The Link component itself will now render the <a> tag.
                // To ensure the <a> tag behaves like a block and fills its container,
                // you might need to add styling to it. One way is to pass className
                // to Link, which it applies to its <a>.
                // For complex children like motion.div, often the structure below works directly,
                // but if layout issues occur, styling the Link's <a> is the next step.
                // Example: className="block h-full" (if needed on the Link itself)
              >
                <motion.div // Changed from motion.a to motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  // All existing classes for styling the card remain on this motion.div
                  className={`group relative rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-md border border-gray-800 shadow-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col ${getCardSize(
                    post.size
                  )}`}
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Card content remains the same */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center text-xl shadow-lg`}
                        >
                          {post.icon}
                        </div>
                        <div>
                          <div className="text-xs text-cyan-400 font-medium">
                            {post.category}
                          </div>
                          <div className="text-xs text-gray-500">
                            {post.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 mb-1">
                          Impact Score
                        </div>
                        <div className="text-sm font-bold text-emerald-400">
                          {post.impactScore}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50 mt-auto">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{post.readTime} min</span>
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                          <span>{post.discussionHeat}% active</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">{post.author}</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.color} bg-opacity-20 text-white border border-white/20 backdrop-blur-sm`}
                      >
                        {post.impactType}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* "Load More" Button */}
          {visiblePostsCount < filteredAndSortedPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={() =>
                  setVisiblePostsCount((prev) => prev + POSTS_PER_PAGE)
                }
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all duration-300 bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700/50 rounded-lg text-gray-300 hover:text-white"
              >
                <span className="relative">Load More Insights</span>
                <svg
                  className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          )}

          {postsToDisplay.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-light text-gray-300 mb-2">
                No stories found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or impact filter.
              </p>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="relative z-10 max-w-4xl mx-auto px-4 pb-24">
          <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-emerald-900/20 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm text-center">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Stay Connected to the Movement
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get weekly insights on ethical marketing, AI developments, and the
              stories behind our industry-changing decisions. No spam, no
              manipulation—just honest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-emerald-500 transition-all shadow-lg">
                Join Us
              </button>
            </div>
          </div>
        </section>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
