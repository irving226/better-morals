"use client";

import AppBar from "./component/Appbar/HomeAppbar";
import "./globals.css";
import VisitContactSection from "./component/HomePageSections/VisitContactSection";
import CombinedSection from "./component/HomePageSections/CombinedSection";
import OurServicesSection from "./component/HomePageSections/OurServicesSection";
import HeroSection from "./component/HomePageSections/HeroSection";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import OurBeliefSection from "./component/HomePageSections/OurBeliefSection";

export default function HomePage() {
  useEffect(() => {
    setIsClient(true);
  }, []);
  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const opacity = Math.random() * 0.7;
      const delay = Math.random() * 8;
      const duration = Math.random() * 5 + 3;
      const size = Math.random() * 3 + 1;
      const colorHue = 180 + Math.random() * 60;
      const lightness = 70 + Math.random() * 20;
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const blur = Math.random() * 4 + 2;
      const spread = Math.random() * 2 + 1;

      return {
        key: `star-${i}`,
        opacity,
        delay,
        duration,
        size,
        colorHue,
        lightness,
        top,
        left,
        blur,
        spread,
      };
    });
  }, []);
  const [isClient, setIsClient] = useState(false);
  if (!isClient) return null;

  return (
    <>
      <AppBar />

      <main className="main-wrapper">
        <HeroSection />
        <OurBeliefSection />

        {/* Modern Feature Section with neon glow matching Our Ethos section */}
        <section className="relative py-32 overflow-hidden bg-gray-950">
          {/* Subtle animated background grid - matching Our Ethos section */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="h-full w-full grid grid-cols-12 grid-rows-12">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-cyan-500/30" />
              ))}
            </div>
          </div>

          {/* Animated stars/particles */}
          {stars.map((star) => (
            <motion.div
              key={star.key}
              className="absolute rounded-full"
              animate={{
                opacity: [0, star.opacity, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: `hsl(${star.colorHue}, 100%, ${star.lightness}%)`,
                top: star.top,
                left: star.left,
                boxShadow: `0 0 ${star.blur}px ${star.spread}px hsl(${star.colorHue}, 100%, 80%)`,
              }}
            />
          ))}

          {/* Glowing orbs */}
          <motion.div
            className="absolute top-1/4 -right-20 w-96 h-96 rounded-full z-0"
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full z-0"
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

          {/* Core Values - matching style of the Our Ethos section */}
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-around space-y-12 md:space-y-0 md:space-x-8">
              {/* Fast Results */}
              <motion.div
                className="text-center group"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.8,
                  delay: 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative">
                  {/* Streak effect that appears to be left behind as the icon flies in */}
                  <motion.div
                    className="absolute left-0 top-1/2 w-40 h-1.5 -z-10 origin-left"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: [0, 0.8, 0] }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(6, 182, 212, 0.7))",
                      transform: "translateY(-50%) translateX(-100%)",
                      filter: "blur(3px)",
                    }}
                  />

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
                    }}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(6, 182, 212, 0.6), transparent)",
                    }}
                  />

                  {/* Icon Container */}
                  <div className="relative w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center z-10 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#boltGradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                      animate={{
                        filter: [
                          "drop-shadow(0 0 3px rgba(6, 182, 212, 0.5))",
                          "drop-shadow(0 0 6px rgba(6, 182, 212, 0.7))",
                          "drop-shadow(0 0 3px rgba(6, 182, 212, 0.5))",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      <defs>
                        <linearGradient
                          id="boltGradient"
                          x1="3"
                          y1="2"
                          x2="21"
                          y2="22"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0EA5E9" />
                          <stop offset="1" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  Fast Results
                </h3>
                <p className="mt-3 text-gray-300 max-w-xs">
                  Delivering solutions with speed and precision
                </p>
              </motion.div>

              {/* Ethics First */}
              <motion.div
                className="text-center group"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.8,
                  delay: 0.3,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative">
                  {/* Streak effect that appears to be left behind as the icon flies in */}
                  <motion.div
                    className="absolute left-0 top-1/2 w-40 h-1.5 -z-10 origin-left"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: [0, 0.8, 0] }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(139, 92, 246, 0.7))",
                      transform: "translateY(-50%) translateX(-100%)",
                      filter: "blur(3px)",
                    }}
                  />

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
                      delay: 0.3,
                    }}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(139, 92, 246, 0.6), transparent)",
                    }}
                  />

                  {/* Icon Container */}
                  <div className="relative w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center z-10 border border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#shieldGradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                      animate={{
                        filter: [
                          "drop-shadow(0 0 3px rgba(139, 92, 246, 0.5))",
                          "drop-shadow(0 0 6px rgba(139, 92, 246, 0.7))",
                          "drop-shadow(0 0 3px rgba(139, 92, 246, 0.5))",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                      <defs>
                        <linearGradient
                          id="shieldGradient"
                          x1="4"
                          y1="2"
                          x2="20"
                          y2="22"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#C084FC" />
                          <stop offset="1" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  Ethics First
                </h3>
                <p className="mt-3 text-gray-300 max-w-xs">
                  Guided by integrity in all our endeavors
                </p>
              </motion.div>

              {/* Client Focus */}
              <motion.div
                className="text-center group"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.8,
                  delay: 0.5,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative">
                  {/* Streak effect that appears to be left behind as the icon flies in */}
                  <motion.div
                    className="absolute left-0 top-1/2 w-40 h-1.5 -z-10 origin-left"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: [0, 0.8, 0] }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(234, 179, 8, 0.7))",
                      transform: "translateY(-50%) translateX(-100%)",
                      filter: "blur(3px)",
                    }}
                  />

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
                      delay: 0.6,
                    }}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(234, 179, 8, 0.6), transparent)",
                    }}
                  />

                  {/* Icon Container */}
                  <div className="relative w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center z-10 border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#usersGradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                      animate={{
                        filter: [
                          "drop-shadow(0 0 3px rgba(234, 179, 8, 0.5))",
                          "drop-shadow(0 0 6px rgba(234, 179, 8, 0.7))",
                          "drop-shadow(0 0 3px rgba(234, 179, 8, 0.5))",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <defs>
                        <linearGradient
                          id="usersGradient"
                          x1="0"
                          y1="3"
                          x2="23"
                          y2="21"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FACC15" />
                          <stop offset="1" stopColor="#EAB308" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  Client Focus
                </h3>
                <p className="mt-3 text-gray-300 max-w-xs">
                  Building relationships through personalized service
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div>
          <OurServicesSection />
        </div>

        {/* Second Image Section */}
        <section>
          <CombinedSection />
        </section>

        <VisitContactSection />
      </main>
    </>
  );
}
