"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Campaign = {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  ctaText: string;
  ctaLink: string;
  color?: string;
};

const campaigns: Campaign[] = [
  {
    id: "eco-friendly",
    title: "Eco-Friendly Campaign",
    client: "GreenTech",
    description:
      "This campaign for GreenTech focused on promoting their eco-friendly products, significantly enhancing brand awareness and customer engagement.",
    image: "/meeting.jpg", // Using existing image
    tags: [
      "Increased Brand Awareness",
      "Enhanced Customer Engagement",
      "Eco-Friendly Focus",
    ],
    ctaText: "View Project",
    ctaLink: "/projects/eco-friendly",
    color: "from-emerald-400 to-cyan-500",
  },
  {
    id: "ai-integration",
    title: "AI Integration Project",
    client: "Retail Innovators",
    description:
      "We collaborated with a leading retail brand to implement AI solutions, resulting in a remarkable boost in sales and customer satisfaction.",
    image: "/meeting.jpg", // Using existing image
    tags: [
      "Boosted Sales",
      "Improved Customer Satisfaction",
      "Innovative AI Solutions",
    ],
    ctaText: "Discover More",
    ctaLink: "/projects/ai-retail",
    color: "from-purple-400 to-fuchsia-500",
  },
  {
    id: "innovative-strategies",
    title: "Innovative Strategies",
    client: "Various Clients",
    description:
      "Our team continuously develops cutting-edge marketing strategies that align with our clients' values, ensuring impactful results and sustainability.",
    image: "/meeting.jpg", // Using existing image
    tags: [
      "Cutting-Edge Marketing",
      "Sustainable Practices",
      "Client-Centric Solutions",
    ],
    ctaText: "Explore Services",
    ctaLink: "/services",
    color: "from-amber-400 to-yellow-500",
  },
];

const features = [
  {
    title: "AI-Driven Insights",
    description:
      "Leverage our AI to gain actionable insights, optimize campaigns, and improve ROI with data-driven strategies.",
    icon: "💡",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Personalized Journeys",
    description:
      "Create personalized customer experiences with our AI-powered tools to enhance engagement.",
    icon: "🎯",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Sustainable Solutions",
    description:
      "Our AI solutions are designed with sustainability in mind for eco-friendly campaigns.",
    icon: "🌱",
    color: "from-emerald-400 to-green-500",
  },
  {
    title: "Real-Time Optimization",
    description:
      "Optimize your marketing efforts in real-time with AI-powered analytics and insights.",
    icon: "📊",
    color: "from-amber-400 to-yellow-500",
  },
];

export default function CombinedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTime = 5000;

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Simplified navigation
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === campaigns.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? campaigns.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(goToNext, autoplayTime);
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
      {/* Simple animated background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full grid grid-cols-8 sm:grid-cols-12">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-blue-500/30" />
          ))}
        </div>
      </div>

      {/* Simplified floating elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>

      {/* Campaign Carousel Section */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
              Our Campaigns
            </span>
          </motion.h2>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Simplified Carousel */}
        <div
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm mb-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative min-h-[400px] sm:min-h-[450px] lg:h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col lg:flex-row"
              >
                {/* Image Section */}
                <div className="relative h-56 sm:h-64 lg:h-full lg:w-1/2 overflow-hidden">
                  <Image
                    src={campaigns[currentIndex].image}
                    alt={campaigns[currentIndex].title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center min-h-0">
                  <div className="mb-2">
                    <span className="text-sm text-gray-400">
                      {campaigns[currentIndex].client}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {campaigns[currentIndex].title}
                  </h3>

                  <p className="text-gray-300 mb-6 text-sm sm:text-base">
                    {campaigns[currentIndex].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {campaigns[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs sm:text-sm text-white/80 border border-white/20 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto pt-4">
                    <motion.a
                      href={campaigns[currentIndex].ctaLink}
                      className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${campaigns[currentIndex].color} text-white font-medium text-sm hover:opacity-90 transition-opacity w-fit`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {campaigns[currentIndex].ctaText}
                      <svg
                        className="ml-2 w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm z-10 transition-all"
              aria-label="Previous slide"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm z-10 transition-all"
              aria-label="Next slide"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {campaigns.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              AI Solutions
            </span>
          </motion.h2>

          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-full backdrop-blur-sm bg-gray-900/50 border border-gray-700/50 p-4 sm:p-6 rounded-xl text-center hover:border-gray-600/50 transition-all">
                {/* Icon */}
                <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4">
                  {feature.description}
                </p>

                {/* Learn more link */}
                <div className="inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}
                  >
                    Learn more
                  </span>
                  <svg
                    className="ml-1 w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
