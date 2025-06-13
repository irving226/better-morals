"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("/about")) setActiveLink("about");
    else if (path.includes("/services")) setActiveLink("services");
    else if (path.includes("/contact")) setActiveLink("contact");
    else if (path.includes("/case-studies")) setActiveLink("case-studies");
    else if (path.includes("/blog")) setActiveLink("blog");
    else setActiveLink("");
  }, []);

  const handleGetStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services-tab-section");
    if (servicesSection) {
      const yPosition =
        servicesSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: yPosition - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToServices = () => {
    const isHomepage = window.location.pathname === "/";
    if (isHomepage) {
      const servicesTabSection = document.getElementById("services-section");
      if (servicesTabSection) {
        const yPosition =
          servicesTabSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: yPosition - 80,
          behavior: "smooth",
        });
        setActiveLink("services");
      }
    }
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled || menuOpen
            ? "bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl"
            : "bg-transparent backdrop-blur-md border-b border-white/5"
        }`}
        animate={{
          height: menuOpen ? "100vh" : "auto",
          backgroundColor: menuOpen ? "rgba(17, 24, 39, 0.98)" : undefined,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="relative max-w-7xl mx-auto">
          {/* Animated gradient border */}
          <motion.div
            className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyan-500 via-amber-400 to-purple-500"
            style={{
              backgroundSize: "200% 100%",
            }}
            animate={{
              width: scrolled || menuOpen ? "100%" : "0%",
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              width: { duration: 0.5 },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />

          {/* Top Navigation Bar */}
          <div className="flex justify-between items-center px-6 py-4 relative z-10">
            {/* Logo with enhanced hover */}
            <Link href="/" className="relative group flex items-center">
              <motion.div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(251, 191, 36, 0.2), rgba(124, 58, 237, 0.2))",
                  filter: "blur(8px)",
                }}
              />

              <div className="relative w-8 h-8 mr-3 z-10">
                <Image
                  src="/BMI-Large.png"
                  alt="Better Morals Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <motion.span
                className="relative text-2xl font-bold tracking-tight z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100 mr-1">
                  Better
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                  Morals
                </span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
              {["about", "services", "case-studies", "blog", "contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className="relative group py-2 px-3"
                    onClick={item === "services" ? scrollToServices : undefined}
                  >
                    {/* Morphing hover background */}
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-amber-400/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-amber-400/10 group-hover:to-purple-500/10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Active/hover indicator line */}
                    <motion.span
                      className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      animate={{
                        width: activeLink === item ? "80%" : "0%",
                      }}
                      whileHover={{ width: "80%" }}
                      transition={{ duration: 0.3 }}
                    />

                    <span
                      className={`relative text-sm capitalize transition-all duration-300 ${
                        activeLink === item
                          ? "text-purple-300 font-semibold"
                          : "text-purple-200 group-hover:text-white"
                      }`}
                    >
                      {item === "case-studies" ? "Work" : item}
                    </span>
                  </Link>
                )
              )}

              {/* Enhanced CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-green-400 blur-md opacity-70" />
                <Link
                  href="/services#services-tab-section"
                  className="relative block px-6 py-2 bg-gray-900 rounded-lg text-white font-medium border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            </nav>

            {/* Morphing Hamburger Menu */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-50 w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
              style={{
                background: menuOpen
                  ? "linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(251, 191, 36, 0.2))"
                  : "rgba(31, 41, 55, 0.8)",
                border: menuOpen
                  ? "1px solid rgba(251, 191, 36, 0.5)"
                  : "1px solid rgba(75, 85, 99, 0.5)",
                backdropFilter: "blur(12px)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: menuOpen
                  ? "0 0 20px rgba(251, 191, 36, 0.3)"
                  : "0 0 15px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="w-5 h-0.5 bg-amber-300 block"
                  animate={{
                    rotateZ: menuOpen ? 45 : 0,
                    y: menuOpen ? 6 : -3,
                    width: menuOpen ? 20 : 20,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-amber-300 block"
                  animate={{
                    opacity: menuOpen ? 0 : 1,
                    x: menuOpen ? 20 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-amber-300 block"
                  animate={{
                    rotateZ: menuOpen ? -45 : 0,
                    y: menuOpen ? -6 : 3,
                    width: menuOpen ? 20 : 20,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </motion.button>
          </div>

          {/* Full-Screen Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="md:hidden absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Floating gradient orbs */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-32 h-32 rounded-full opacity-10"
                      style={{
                        background: `linear-gradient(45deg, ${
                          i % 2 === 0 ? "#06b6d4, #f59e0b" : "#8b5cf6, #06b6d4"
                        })`,
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Navigation Items */}
                <nav className="relative z-10 flex flex-col items-center gap-8">
                  {["about", "services", "case-studies", "blog", "contact"].map(
                    (item, index) => (
                      <motion.div
                        key={item}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={`/${item}`}
                          onClick={() => {
                            setMenuOpen(false);
                            if (item === "services") scrollToServices();
                          }}
                          className="relative group block text-center"
                        >
                          <motion.div
                            className="text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-cyan-400 transition-all duration-300 capitalize"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {item === "case-studies" ? "Work" : item}
                          </motion.div>

                          {/* Underline effect */}
                          <motion.div
                            className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full"
                            initial={{ width: 0, x: "-50%" }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </Link>
                      </motion.div>
                    )
                  )}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="mt-8"
                  >
                    <motion.button
                      onClick={(e) => {
                        setMenuOpen(false);
                        handleGetStarted(e);
                      }}
                      className="relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-amber-500 text-white font-bold text-xl rounded-2xl shadow-2xl"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Get Started</span>
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-cyan-600"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Global Styles */}
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
    </>
  );
}
