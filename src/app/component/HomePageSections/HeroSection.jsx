"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blurStrength, setBlurStrength] = useState(8);
  const [parallaxY, setParallaxY] = useState(0);
  const [whiteSection, setWhiteSection] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [grayscapeVisible, setGrayscapeVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);

useEffect(() => {
  const newParticles = Array.from({ length: 30 }).map((_, i) => {
    const width = Math.random() * 4 + 1;
    const height = Math.random() * 4 + 1;
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const h = Math.random() < 0.33 ? 180 : Math.random() < 0.66 ? 270 : 45;
    const bgColor = `hsl(${h}, 100%, ${70 + Math.random() * 20}%)`;
    const boxShadow = `0 0 ${Math.random() * 8 + 2}px ${
      Math.random() * 2 + 1
    }px hsl(${h}, 80%)`;

    return (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full"
        animate={{
          opacity: [0, Math.random() * 0.7, 0],
          scale: [0, 1, 0],
          x: [
            Math.random() * 100 - 50,
            Math.random() * 200 - 100,
            Math.random() * 100 - 50,
          ],
          y: [
            Math.random() * 100 - 50,
            Math.random() * 200 - 100,
            Math.random() * 100 - 50,
          ],
        }}
        transition={{
          duration: Math.random() * 8 + 5,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut",
        }}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          left,
          top,
          backgroundColor: bgColor,
          boxShadow,
        }}
      />
    );
  });

  setParticles(newParticles);
}, []);


  // Element references
  const journeyRef = useRef(null);
  const grayscapeRef = useRef(null);

  useEffect(() => {
    // Set initial visibility for entrance animations
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 300);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Dynamic blur effect - more sophisticated calculation but with less maximum blur
      const blur = Math.max(1, 8 - currentScrollY / 40);
      setBlurStrength(blur);

      // Enhanced parallax with easing
      const parallaxOffset = currentScrollY * 0.15;
      setParallaxY(parallaxOffset);

      // Check if journey section should be visible
      // Around 20% scroll
      const journeyThreshold = window.innerHeight * 0.2;
      if (currentScrollY > journeyThreshold && !journeyVisible) {
        setJourneyVisible(true);
      } else if (currentScrollY <= journeyThreshold && journeyVisible) {
        setJourneyVisible(false);
      }

      // Check if CTA section should be visible
      // Around 40% scroll
      const ctaThreshold = window.innerHeight * 0.4;
      if (currentScrollY > ctaThreshold && !ctaVisible) {
        setCtaVisible(true);
      } else if (currentScrollY <= ctaThreshold && ctaVisible) {
        setCtaVisible(false);
      }

      // Check if user has scrolled to the white section
      const secondThreshold = window.innerHeight * 1.5; // 150% of viewport height
      if (currentScrollY > secondThreshold) {
        setWhiteSection(true);
      } else {
        setWhiteSection(false);
      }

      // Check if the grayscape section is visible
      if (grayscapeRef.current) {
        const grayscapeRect = grayscapeRef.current.getBoundingClientRect();
        const grayscapeThreshold = window.innerHeight * 0.7; // 70% of viewport height

        if (grayscapeRect.top < grayscapeThreshold && !grayscapeVisible) {
          setGrayscapeVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [journeyVisible, ctaVisible, grayscapeVisible]);

  // Floating particle animation for the hero section
  const renderParticles = () => {
    return Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full"
        animate={{
          opacity: [0, Math.random() * 0.7, 0],
          scale: [0, 1, 0],
          x: [
            Math.random() * 100 - 50,
            Math.random() * 200 - 100,
            Math.random() * 100 - 50,
          ],
          y: [
            Math.random() * 100 - 50,
            Math.random() * 200 - 100,
            Math.random() * 100 - 50,
          ],
        }}
        transition={{
          duration: Math.random() * 8 + 5,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut",
        }}
        style={{
          width: Math.random() * 4 + 1 + "px",
          height: Math.random() * 4 + 1 + "px",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: `hsl(${
            Math.random() < 0.33
              ? "180, 100%"
              : Math.random() < 0.66
              ? "270, 70%"
              : "45, 100%"
          }, ${70 + Math.random() * 20}%)`,
          boxShadow: `0 0 ${Math.random() * 8 + 2}px ${
            Math.random() * 2 + 1
          }px hsl(${
            Math.random() < 0.33
              ? "180, 100%"
              : Math.random() < 0.66
              ? "270, 70%"
              : "45, 100%"
          }, 80%)`,
        }}
      />
    ));
  };

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden pt-16 bg-gray-950">
        {/* Animated background grid - matching Our Ethos section */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-cyan-500/30" />
            ))}
          </div>
        </div>

        {/* Improved background with enhanced effects */}
        <div
          className="absolute inset-0 hero-background"
          style={{
            transform: `translateY(${parallaxY * 0.5}px)`,
            filter: `blur(${blurStrength}px)`,
            opacity: whiteSection ? 0 : 0.7,
            transition: "opacity 500ms ease-out, filter 500ms ease-out",
          }}
        >
          {/* Gradient overlay with neon color tones */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1040]/40 via-[#2a1068]/40 to-[#0c102a]/40 mix-blend-overlay"></div>

          {/* Dynamic light rays with enhanced colors */}
          <div className="light-ray light-ray-1 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
          <div className="light-ray light-ray-2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
          <div className="light-ray light-ray-3 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-1 overflow-hidden">
        {particles}
        </div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full z-0"
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full z-0"
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
          }}
        />

        {/* Digital flowing lines in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              style={{
                top: `${15 + i * 20}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: 0.4,
                translateX: ["calc(-100% - 50px)", "calc(100% + 50px)"],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Improved glass overlay with reduced opacity */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/10 glass-overlay z-1"></div>

        {/* Content Container - adjusted for navbar space */}
        <div className="relative z-10 max-w-7xl mx-auto h-screen flex flex-col justify-center items-center px-6 text-center pt-16">
          {/* Logo section with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: isHeroVisible ? 1 : 0, 
              y: isHeroVisible ? 0 : -20 
            }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-center mb-12"
          >
            <motion.div 
              className="w-16 h-16 rounded-full flex items-center justify-center relative"
              animate={{ boxShadow: [
                "0 0 15px rgba(139, 92, 246, 0.5)",
                "0 0 25px rgba(139, 92, 246, 0.7)",
                "0 0 15px rgba(139, 92, 246, 0.5)"
              ]}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Purple gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 opacity-70"></div>
              
              {/* Eye icon with glow */}
              <div className="absolute inset-0.5 rounded-full bg-gray-900 flex items-center justify-center">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 text-purple-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  animate={{ 
                    filter: [
                      "drop-shadow(0 0 3px rgba(139, 92, 246, 0.5))",
                      "drop-shadow(0 0 6px rgba(139, 92, 246, 0.7))",
                      "drop-shadow(0 0 3px rgba(139, 92, 246, 0.5))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </div>
            </motion.div>
            
            <motion.span 
              className="ml-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
              animate={{
                textShadow: [
                  "0 0 5px rgba(139, 92, 246, 0.3)",
                  "0 0 10px rgba(139, 92, 246, 0.5)",
                  "0 0 5px rgba(139, 92, 246, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Better Morals
            </motion.span>
          </motion.div>

          {/* Main heading with enhanced typography and colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHeroVisible ? 1 : 0, 
              y: isHeroVisible ? 0 : 20 
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Marketing with </span>
              <span className="relative inline-block">
                {/* Enhanced glow effect behind the text */}
                <motion.span 
                  className="absolute -inset-1 blur-xl bg-gradient-to-r from-cyan-400 to-cyan-200 opacity-50 rounded-lg"
                  animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-300 animate-shimmer neon-text">
                  Integrity
                </span>
              </span>
              <span className="text-white"> In Mind</span>
            </h1>
          </motion.div>

          {/* Tagline with staggered animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHeroVisible ? 1 : 0, 
              y: isHeroVisible ? 0 : 20 
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl max-w-2xl text-gray-300 mb-10"
          >
            We co-create systems and stories with people who want to build a
            better world through authentic ethical marketing.
          </motion.p>

          {/* CTA buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHeroVisible ? 1 : 0, 
              y: isHeroVisible ? 0 : 20 
            }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" >

            <motion.button 
              className="px-8 py-4 relative group overflow-hidden rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Button background with glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
              
              {/* Animated light reflection */}
              <span className="absolute -inset-full h-full w-1/2 z-5 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              
              {/* Button text with shadow for better contrast */}
              <span className="relative z-10 text-gray-900 font-medium text-shadow-sm">
                Schedule a Free Consultation
              </span>

            </motion.button>
</Link>

<Link href="/services" >
            <motion.button 
              className="px-8 py-4 relative group overflow-hidden rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Glassmorphic background */}
              <span className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/20 opacity-80 group-hover:opacity-100 group-hover:bg-white/10 transition-all duration-300"></span>
              
              {/* Subtle border glow on hover */}
              <motion.span 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
              ></motion.span>
              
              {/* Button text */}
              <span className="relative z-10 text-white font-medium">
                Explore Our Services
              </span>
            </motion.button>  
                    </Link>


          </motion.div>

          {/* Our Journey Section - appears on scroll */}
          <motion.div
            ref={journeyRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: journeyVisible ? 1 : 0, 
              y: journeyVisible ? 0 : 40 
            }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-row items-center justify-center mt-32 max-w-6xl w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400 mb-6">
                  Our Journey
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  At BetterMorals we don't just do marketing, we co-create
                  systems and stories with people who want to build a better
                  world! Every service we offer is designed to free up your
                  time, sharpen your message, and fuel conscious growth
                  through powerful automation as well as authentic ethical
                  marketing and branding. Whether you're just starting out,
                  scaling up, or creating your legacy—we've got a package for
                  where you are and where you're going.
                </p>
              </div>

              <div className="relative">
                {/* Enhanced image container with glowing border */}
                <motion.div 
                  className="aspect-video relative rounded-xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated border glow */}
                  <motion.div 
                    className="absolute -inset-0.5 rounded-xl z-0"
                    animate={{ 
                      boxShadow: [
                        "0 0 15px rgba(139, 92, 246, 0.3)",
                        "0 0 25px rgba(139, 92, 246, 0.5)",
                        "0 0 15px rgba(139, 92, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ 
                      background: "linear-gradient(-45deg, rgba(139, 92, 246, 0.5), rgba(79, 70, 229, 0.5))"
                    }}
                  ></motion.div>
                  
                  {/* Gradient overlay for the image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-blue-900/40 mix-blend-multiply z-10"></div>
                  
                  {/* Subtle scan line effect */}
                  <motion.div 
                    className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-20"
                    style={{ mixBlendMode: "screen" }}
                  >
                    <motion.div
                      className="h-20 w-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent"
                      animate={{ top: ["-20%", "120%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      style={{ position: "absolute", left: 0 }}
                    ></motion.div>
                  </motion.div>
                  
                  {/* The actual image */}
                  <div className="relative z-0">
                    <Image
                      src="/meeting.jpg"
                      alt="Our journey"
                      className="w-full h-full object-cover"
                      width={800}
                      height={600}
                      style={{ filter: "contrast(1.1) brightness(0.85)" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

         
        </div>
      </section>
    </>
  );
};

export default HeroSection;