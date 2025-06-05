"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// It's good practice to define variants if animations get more complex,
// but for this component, inline props are still manageable.
// const DURATION_PRIMARY = 0.6;
// const DURATION_SECONDARY = 0.4;

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      id: "plastic-to-purpose",
      title: "Plastic to Purpose",
      subtitle: "Environmental Awareness Campaign",
      description:
        "We partnered with coastal NGOs and youth creators to launch an immersive AR filter that visualized ocean plastic levels in real time. The campaign generated 9.2M organic views, and helped pass a local plastics ban.",
      color: "emerald",
      image: "/images/case-environmental.jpg", // Note: This image is not currently used in the template. Consider using next/image if you implement it.
      journey: [
        {
          phase: "Discovery",
          title: "The Problem Was Invisible",
          content:
            "Ocean plastic pollution affects 1 billion people globally, but it's abstract. People see headlines, not reality. Our client, Coastal Alliance, needed to make the invisible visible.",
          metrics: "Research Phase: 60 days",
          visual: "🔍",
          bg: "from-red-900/20 to-orange-900/20",
        },
        {
          phase: "Strategy",
          title: "AR + Real Data = Empathy",
          content:
            "We developed an AR filter that overlays real-time ocean plastic data onto users' camera feeds. When you point your phone at any body of water, you see the actual pollution levels as floating debris.",
          metrics: "Development: 90 days, 3 NGO partnerships",
          visual: "🎯",
          bg: "from-blue-900/20 to-cyan-900/20",
        },
        {
          phase: "Creative",
          title: "Youth Creators as Storytellers",
          content:
            "Rather than corporate messaging, we empowered 50+ young environmental activists to create authentic content using our AR tool. Their genuine reactions drove organic spread.",
          metrics: "50 creators, 12 countries, 0 paid promotion",
          visual: "🎨",
          bg: "from-purple-900/20 to-pink-900/20",
        },
        {
          phase: "Launch",
          title: "Viral Truth-Telling",
          content:
            "The filter launched during World Ocean Day. Within 48 hours, it was trending on TikTok. Users were shocked to see their local beaches' real pollution data overlaid in AR.",
          metrics: "9.2M organic views in first month",
          visual: "🚀",
          bg: "from-emerald-900/20 to-teal-900/20",
        },
        {
          phase: "Impact",
          title: "Policy Change in 6 Months",
          content:
            "The campaign created undeniable public pressure. Local footage of pollution data went viral, forcing city councils to act. Three coastal cities passed plastic bans within 6 months.",
          metrics: "3 cities, 2.4M people affected, 67% plastic reduction",
          visual: "🏛️",
          bg: "from-green-900/20 to-emerald-900/20",
        },
      ],
    },
    {
      id: "brains-behind-brand",
      title: "Brains Behind the Brand",
      subtitle: "AI-Powered Personalization at Scale",
      description:
        "BetterMorals helped a mid-sized retailer overhaul their marketing stack using AI to drive real-time creative adaptation. Result: 3x ad ROAS and a 47% drop in unsubscribes.",
      color: "cyan",
      image: "/images/case-ai.jpg", // Note: This image is not currently used.
      journey: [
        {
          phase: "Challenge",
          title: "Generic Ads, Generic Results",
          content:
            "ThreadCraft, a sustainable fashion retailer, was hemorrhaging money on Facebook ads. Their one-size-fits-all creative was getting 0.8% CTR and massive unsubscribe rates.",
          metrics: "0.8% CTR, 23% unsubscribe rate, -$80K/month",
          visual: "📉",
          bg: "from-red-900/20 to-orange-900/20",
        },
        {
          phase: "AI Ethics Framework",
          title: "Human-Centered AI Strategy",
          content:
            "We built an AI system that personalizes creative in real-time, but with strict ethical guardrails. No psychological manipulation, no dark patterns, just relevant content that respects user autonomy.",
          metrics: "127 ethical guidelines implemented",
          visual: "🧠",
          bg: "from-blue-900/20 to-indigo-900/20",
        },
        {
          phase: "Creative Engine",
          title: "Dynamic Content Generation",
          content:
            "Our AI analyzes user behavior patterns (with consent) to generate personalized ad creative. Someone interested in workwear gets different messaging than someone Browse evening wear.",
          metrics: "2,847 unique creative variations generated",
          visual: "⚡",
          bg: "from-cyan-900/20 to-blue-900/20",
        },
        {
          phase: "Testing & Learning",
          title: "Transparent A/B Framework",
          content:
            "Every change was tested transparently. Users could see why they were shown specific content and opt-out anytime. Transparency actually increased trust and engagement.",
          metrics: "156 A/B tests, 89% user trust score",
          visual: "🧪",
          bg: "from-purple-900/20 to-indigo-900/20",
        },
        {
          phase: "Results",
          title: "Ethics + Performance = Magic",
          content:
            "Ethical AI delivered better results than manipulative tactics. Users felt respected, not exploited. The algorithm optimized for long-term customer value, not just clicks.",
          metrics: "3x ROAS, 47% fewer unsubscribes, 67% higher LTV",
          visual: "📈",
          bg: "from-emerald-900/20 to-cyan-900/20",
        },
      ],
    },
    {
      id: "fractals-farmers",
      title: "Fractals for Farmers",
      subtitle: "Rural Tech Innovation Campaign",
      description:
        "We turned technical complexity into clarity by illustrating how decentralized sensors helped farmers reduce water usage by 60%. Our interactive microsite and animated explainers won 2 Webby awards.",
      color: "violet",
      image: "/images/case-innovation.jpg", // Note: This image is not currently used.
      journey: [
        {
          phase: "Complexity Challenge",
          title: "Genius Tech, Terrible Communication",
          content:
            "AgroSense had revolutionary soil sensors that could save farmers millions in water costs. Problem: explaining 'mesh network IoT with ML-driven irrigation optimization' to farmers.",
          metrics: "12% farmer adoption rate, high tech barriers",
          visual: "🤯",
          bg: "from-red-900/20 to-yellow-900/20",
        },
        {
          phase: "Simplification",
          title: "From Jargon to Journey",
          content:
            "We reframed the story: 'What if your fields could tell you exactly when they're thirsty?' Complex algorithms became simple conversations between farmers and their land.",
          metrics: "Zero technical jargon in final messaging",
          visual: "💡",
          bg: "from-orange-900/20 to-yellow-900/20",
        },
        {
          phase: "Visual Storytelling",
          title: "Interactive Learning Experience",
          content:
            "We built an interactive microsite where farmers could 'plant' virtual crops and see how the sensor network saves water in real-time. Learning through play, not lectures.",
          metrics: "12-minute average session time",
          visual: "🎮",
          bg: "from-green-900/20 to-blue-900/20",
        },
        {
          phase: "Community Building",
          title: "Farmer-to-Farmer Stories",
          content:
            "We documented real farmers' water savings and let them tell their own stories. Peer credibility trumped corporate messaging every time.",
          metrics: "47 farmer video testimonials, 89% trust score",
          visual: "👥",
          bg: "from-blue-900/20 to-purple-900/20",
        },
        {
          phase: "Recognition",
          title: "Industry Transformation",
          content:
            "The campaign didn't just sell sensors—it changed how agtech companies communicate. Complex became simple, corporate became human. 60% water reduction became the new standard.",
          metrics: "2 Webby Awards, 60% water reduction, industry adoption",
          visual: "🏆",
          bg: "from-violet-900/20 to-purple-900/20",
        },
      ],
    },
  ];

  const textColorMap = {
    emerald: "text-emerald-400",
    cyan: "text-cyan-400",
    violet: "text-violet-400",
  };

  const borderColorMap = {
    emerald: "border-emerald-500/30",
    cyan: "border-cyan-500/30",
    violet: "border-violet-500/30",
  };

  const handleCaseClick = (caseItem) => {
    // OPTIMIZATION: Scroll to top instantly before state change to ensure
    // the new view appears at the top without conflicting scroll animations.
    window.scrollTo({ top: 0, behavior: "auto" });
    setSelectedCase(caseItem);
    setCurrentSlide(0);
    // Removed setTimeout for scrolling, as it's now handled instantly or
    // could be handled by onAnimationComplete of the detail view if preferred.
  };

  const nextSlide = () => {
    if (selectedCase && currentSlide < selectedCase.journey.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const closeDetailView = () => {
    // OPTIMIZATION: Consider scrolling to a relevant position if needed when returning to grid.
    // For now, default browser behavior will maintain scroll or reset based on content height.
    setSelectedCase(null);
    setCurrentSlide(0);
  };

  return (
    <section className="relative bg-gray-950 text-white min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Effects: These can be performance-intensive due to blur.
          If issues arise, consider simplifying or reducing blur radius. */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 bg-gradient-to-br from-cyan-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full opacity-15 bg-gradient-to-br from-purple-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full opacity-10 bg-gradient-to-br from-emerald-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-cyan-500/10" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!selectedCase ? (
            <motion.div
              key="grid"
              layout // OPTIMIZATION: Animate layout changes smoothly when switching views.
              initial={{ opacity: 1 }} // No y animation needed if layout handles position
              exit={{ opacity: 0, transition: { duration: 0.3 } }} // Faster exit
              // transition={{ duration: 0.5, ease: "easeInOut" }} // Original
              className="pb-10" // Add some padding at the bottom if content is short
            >
              <motion.h1
                className="text-5xl font-extrabold text-center mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
                  Our Work Speaks Louder Than Claims
                </span>
              </motion.h1>
              <motion.p
                className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We don't do case studies to brag. We do them to show how ethical
                creativity scales. Click any project to explore the full
                journey.
              </motion.p>
              <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {cases.map((c, i) => (
                  <motion.div
                    key={c.id} // OPTIMIZATION: Use stable 'id' for key.
                    layout // OPTIMIZATION: Helps if grid items reflow due to other changes.
                    className={`group rounded-2xl overflow-hidden border ${
                      borderColorMap[c.color]
                    } bg-gray-900/80 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-opacity-60 cursor-pointer`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.7 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    onClick={() => handleCaseClick(c)}
                    // OPTIMIZATION: Hint to browser about upcoming animations.
                    style={{ willChange: "transform, opacity" }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        c.color === "emerald"
                          ? "from-emerald-500/5"
                          : c.color === "cyan"
                          ? "from-cyan-500/5"
                          : "from-violet-500/5"
                      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div className="relative h-56 overflow-hidden">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${
                          c.color === "emerald"
                            ? "from-emerald-600 to-emerald-800"
                            : c.color === "cyan"
                            ? "from-cyan-600 to-cyan-800"
                            : "from-violet-600 to-violet-800"
                        } flex items-center justify-center`}
                      >
                        <span className="text-6xl opacity-30">
                          {c.color === "emerald"
                            ? "🌱"
                            : c.color === "cyan"
                            ? "🤖"
                            : "🚀"}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    </div>
                    <div className="relative p-6">
                      <h2 className="text-2xl font-bold mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-emerald-300 transition-all duration-300">
                        {c.title}
                      </h2>
                      <p
                        className={`${textColorMap[c.color]} font-medium mb-4`}
                      >
                        {c.subtitle}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {c.description}
                      </p>
                      <div className="flex items-center text-xs text-cyan-400">
                        <span>Click to explore the journey</span>
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              layout // OPTIMIZATION: Animate layout changes smoothly.
              initial={{ opacity: 0 }} // y animation might not be needed if layout handles position
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.1 },
              }} // slightly faster, slight delay for exit to clear
              exit={{ opacity: 0, transition: { duration: 0.3 } }} // faster exit
              // transition={{ duration: 0.6, ease: "easeOut" }} // Original
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <motion.button
                  onClick={closeDetailView}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to all cases
                </motion.button>
                <motion.div
                  className="text-sm text-gray-400"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {currentSlide + 1} of {selectedCase.journey.length}
                </motion.div>
              </div>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-4">
                  {selectedCase.journey.map((step, index) => (
                    <div
                      key={index} // index is fine if journey array order is stable for a selectedCase
                      className="flex flex-col items-center flex-1"
                    >
                      <button
                        onClick={() => goToSlide(index)}
                        className={`w-12 h-12 rounded-full border-2 transition-all mb-2 ${
                          index <= currentSlide
                            ? `border-${selectedCase.color}-500 bg-${selectedCase.color}-500/20`
                            : "border-gray-600 bg-gray-800/50"
                        }`}
                      >
                        <span className="text-xl">{step.visual}</span>
                      </button>
                      <div
                        className={`text-xs font-medium ${
                          index <= currentSlide
                            ? textColorMap[selectedCase.color]
                            : "text-gray-500"
                        }`}
                      >
                        {step.phase}
                      </div>
                    </div>
                  ))}
                </div>
                {/* OPTIMIZATION: Progress bar using scaleX for potentially smoother animation */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${
                      selectedCase.color === "emerald"
                        ? "from-emerald-500 to-emerald-400"
                        : selectedCase.color === "cyan"
                        ? "from-cyan-500 to-cyan-400"
                        : "from-violet-500 to-violet-400"
                    } origin-left`} // Ensure scale originates from the left
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: (currentSlide + 1) / selectedCase.journey.length,
                    }}
                    transition={{ duration: 0.3, ease: "linear" }}
                  />
                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  layout // OPTIMIZATION: Animates height changes between slides smoothly.
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  // OPTIMIZATION: Hint to browser about upcoming animations.
                  style={{ willChange: "transform, opacity" }}
                  className={`rounded-3xl overflow-hidden bg-gradient-to-br ${selectedCase.journey[currentSlide].bg} border border-gray-700/50 backdrop-blur-md shadow-2xl min-h-[500px]`}
                >
                  <div className="p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                              selectedCase.color === "emerald"
                                ? "from-emerald-500 to-emerald-600"
                                : selectedCase.color === "cyan"
                                ? "from-cyan-500 to-cyan-600"
                                : "from-violet-500 to-violet-600"
                            } flex items-center justify-center text-2xl shadow-lg`}
                          >
                            {selectedCase.journey[currentSlide].visual}
                          </div>
                          <div>
                            <div
                              className={`text-sm font-medium ${
                                textColorMap[selectedCase.color]
                              } mb-1`}
                            >
                              {selectedCase.journey[currentSlide].phase}
                            </div>
                            <h2 className="text-3xl font-bold text-white">
                              {selectedCase.journey[currentSlide].title}
                            </h2>
                          </div>
                        </div>
                        <p className="text-xl text-gray-200 leading-relaxed mb-8">
                          {selectedCase.journey[currentSlide].content}
                        </p>
                        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                          <div className="text-sm text-gray-400 mb-2">
                            Key Metrics
                          </div>
                          <div className="text-lg font-semibold text-white">
                            {selectedCase.journey[currentSlide].metrics}
                          </div>
                        </div>
                      </div>
                      <div className="lg:flex items-center justify-center hidden">
                        <div
                          className={`w-80 h-80 rounded-full bg-gradient-to-br ${
                            selectedCase.color === "emerald"
                              ? "from-emerald-500/20 to-emerald-600/20"
                              : selectedCase.color === "cyan"
                              ? "from-cyan-500/20 to-cyan-600/20"
                              : "from-violet-500/20 to-violet-600/20"
                          } flex items-center justify-center border border-gray-700/30`}
                        >
                          <span className="text-8xl opacity-40">
                            {selectedCase.journey[currentSlide].visual}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <motion.div
                className="flex justify-between items-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">
                    {selectedCase.title}
                  </h3>
                  <p className={`text-sm ${textColorMap[selectedCase.color]}`}>
                    {selectedCase.subtitle}
                  </p>
                </div>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === selectedCase.journey.length - 1}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedCase && (
          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all duration-300"
            >
              <span className="absolute inset-0 border-2 border-cyan-400 rounded-lg"></span>
              <span className="absolute inset-0 scale-0 rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-600 transition-transform duration-500 group-hover:scale-100"></span>
              <span className="relative text-cyan-300 group-hover:text-white transition-colors duration-300 flex items-center">
                Let's Build Something Worth Bragging About
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
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
