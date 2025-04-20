"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Campaign = {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  ctaText: string;
  ctaLink: string;
};

const campaigns: Campaign[] = [
  {
    id: "eco-friendly",
    title: "Eco-Friendly Campaign",
    client: "GreenTech",
    description:
      "This campaign for GreenTech focused on promoting their eco-friendly products, significantly enhancing brand awareness and customer engagement.",
    image: "/eco-friendly-campaigns.jpg",
    tags: [
      "Increased Brand Awareness",
      "Enhanced Customer Engagement",
      "Eco-Friendly Focus",
    ],
    ctaText: "View Project",
    ctaLink: "/projects/eco-friendly",
  },
  {
    id: "ai-integration",
    title: "AI Integration Project",
    client: "Retail Innovators",
    description:
      "We collaborated with a leading retail brand to implement AI solutions, resulting in a remarkable boost in sales and customer satisfaction.",
    image: "/ai-retail-project.jpg",
    tags: [
      "Boosted Sales",
      "Improved Customer Satisfaction",
      "Innovative AI Solutions",
    ],
    ctaText: "Discover More",
    ctaLink: "/projects/ai-retail",
  },
  {
    id: "innovative-strategies",
    title: "Innovative Strategies",
    client: "Various Clients",
    description:
      "Our team continuously develops cutting-edge marketing strategies that align with our clients' values, ensuring impactful results and sustainability.",
    image: "/innovative-strategies.jpg",
    tags: [
      "Cutting-Edge Marketing",
      "Sustainable Practices",
      "Client-Centric Solutions",
    ],
    ctaText: "Explore Services",
    ctaLink: "/services",
  },
];

const features = [
  {
    title: "AI-Driven Insights",
    description:
      "Leverage our AI to gain actionable insights, optimize campaigns, and improve ROI. We provide data-driven strategies for maximum impact.",
  },
  {
    title: "Personalized Customer Journeys",
    description:
      "Create personalized customer experiences with our AI-powered tools. Enhance engagement and build stronger connections.",
  },
  {
    title: "Sustainable AI Solutions",
    description:
      "Our AI solutions are designed with sustainability in mind. We help you create eco-friendly campaigns that resonate with your audience.",
  },
  {
    title: "Real-Time Optimization",
    description:
      "Optimize your marketing efforts in real-time with our AI-powered analytics. Make data-driven decisions and achieve better results faster.",
  },
];

export default function CombinedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTime = 5000; // 5 seconds

  // Handle autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        navigateWithDirection(
          currentIndex === campaigns.length - 1 ? 0 : currentIndex + 1
        );
      }, autoplayTime);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const navigateWithDirection = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === campaigns.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    navigateWithDirection(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? campaigns.length - 1 : currentIndex - 1;
    navigateWithDirection(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    navigateWithDirection(slideIndex);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top curve transition */}
      <div className="absolute top-0 left-0 w-full -translate-y-full z-0 pointer-events-none">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            fill="#ecfdf5"
          />
        </svg>
      </div>

      {/* Campaign Carousel Section */}
      <div className="relative z-10">
        <div
          className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-white/20 bg-white/30 backdrop-blur-sm mb-24"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel */}
          <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute w-full h-full"
              >
                <div className="relative h-full w-full flex">
                  {/* Left side - Image */}
                  <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
                    <div
                      className="w-full h-full bg-gray-200"
                      style={{
                        backgroundImage: `url(${campaigns[currentIndex].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Gradient overlay for better text visibility on mobile */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:hidden"></div>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="hidden lg:flex w-1/2 h-full items-center p-12 bg-white/30 backdrop-blur-sm">
                    <div className="max-w-xl">
                      <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        {campaigns[currentIndex].title}
                      </h2>

                      <p className="text-lg text-gray-700 mb-8">
                        {campaigns[currentIndex].description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-4 mb-10">
                        {campaigns[currentIndex].tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-emerald-700 font-medium"
                          >
                            # {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <a
                        href={campaigns[currentIndex].ctaLink}
                        className="inline-flex items-center text-emerald-600 font-medium"
                      >
                        {campaigns[currentIndex].ctaText}
                        <svg
                          className="ml-2 w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Mobile content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:hidden bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h2 className="text-3xl font-bold mb-4">
                      {campaigns[currentIndex].title}
                    </h2>

                    <p className="text-white/90 mb-4">
                      {campaigns[currentIndex].description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {campaigns[currentIndex].tags.map((tag) => (
                        <span key={tag} className="text-white/90">
                          # {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={campaigns[currentIndex].ctaLink}
                      className="inline-flex items-center text-white font-medium"
                    >
                      {campaigns[currentIndex].ctaText}
                      <svg
                        className="ml-2 w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
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

          {/* Progress/Dots Navigation */}
          <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-2">
            {campaigns.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-8 bg-emerald-600"
                    : "w-4 bg-gray-300 opacity-70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our AI-Powered Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/20 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-white/20"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-800 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-white/0 to-white pointer-events-none z-0" />
    </section>
  );
}
