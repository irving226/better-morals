"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine active link based on current path
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("/about")) setActiveLink("about");
    else if (path.includes("/services")) setActiveLink("services");
    else if (path.includes("/contact")) setActiveLink("contact");
    else setActiveLink("");
  }, []);

  // Menu item variants for animations
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: -10 },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/70 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl"
          : "bg-transparent backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Animated gradient border on scroll */}
        <div
          className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 transition-all duration-500 ease-in-out ${
            scrolled ? "w-full" : "w-0"
          }`}
          style={{
            backgroundSize: "200% 100%",
            animation: scrolled ? "gradient-shift 3s linear infinite" : "none",
          }}
        />

        {/* Main navbar content */}
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo with animated gradient */}
          <Link href="/" className="relative group">
            <motion.div
              className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-70 transition duration-300 blur-md"
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(6, 182, 212, 0.4) 0%, rgba(124, 58, 237, 0.4) 100%)",
                  "linear-gradient(90deg, rgba(124, 58, 237, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%)",
                  "linear-gradient(90deg, rgba(6, 182, 212, 0.4) 0%, rgba(124, 58, 237, 0.4) 100%)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <span className="relative text-2xl font-bold tracking-tight z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100 mr-1">
                Better
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                Morals
              </span>
            </span>
          </Link>

          {/* Desktop Nav with hover effects and active indicators */}
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            {["about", "services", "contact"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="relative group py-1 px-1"
              >
                {/* Animated background on hover */}
                <span className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-300" />

                {/* Animated underline for active link */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-full transition-all duration-300 ${
                    activeLink === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />

                {/* Link text with glow effect */}
                <span
                  className={`relative text-sm ${
                    activeLink === item
                      ? "text-cyan-300 font-semibold"
                      : "text-gray-300 group-hover:text-white"
                  } transition-all duration-300`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </Link>
            ))}

            {/* CTA button with glow effect */}
            <motion.button
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 blur opacity-70 group-hover:opacity-100 transition duration-300" />
              <span className="relative block px-5 py-2 bg-gray-900 rounded-lg text-white font-medium border border-cyan-500/30">
                Get Started
              </span>
            </motion.button>
          </nav>

          {/* Hamburger Menu with animation */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700/50 backdrop-blur-sm"
            whileHover={{
              boxShadow: "0 0 8px rgba(6, 182, 212, 0.5)",
              borderColor: "rgba(6, 182, 212, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="w-5 h-0.5 bg-cyan-400 block mb-1.5"
                animate={{ rotateZ: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-cyan-400 block"
                animate={{ width: menuOpen ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-cyan-400 block mt-1.5"
                animate={{ rotateZ: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Animated Mobile Menu with glassmorphism */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-gray-900/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Digital lines animation */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`line-${i}`}
                    className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
                    style={{ top: `${30 + i * 30}%` }}
                    initial={{ opacity: 0, left: "-100%" }}
                    animate={{
                      opacity: 0.5,
                      left: "100%",
                      transition: {
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      },
                    }}
                  />
                ))}
              </div>

              {/* Mobile menu items */}
              <nav className="flex flex-col py-6 px-6 relative z-10">
                {["about", "services", "contact"].map((item, i) => (
                  <motion.div
                    key={item}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      href={`/${item}`}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 px-2 text-lg font-medium text-white hover:text-cyan-300 transition-colors border-b border-white/10"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA button */}
                <motion.button
                  className="mt-6 w-full relative group"
                  custom={3}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 blur opacity-70 group-hover:opacity-100 transition duration-300" />
                  <span className="relative block py-3 bg-gray-900 rounded-lg text-white font-medium border border-cyan-500/30">
                    Get Started
                  </span>
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </header>
  );
}
