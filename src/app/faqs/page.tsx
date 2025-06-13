"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question:
      "Why does your company reject standard advertising practices like retargeting and microtargeting?",
    answer:
      "Because we believe those tactics exploit your data and attention, not serve you. Retargeting tracks your every move online to manipulate you into buying things you don't need. Microtargeting often preys on insecurities, vulnerabilities, and fear. That's not how we want to engage with people. We'd rather build relationships through transparency and respect.",
    category: "Privacy & Ethics",
    icon: "🛡️",
  },
  {
    id: 2,
    question: "How do you handle customer data?",
    answer:
      "We collect the bare minimum we need to provide our services—nothing more. We never sell, share, or broker your data with third parties. Your data is your data, and we make it easy for you to access, modify, or delete it. We don't do creepy surveillance-based advertising. Period.",
    category: "Data Protection",
    icon: "🔐",
  },
  {
    id: 3,
    question:
      "Why don't you use FOMO marketing, limited-time offers, or fake scarcity?",
    answer:
      "Because it's manipulative. FOMO marketing pressures people into making impulsive decisions they might regret. We believe in giving you the information and time you need to make a decision that's right for you. If a product is limited for a genuine reason (e.g., small batch production), we'll tell you exactly why.",
    category: "Honest Marketing",
    icon: "⏰",
  },
  {
    id: 4,
    question: "Do you use influencer marketing or paid endorsements?",
    answer:
      "If we ever partner with creators, we will always disclose it clearly. No hidden sponsorships. No fake reviews. And we will never pay for fake followers, fake engagement, or bots to inflate our numbers. If you see someone talking about us, it's because they genuinely like what we're doing—not because they were paid to say so without disclosure.",
    category: "Transparency",
    icon: "🤝",
  },
  {
    id: 5,
    question:
      "How do you ensure your ads aren't contributing to misinformation or polarizing content?",
    answer:
      "We do not advertise on platforms or with partners who profit from amplifying harmful or misleading content. That includes sites that promote conspiracy theories, fake news, or political extremism. We believe advertising dollars should not fuel the destruction of public trust.",
    category: "Content Responsibility",
    icon: "🎯",
  },
  {
    id: 6,
    question: "Why do you limit the number of ads you show?",
    answer:
      "Because we value your attention. We don't believe in flooding your feed, inbox, or screen with ads just because we can. We'd rather communicate meaningfully when we have something worth saying, not interrupt your day with irrelevant noise.",
    category: "Respectful Engagement",
    icon: "💝",
  },
  {
    id: 7,
    question:
      "What's your stance on environmental impact in digital marketing?",
    answer:
      "Digital advertising has a carbon footprint—data centers, servers, the whole infrastructure. We actively monitor and minimize the impact of our campaigns. That means fewer ads, better targeting (without invasive tracking), and transparency about our environmental impact. When we can't reduce, we offset responsibly.",
    category: "Environmental Care",
    icon: "🌱",
  },
  {
    id: 8,
    question: "How do you define success in your marketing?",
    answer:
      "Not by how many eyeballs we grab or how much revenue we extract. Success for us is measured by long-term trust, value delivered to the community, and honest conversations. If we build a sustainable, engaged, and respected brand, the revenue will follow—but it's not the goal in itself.",
    category: "Success Metrics",
    icon: "📊",
  },
  {
    id: 9,
    question: "What's the future of marketing, in your opinion?",
    answer:
      "It's about respecting human autonomy. We believe the future of marketing should focus on empowering people with useful, truthful information so they can make informed choices. Less manipulation, more collaboration. Less noise, more meaning.",
    category: "Future Vision",
    icon: "🔮",
  },
  {
    id: 10,
    question: "How can I hold you accountable?",
    answer:
      "Please do. We want feedback, criticism, and honest dialogue. If you ever see us slipping into the bad habits we're rejecting, tell us. We'll listen, learn, and improve.",
    category: "Accountability",
    icon: "🔍",
  },
];

export default function EthicalFAQ() {
  const [activeId, setActiveId] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(faqData.map((item) => item.category))];

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative overflow-hidden py-24 bg-gray-950 text-white">
      {/* Background Effects - Your exact style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 bg-gradient-to-br from-cyan-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full opacity-15 bg-gradient-to-br from-purple-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full opacity-10 bg-gradient-to-br from-emerald-500/30 to-transparent blur-[80px]"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-cyan-500/10" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header - Your exact styling */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <span className="text-sm font-medium tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/20 backdrop-blur-sm">
              🌱 Ethical Marketing FAQ
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              Questions About
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Our Ethics
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We believe in radical transparency. Here are the questions we get
            most often about why we do marketing differently.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 backdrop-blur-sm transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700/50 hover:text-gray-300"
                } backdrop-blur-sm`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content - Split Layout */}
        <div className="grid lg:grid-cols-7 gap-8">
          {/* Question List */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Questions ({filteredFAQs.length})
              </h3>
              <div className="space-y-1.5">
                {filteredFAQs.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      activeId === item.id
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-white"
                        : "bg-gray-900/50 border border-gray-700/50 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    } backdrop-blur-sm`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-lg flex-shrink-0 mt-0.5">
                        {item.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs text-cyan-400 font-medium mb-0.5">
                          {item.category}
                        </div>
                        <div className="text-sm font-medium leading-tight">
                          {item.question}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Answer Display */}
          <div className="lg:col-span-5">
            {(() => {
              const activeItem =
                filteredFAQs.find((item) => item.id === activeId) ||
                filteredFAQs[0];
              if (!activeItem) {
                return (
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 text-center backdrop-blur-sm">
                    <div className="text-6xl mb-4">🤔</div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">
                      No questions found
                    </h3>
                    <p className="text-gray-400">
                      Try adjusting your search or filter criteria.
                    </p>
                  </div>
                );
              }

              return (
                <div className="bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 border border-gray-700/50 rounded-2xl p-10 backdrop-blur-sm min-h-[450px]">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      {activeItem.icon}
                    </div>
                    <div>
                      <div className="text-base text-cyan-400 font-medium mb-3">
                        {activeItem.category}
                      </div>
                      <h2 className="text-3xl font-bold text-white leading-tight">
                        {activeItem.question}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-xl prose-invert max-w-none">
                    <p className="text-gray-200 leading-relaxed text-xl">
                      {activeItem.answer}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-emerald-900/20 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Still Have Questions?
              </span>
            </h3>
            <p className="text-gray-300 mb-6">
              We&apos;re committed to transparency and honest dialogue. If
              there&apos;s something we haven&apos;t covered, we&apos;d love to
              hear from you.
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all duration-300">
              <span className="absolute inset-0 border-2 border-cyan-400 rounded-lg"></span>
              <span className="absolute inset-0 scale-0 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 transition-transform duration-500 group-hover:scale-100"></span>
              <span className="relative text-cyan-300 group-hover:text-white transition-colors duration-300 flex items-center">
                Get In Touch
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
          </div>
        </div>
      </div>
    </section>
  );
}
