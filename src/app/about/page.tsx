"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Our History",
    desc: "We built a legacy on ethical impact, partnering with brands to lead with responsibility. Since our founding, we've pioneered AI-powered marketing that respects user privacy and promotes transparency across all campaigns.",
    icon: "history",
    color: "from-cyan-400 to-teal-300",
  },
  {
    title: "Our Mission",
    desc: "We design marketing systems that prioritize sustainability and long-term client value. Our quantum-enhanced algorithms identify authentic engagement opportunities while eliminating manipulative tactics that damage brand trust.",
    icon: "target",
    color: "from-purple-400 to-fuchsia-300",
  },
  {
    title: "Meet the Team",
    desc: "Led by experts in AI and marketing who walk the walk—not just talk it. Our diverse team combines neuroscience backgrounds with ethical tech development to create campaigns that resonate on a deeper human level.",
    icon: "team",
    color: "from-blue-400 to-indigo-300",
  },
];

export default function DiscoverSection() {
  // Track window dimensions for responsive adjustments
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    // Get viewport width for responsive adjustments
    const updateWindowDimensions = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  // Render icons based on the feature
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "history":
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
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case "target":
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
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
      case "team":
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
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-hidden py-24 bg-gray-950 text-white">
      {/* Static ambient glow background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-purple-500/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Geometric grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-cyan-500/10" />
          ))}
        </div>
      </div>

      {/* Abstract digital lines */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            style={{
              top: `${10 + i * 8}%`,
              left: 0,
              right: 0,
              opacity: 0.1 + (i % 3) * 0.1,
            }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
            style={{
              left: `${15 + i * 8}%`,
              top: 0,
              bottom: 0,
              opacity: 0.1 + (i % 3) * 0.1,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              backgroundColor: `hsl(${180 + Math.random() * 60}, 100%, ${
                70 + Math.random() * 20
              }%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${
                Math.random() * 3 + 1
              }px hsl(${180 + Math.random() * 60}, 100%, 80%)`,
              animation: `float-particle ${
                Math.random() * 30 + 20
              }s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Discover{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-cyan-600/30 to-cyan-400/30 blur-xl rounded-lg"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                Better Morals
              </span>
            </span>{" "}
            Marketing
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto my-8 rounded-full shadow-glow"></div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ethical AI-powered campaigns that drive impact—without compromising
            your values. Explore our vision below.
          </p>
        </motion.div>

        {/* All sections open by default */}
        <div className="flex flex-col space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg border border-gray-800 bg-gray-900/60 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10`}
              ></div>

              {/* Neon border effect */}
              <div className="absolute inset-0 rounded-lg pointer-events-none">
                <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <div className="absolute inset-y-0 w-px right-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                <div className="absolute inset-y-0 w-px left-0 bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
              </div>

              {/* Header bar */}
              <div className="flex items-center px-6 py-4 border-b border-gray-800/50">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br ${feature.color}`}
                  >
                    {renderIcon(feature.icon)}
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h2>
                </div>
              </div>

              {/* Content (always visible) */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              >
                <p className="text-gray-300 leading-relaxed mb-4">
                  {feature.desc}
                </p>
                <motion.button
                  className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-100 transition-colors duration-300 group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <span>Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all duration-300">
            <span className="absolute inset-0 border-2 border-cyan-400 rounded-lg"></span>
            <span className="absolute inset-0 scale-0 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 transition-transform duration-500 group-hover:scale-100"></span>
            <span className="relative text-cyan-300 group-hover:text-white transition-colors duration-300 flex items-center">
              Join Our Vision
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(
              ${Math.random() * 100 - 50}px,
              ${Math.random() * 100 - 50}px
            );
          }
          50% {
            transform: translate(
              ${Math.random() * 100 - 50}px,
              ${Math.random() * 100 - 50}px
            );
          }
          75% {
            transform: translate(
              ${Math.random() * 100 - 50}px,
              ${Math.random() * 100 - 50}px
            );
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .shadow-glow {
          box-shadow: 0 0 15px 2px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </section>
  );
}
