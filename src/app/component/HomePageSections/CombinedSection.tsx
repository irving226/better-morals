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
  color?: string;
};

const campaigns: Campaign[] = [
  {
    id: "eco-friendly",
    title: "Eco-Friendly Campaign",
    client: "GreenTech",
    description:
      "This campaign for GreenTech focused on promoting their eco-friendly products, significantly enhancing brand awareness and customer engagement.",
    image: "/eco-friendly-campaign.jpg",
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
    image: "/ai-retail-project.jpg",
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
    image: "/innovative-strategies.jpg",
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
      "Leverage our AI to gain actionable insights, optimize campaigns, and improve ROI. We provide data-driven strategies for maximum impact.",
    icon: "insights",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Personalized Customer Journeys",
    description:
      "Create personalized customer experiences with our AI-powered tools. Enhance engagement and build stronger connections.",
    icon: "user-journey",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Sustainable AI Solutions",
    description:
      "Our AI solutions are designed with sustainability in mind. We help you create eco-friendly campaigns that resonate with your audience.",
    icon: "eco",
    color: "from-emerald-400 to-green-500",
  },
  {
    title: "Real-Time Optimization",
    description:
      "Optimize your marketing efforts in real-time with our AI-powered analytics. Make data-driven decisions and achieve better results faster.",
    icon: "analytics",
    color: "from-amber-400 to-yellow-500",
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

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "insights":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        );
      case "user-journey":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "eco":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M2 22a10 10 0 0 1 20 0" />
            <path d="M16 8a4 4 0 0 1-8 0c0-2.5 2-6 4-6s4 3.5 4 6Z" />
            <path d="M9.17 16.17a2.5 2.5 0 0 1 0 3.66" />
            <path d="M14.83 16.17a2.5 2.5 0 0 0 0 3.66" />
          </svg>
        );
      case "analytics":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 3v18h18" />
            <path d="m18 3-3 7-4-3-5 5-3-2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-blue-500/30" />
          ))}
        </div>
      </div>

      {/* Animated stars/particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            animate={{
              opacity: [0, Math.random() * 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              backgroundColor: `hsl(${Math.random() * 360}, 100%, ${
                70 + Math.random() * 20
              }%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px ${
                Math.random() * 2 + 1
              }px hsl(${Math.random() * 360}, 100%, 80%)`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 -right-20 w-96 h-96 rounded-full z-0"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.3), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full z-0"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(167, 139, 250, 0.3), transparent 70%)",
        }}
      />

      {/* Campaign Carousel Section */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl font-bold tracking-tight text-white mb-4 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-400/30 blur-xl rounded-lg"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">
                Campaigns
              </span>
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto my-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ boxShadow: "0 0 15px rgba(56, 189, 248, 0.7)" }}
          />
        </div>

        <div
          className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm mb-24 shadow-[0_0_25px_rgba(56,189,248,0.2)]"
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
                  {/* Left side - Image with overlay */}
                  <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
                    {/* Dark overlay with animated radial gradient */}
                    <motion.div
                      className="absolute inset-0 z-10 bg-black/50 mix-blend-multiply"
                      animate={{
                        background: [
                          "radial-gradient(circle at 30% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)",
                          "radial-gradient(circle at 70% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)",
                          "radial-gradient(circle at 30% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)",
                        ],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Moving light rays */}
                    <motion.div className="absolute inset-0 z-20 overflow-hidden opacity-20">
                      <motion.div
                        className="absolute h-full w-32 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
                        animate={{
                          left: ["-10%", "110%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>

                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${campaigns[currentIndex].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>

                  {/* Right side - Content with glassmorphism */}
                  <div className="hidden lg:flex w-1/2 h-full items-center p-12 bg-gray-900/50 backdrop-blur-md border-l border-white/10">
                    <div className="max-w-xl relative">
                      {/* Animated accent line */}
                      <motion.div
                        className="absolute left-0 top-0 h-12 w-1 rounded-full"
                        style={{
                          background: `linear-gradient(to bottom, ${campaigns[
                            currentIndex
                          ].color
                            ?.split(" ")[0]
                            .replace("from-", "")} 0%, ${campaigns[
                            currentIndex
                          ].color
                            ?.split(" ")[1]
                            .replace("to-", "")} 100%)`,
                          boxShadow: `0 0 15px ${campaigns[currentIndex].color
                            ?.split(" ")[0]
                            .replace("from-", "")}`,
                        }}
                        animate={{
                          height: ["40px", "80px", "40px"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      />

                      <div className="pl-6">
                        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2">
                          {campaigns[currentIndex].title}
                        </h2>

                        <p className="text-lg text-gray-300 opacity-90 mb-8">
                          {campaigns[currentIndex].description}
                        </p>

                        {/* Tags with neon glow */}
                        <div className="flex flex-wrap gap-4 mb-10">
                          {campaigns[currentIndex].tags.map((tag) => (
                            <motion.span
                              key={tag}
                              className="relative text-white opacity-90 font-medium"
                              whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 8px rgba(255,255,255,0.5)",
                              }}
                            >
                              <span className="relative z-10"># {tag}</span>
                              <motion.span
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r opacity-70"
                                style={{
                                  backgroundImage: `linear-gradient(to right, ${campaigns[
                                    currentIndex
                                  ].color
                                    ?.split(" ")[0]
                                    .replace("from-", "")}, ${campaigns[
                                    currentIndex
                                  ].color
                                    ?.split(" ")[1]
                                    .replace("to-", "")})`,
                                }}
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                              />
                            </motion.span>
                          ))}
                        </div>

                        {/* CTA Button with neon effect */}
                        <motion.a
                          href={campaigns[currentIndex].ctaLink}
                          className="relative inline-flex items-center group"
                          whileHover={{ scale: 1.03 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <span
                            className={`absolute inset-0 bg-gradient-to-r ${campaigns[currentIndex].color} rounded-lg opacity-70 blur-sm group-hover:opacity-100 transition-all duration-300`}
                          ></span>

                          <span className="relative z-10 px-6 py-2 text-white font-medium flex items-center">
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
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Mobile content overlay with glassmorphism */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:hidden backdrop-blur-md bg-gray-900/60 border-t border-gray-700/30 text-white">
                    <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      {campaigns[currentIndex].title}
                    </h2>

                    <p className="text-white/80 mb-4">
                      {campaigns[currentIndex].description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {campaigns[currentIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-white/80 border-b border-white/30 pb-0.5"
                        >
                          # {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={campaigns[currentIndex].ctaLink}
                      className="relative inline-flex items-center group"
                      whileHover={{ scale: 1.03 }}
                    >
                      <span
                        className={`absolute inset-0 bg-gradient-to-r ${campaigns[currentIndex].color} rounded-lg opacity-70 blur-sm group-hover:opacity-100 transition-all duration-300`}
                      ></span>

                      <span className="relative z-10 px-4 py-1.5 text-white font-medium flex items-center text-sm">
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
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows with neon glow */}
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-800/70 text-white rounded-full p-3 backdrop-blur-md z-10 transition-all border border-white/10"
              aria-label="Previous slide"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-800/70 text-white rounded-full p-3 backdrop-blur-md z-10 transition-all border border-white/10"
              aria-label="Next slide"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
            </motion.button>
          </div>

          {/* Progress/Dots Navigation with neon effect */}
          <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-2">
            {campaigns.map((campaign, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="h-1.5 rounded-full transition-all overflow-hidden"
                whileHover={{ scale: 1.2 }}
                style={{
                  width: currentIndex === index ? "2rem" : "1rem",
                  background:
                    currentIndex === index
                      ? `linear-gradient(to right, ${campaign.color
                          ?.split(" ")[0]
                          .replace("from-", "")}, ${campaign.color
                          ?.split(" ")[1]
                          .replace("to-", "")})`
                      : "rgba(255, 255, 255, 0.3)",
                  boxShadow:
                    currentIndex === index
                      ? `0 0 10px ${campaign.color
                          ?.split(" ")[0]
                          .replace("from-", "")}`
                      : "none",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto mt-32">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl font-bold tracking-tight text-white mb-4 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-400/30 blur-xl rounded-lg"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Automated Solutions
              </span>
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto my-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.7)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Card with glassmorphism */}
              <div className="relative h-full">
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur-md transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${feature.color
                      .split(" ")[0]
                      .replace("from-", "")}, ${feature.color
                      .split(" ")[1]
                      .replace("to-", "")})`,
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>

                {/* Glass card */}
                <div className="relative h-full backdrop-blur-xl bg-gray-900/50 border border-gray-700/50 p-6 rounded-xl shadow-2xl overflow-hidden flex flex-col justify-center items-center text-center">
                  {/* Subtle animated gradient line */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                      className="absolute h-px w-full opacity-20"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${feature.color
                          .split(" ")[0]
                          .replace("from-", "")}, transparent)`,
                        top: "30%",
                      }}
                      animate={{ left: ["-100%", "100%"] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 1.5,
                      }}
                    />
                  </div>

                  {/* Icon with glow effect */}
                  <div className="mb-4 relative">
                    <motion.div
                      className="absolute -inset-3 rounded-full blur-md z-0 opacity-50"
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      style={{
                        background: `radial-gradient(circle, ${feature.color
                          .split(" ")[0]
                          .replace("from-", "")}, transparent)`,
                      }}
                    />

                    {/* Icon container with glowing border */}
                    <div
                      className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center bg-gray-900 border"
                      style={{
                        borderColor: feature.color
                          .split(" ")[0]
                          .replace("from-", ""),
                        boxShadow: `0 0 15px ${feature.color
                          .split(" ")[0]
                          .replace("from-", "")}`,
                      }}
                    >
                      <div className="text-white">
                        {renderIcon(feature.icon)}
                      </div>
                    </div>
                  </div>

                  {/* Feature title */}
                  <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    {feature.title}
                  </h3>

                  {/* Feature description */}
                  <p className="text-gray-300 text-sm">{feature.description}</p>

                  {/* Animated link */}
                  <motion.div
                    className="mt-4 inline-flex items-center text-sm font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <span
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}
                    >
                      Learn more
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration with "digital flow" effect */}
        <div className="relative mt-20 w-full h-12 overflow-hidden">
          {/* Animated digital flow lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`flow-${i}`}
              className="absolute h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${
                  i % 2 === 0
                    ? "rgba(56, 189, 248, 0.7)"
                    : "rgba(139, 92, 246, 0.7)"
                }, transparent)`,
                width: "100%",
                top: `${(i + 1) * 15}%`,
                left: 0,
              }}
              animate={{
                translateX: ["-100%", "100%"],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.8,
              }}
            />
          ))}

          {/* Glow dots traveling along the lines */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute rounded-full h-2 w-2 z-10"
              style={{
                background:
                  i === 0
                    ? "rgba(56, 189, 248, 0.9)"
                    : i === 1
                    ? "rgba(139, 92, 246, 0.9)"
                    : "rgba(234, 179, 8, 0.9)",
                boxShadow:
                  i === 0
                    ? "0 0 10px rgba(56, 189, 248, 0.9)"
                    : i === 1
                    ? "0 0 10px rgba(139, 92, 246, 0.9)"
                    : "0 0 10px rgba(234, 179, 8, 0.9)",
                top: `${i * 30 + 10}%`,
              }}
              animate={{
                left: ["-5%", "105%"],
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                left: {
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.5,
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
