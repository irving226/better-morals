import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const renderIcon = (iconName: string, size = 6) => {
  switch (iconName) {
    case "leaf":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-${size} h-${size}`}
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case "chart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-${size} h-${size}`}
        >
          <path d="M3 3v18h18" />
          <path d="m18 3-3 7-4-3-5 5-3-2" />
        </svg>
      );
    case "compass":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-${size} h-${size}`}
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "settings":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-${size} h-${size}`}
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "bolt":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-${size} h-${size}`}
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "shield":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-${size} h-${size}`}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "users":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-${size} h-${size}`}
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-${size} h-${size}`}
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      );
    // New neon gear icon for Systems
    case "neon-gear":
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-${size} h-${size}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <g
            fill="none"
            stroke="url(#systemsGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M3.34 17a10 10 0 0 0 2.82 2.82l1.54-1.54a2 2 0 0 1 2.24-.39 7.2 7.2 0 0 0 2.12.42 2 2 0 0 1 1.94 2V22a10 10 0 0 0 4 0v-1.7a2 2 0 0 1 1.94-2 7.2 7.2 0 0 0 2.12-.42 2 2 0 0 1 2.24.39l1.54 1.54a10 10 0 0 0 2.82-2.82l-1.54-1.54a2 2 0 0 1-.39-2.24 7.2 7.2 0 0 0 .42-2.12 2 2 0 0 1 2-1.94H22a10 10 0 0 0 0-4h-1.7a2 2 0 0 1-2-1.94 7.2 7.2 0 0 0-.42-2.12 2 2 0 0 1 .39-2.24l1.54-1.54a10 10 0 0 0-2.82-2.82l-1.54 1.54a2 2 0 0 1-2.24.39 7.2 7.2 0 0 0-2.12-.42 2 2 0 0 1-1.94-2V2a10 10 0 0 0-4 0v1.7a2 2 0 0 1-1.94 2 7.2 7.2 0 0 0-2.12.42 2 2 0 0 1-2.24-.39L6.16 4.2A10 10 0 0 0 3.34 7l1.54 1.54a2 2 0 0 1 .39 2.24 7.2 7.2 0 0 0-.42 2.12 2 2 0 0 1-2 1.94H2a10 10 0 0 0 0 4h1.7a2 2 0 0 1 2 1.94 7.2 7.2 0 0 0 .42 2.12 2 2 0 0 1-.39 2.24z" />
          </g>
          <defs>
            <linearGradient
              id="systemsGradient"
              x1="2"
              y1="2"
              x2="22"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </motion.svg>
      );
    // New neon story icon
    case "neon-story":
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-${size} h-${size}`}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <g
            fill="none"
            stroke="url(#storiesGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8c0-3.5 2.5-5 5-5h8c2.5 0 5 1.5 5 5v8c0 3.5-2.5 5-5 5H8c-2.5 0-5-1.5-5-5V8Z" />
            <path d="M12 18.5v-13" />
            <path d="M12 5.5c2.5 0 5 1.3 5 3 0 1.8-1.5 3-5 3-3.5 0-5-1.2-5-3 0-1.7 2.5-3 5-3Z" />
            <path d="M12 18.5c-2.5 0-5-1.2-5-3v-7" />
            <path d="M17 15.5v-7c0 1.8-2.5 3-5 3" />
          </g>
          <defs>
            <linearGradient
              id="storiesGradient"
              x1="3"
              y1="3"
              x2="21"
              y2="21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C084FC" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </motion.svg>
      );
    // New neon morals/shield icon
    case "neon-shield":
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-${size} h-${size}`}
          animate={{
            opacity: [0.9, 1, 0.9],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <g
            fill="none"
            stroke="url(#moralsGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 11h6" />
            <path d="M12 8v6" />
          </g>
          <defs>
            <linearGradient
              id="moralsGradient"
              x1="4"
              y1="2"
              x2="20"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FACC15" />
              <stop offset="1" stopColor="#EAB308" />
            </linearGradient>
          </defs>
        </motion.svg>
      );
    default:
      return null;
  }
};

export default function OurEthos() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      return {
        key: `star-${i}`,
        opacity: Math.random() * 0.7,
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 8,
        size: Math.random() * 3 + 1,
        hue: 180 + Math.random() * 60,
        lightness: 70 + Math.random() * 20,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        blur: Math.random() * 4 + 2,
        spread: Math.random() * 2 + 1,
      };
    });
  }, []);
  const coreValues = [
    {
      title: "Better Systems",
      icon: "settings",
      neonIcon: "neon-gear",
      bgColor: "bg-emerald-400",
      glowColor: "from-cyan-500 to-blue-500",
    },
    {
      title: "Better Stories",
      icon: "compass",
      neonIcon: "neon-story",
      bgColor: "bg-purple-400",
      glowColor: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Better Morals",
      icon: "shield",
      neonIcon: "neon-shield",
      bgColor: "bg-amber-400",
      glowColor: "from-yellow-500 to-amber-500",
    },
  ];

  const clientTypes = [
    "Creators & artists who want systems that scale",
    "Ethical, sustainable and cruelty free brands",
    "Startups and small brands ready for the next level",
    "Collectives, communities, and ethical companies on a mission",
    "Entertainment & gaming brands pushing boundaries",
    "Innovators and tech disruptors building the future",
  ];

  return (
    <>
      {/* Who We Work With - Completely redesigned with cohesive dark theme */}
      <section className="relative py-32 overflow-hidden bg-gray-950">
        {/* Subtle animated background grid */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-cyan-500/30" />
            ))}
          </div>
        </div>

        {/* Animated stars/particles */}
        {isClient &&
          stars.map((star) => (
            <motion.div
              key={star.key}
              className="absolute rounded-full"
              animate={{ opacity: [0, star.opacity, 0], scale: [0, 1, 0] }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: `hsl(${star.hue}, 100%, ${star.lightness}%)`,
                top: star.top,
                left: star.left,
                boxShadow: `0 0 ${star.blur}px ${star.spread}px hsl(${star.hue}, 100%, 80%)`,
              }}
            />
          ))}

        {/* Glowing orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full z-0"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
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
              "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)",
          }}
        />

        {/* Enhanced Core Values */}
        <div className="max-w-6xl mx-auto px-6 relative z-10 mb-20">
          <div className="text-center mb-12">
            <motion.h2
              className="text-5xl font-bold tracking-tight text-white mb-4 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-cyan-600/30 to-cyan-400/30 blur-xl rounded-lg"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                  Our Ethos
                </span>
              </span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto my-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ boxShadow: "0 0 15px rgba(6, 182, 212, 0.7)" }}
            />
          </div>

          {/* Core values with new neon icons */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-24 relative z-10 mb-16">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* New Neon Icon Container */}
                <div className="mb-5 relative">
                  {/* Animated glow pulse */}
                  <motion.div
                    className="absolute -inset-3 rounded-full blur-md z-0 opacity-70"
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
                      background:
                        index === 0
                          ? "radial-gradient(circle, rgba(6, 182, 212, 0.6), transparent)"
                          : index === 1
                          ? "radial-gradient(circle, rgba(139, 92, 246, 0.6), transparent)"
                          : "radial-gradient(circle, rgba(234, 179, 8, 0.6), transparent)",
                    }}
                  />

                  {/* New Stylized Icon */}
                  <div
                    className={`relative w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center z-10 border ${
                      index === 0
                        ? "border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        : index === 1
                        ? "border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                        : "border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.5)]"
                    }`}
                  >
                    {renderIcon(value.neonIcon, 10)}
                  </div>
                </div>

                {/* Text with improved visibility */}
                <h3 className="text-2xl font-bold text-white relative z-10">
                  {/* Text shadow for better readability */}
                  <motion.span
                    className="relative"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.8)",
                        "0 0 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.9)",
                        "0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.8)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {value.title}
                  </motion.span>
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Mission statement */}
          <motion.div
            className="relative mx-auto py-8 px-6 backdrop-blur-xl bg-gray-800/30 border border-gray-700/40 rounded-xl shadow-2xl max-w-4xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Digital flowing lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={`h-${i}`}
                  className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                  style={{
                    top: `${30 + i * 30}%`,
                    left: 0,
                    right: 0,
                  }}
                  initial={{ opacity: 0, translateX: "-100%" }}
                  animate={{
                    opacity: 0.4,
                    translateX: "100%",
                    transition: {
                      opacity: { duration: 0.5 },
                      translateX: {
                        duration: 15 + i * 3,
                        ease: "linear",
                        repeat: Infinity,
                        delay: i * 0.8,
                      },
                    },
                  }}
                />
              ))}
            </div>

            <p className="text-gray-100 text-xl text-center leading-relaxed relative z-10">
              At Better Morals we don&apos;t just do marketing, we co-create
              systems and stories with people who want to build a better world!
            </p>
          </motion.div>
        </div>

        {/* Who We Work With Section - New Exciting Cards */}
        <div className="max-w-6xl mx-auto px-6 relative z-10 mt-32">
          <div className="text-center mb-12">
            <motion.h2
              className="text-5xl font-bold tracking-tight text-white mb-4 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-cyan-400/30 blur-xl rounded-lg"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                  Who We Work With
                </span>
              </span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto my-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.7)" }}
            />

            <motion.p
              className="text-gray-300 text-lg max-w-3xl mx-auto mt-8 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our established expertise in creative industries, entertainment,
              and next-gen eCommerce has allowed us to build a diverse portfolio
              of clients
            </motion.p>
          </div>

          {/* First 3 client type cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.slice(0, 3).map((client, index) => (
              <motion.div
                key={index}
                className="relative w-full h-[200px] group perspective"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {/* 3D card flip container */}
                <motion.div
                  className="relative h-full w-full transition-all duration-500 preserve-3d"
                  whileHover={{ rotateY: 15, rotateX: 10, z: 20 }}
                >
                  {/* Front of card with strong neon effect */}
                  <div className="absolute inset-0 backface-hidden">
                    {/* Card glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>

                    {/* Glass card */}
                    <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md border border-gray-700/60 rounded-xl p-8 shadow-2xl transition-all duration-500 z-10 overflow-hidden">
                      {/* Animated gradient edge */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ backgroundSize: "200% 200%" }}
                      />

                      {/* Animated light reflection */}
                      <div className="absolute -inset-full h-full w-1/2 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>

                      {/* Client type text with neon glow */}
                      <div className="relative h-full flex items-center justify-center">
                        <motion.p
                          className="text-white text-center font-medium text-xl z-20"
                          animate={{
                            textShadow: [
                              "0 0 4px rgba(6, 182, 212, 0.3), 0 0 8px rgba(6, 182, 212, 0.3)",
                              "0 0 8px rgba(6, 182, 212, 0.5), 0 0 16px rgba(6, 182, 212, 0.5)",
                              "0 0 4px rgba(6, 182, 212, 0.3), 0 0 8px rgba(6, 182, 212, 0.3)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          }}
                        >
                          {client}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Ultra-Modern Moving Logo Showcase - Performance Optimized Infinite Scroll */}
          <div className="relative my-32 overflow-hidden">
            {/* Section divider with glow effect */}
            <motion.div
              className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-16"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Floating header */}
            <motion.div
              className="text-center mb-12 relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                Trusted by innovative brands
              </h3>
              <div
                className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"
                style={{ boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)" }}
              />
            </motion.div>

            {/* Main logo marquee container */}
            <div className="relative h-32 flex items-center">
              {/* Gradient masks for smooth edge fade */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

              {/* Top row - moving right (true infinite with CSS) */}
              <div className="absolute top-4 w-full overflow-hidden">
                <div className="flex gap-24 items-center animate-marquee-right">
                  {/* Just enough logos for seamless loop (3 sets) */}
                  {[...Array(3)].map((_, setIndex) =>
                    [
                      { src: "/dreamland.png", alt: "Client 1" },
                      { src: "/looplasso.png", alt: "Client 2" },
                      { src: "/gains.png", alt: "Client 3" },
                      { src: "/lamb.png", alt: "Client 4" },
                      { src: "/collarcut.png", alt: "Client 6" },
                    ].map((logo, logoIndex) => (
                      <motion.div
                        key={`top-${setIndex}-${logoIndex}`}
                        className="flex-shrink-0 group cursor-pointer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="relative h-16 w-32 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/10">
                          {/* Glow effect on hover */}
                          <div className="absolute -inset-0.5 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/50 to-purple-500/50" />

                          {/* Logo image - FULL WIDTH */}

                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            className="relative h-10 w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 z-10 px-2"
                            width={128}
                            height={40}
                          />

                          {/* Animated shine effect */}
                          <div className="absolute inset-0 rounded-lg overflow-hidden">
                            <motion.div
                              className="absolute -inset-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                              animate={{ x: ["-200%", "200%"] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: logoIndex * 0.2,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>

              {/* Bottom row - moving left (true infinite with CSS) */}
              <div className="absolute bottom-4 w-full overflow-hidden">
                <div className="flex gap-24 items-center animate-marquee-left">
                  {/* Just enough logos for seamless loop (3 sets) */}
                  {[...Array(3)].map((_, setIndex) =>
                    [
                      { src: "/looplasso.png", alt: "Client 6" },
                      { src: "/dreamland.png", alt: "Client 7" },
                      { src: "/gains.png", alt: "Client 8" },
                      { src: "/betterbrand.png", alt: "Client 9" },
                      { src: "/collarcut.png", alt: "Client 10" },
                    ].map((logo, logoIndex) => (
                      <motion.div
                        key={`bottom-${setIndex}-${logoIndex}`}
                        className="flex-shrink-0 group cursor-pointer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="relative h-16 w-32 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/10">
                          {/* Glow effect on hover */}
                          <div className="absolute -inset-0.5 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/50 to-purple-500/50" />

                          {/* Logo image - FULL WIDTH */}
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            className="relative h-10 w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 z-10 px-2"
                            width={128}
                            height={40}
                          />

                          {/* Animated shine effect */}
                          <div className="absolute inset-0 rounded-lg overflow-hidden">
                            <motion.div
                              className="absolute -inset-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                              animate={{ x: ["-200%", "200%"] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: logoIndex * 0.2,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>

              {/* Floating particles around logos */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    animate={{
                      x: [Math.random() * 800, Math.random() * 800],
                      y: [Math.random() * 100, Math.random() * 100],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut",
                    }}
                    style={{
                      boxShadow: "0 0 4px rgba(6, 182, 212, 0.8)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom divider */}
            <motion.div
              className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-16"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </div>

          {/* Last 3 client type cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.slice(3).map((client, index) => (
              <motion.div
                key={index + 3}
                className="relative w-full h-[200px] group perspective"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {/* 3D card flip container */}
                <motion.div
                  className="relative h-full w-full transition-all duration-500 preserve-3d"
                  whileHover={{ rotateY: 15, rotateX: 10, z: 20 }}
                >
                  {/* Front of card with strong neon effect */}
                  <div className="absolute inset-0 backface-hidden">
                    {/* Card glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>

                    {/* Glass card */}
                    <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md border border-gray-700/60 rounded-xl p-8 shadow-2xl transition-all duration-500 z-10 overflow-hidden">
                      {/* Animated gradient edge */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ backgroundSize: "200% 200%" }}
                      />

                      {/* Animated light reflection */}
                      <div className="absolute -inset-full h-full w-1/2 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>

                      {/* Client type text with neon glow */}
                      <div className="relative h-full flex items-center justify-center">
                        <motion.p
                          className="text-white text-center font-medium text-xl z-20"
                          animate={{
                            textShadow: [
                              "0 0 4px rgba(6, 182, 212, 0.3), 0 0 8px rgba(6, 182, 212, 0.3)",
                              "0 0 8px rgba(6, 182, 212, 0.5), 0 0 16px rgba(6, 182, 212, 0.5)",
                              "0 0 4px rgba(6, 182, 212, 0.3), 0 0 8px rgba(6, 182, 212, 0.3)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: (index + 3) * 0.3,
                          }}
                        >
                          {client}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom flourish */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-block bg-gray-900/50 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50">
              <div className="flex flex-wrap justify-center items-center gap-3">
                <motion.span
                  className="text-cyan-400 font-medium text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  Creative Industries
                </motion.span>

                <span className="text-gray-500 mx-1">•</span>

                <motion.span
                  className="text-purple-400 font-medium text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  Entertainment
                </motion.span>

                <span className="text-gray-500 mx-1">•</span>

                <motion.span
                  className="text-blue-400 font-medium text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  Next-gen eCommerce
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Added CSS for 3D effect and infinite marquee animations */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        /* Infinite marquee animations - precise calculations for seamless loop */
        @keyframes marquee-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
          width: 300%;
          display: flex;
          gap: 6rem;
        }

        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
          width: 300%;
          display: flex;
          gap: 6rem;
        }
      `}</style>
    </>
  );
}
