"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// This component can replace just your hero section
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blurStrength, setBlurStrength] = useState(8); // Reduced initial blur
  const [parallaxY, setParallaxY] = useState(0);
  const [whiteSection, setWhiteSection] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [grayscapeVisible, setGrayscapeVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <>
     {/* Modern Hero Section with large heading - fixed positioning */}
            <section className="relative min-h-screen w-full overflow-hidden pt-16">
              {" "}
              {/* Added pt-16 for navbar spacing */}
              {/* Enhanced Background with reduced overlay opacity */}
              <div
                className="absolute inset-0 hero-background"
                style={{
                  transform: `translateY(${parallaxY * 0.5}px)`,
                  filter: `blur(${blurStrength}px)`,
                  opacity: whiteSection ? 0 : 1,
                  transition: "opacity 500ms ease-out, filter 500ms ease-out",
                }}
              >
                {/* Gradient overlay with reduced opacity to see background better */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#121935]/30 via-[#1a1c45]/30 to-[#0c1228]/30 mix-blend-overlay"></div>
    
                {/* Dynamic light rays */}
                <div className="light-ray light-ray-1"></div>
                <div className="light-ray light-ray-2"></div>
                <div className="light-ray light-ray-3"></div>
              </div>
              {/* Improved glass overlay with reduced opacity */}
              <div className="absolute inset-0 backdrop-blur-sm bg-black/10 glass-overlay"></div>
              {/* Content Container - adjusted for navbar space */}
              <div className="relative z-10 max-w-7xl mx-auto h-screen flex flex-col justify-center items-center px-6 text-center pt-16">
                {" "}
                {/* Added pt-16 for navbar spacing */}
                {/* Logo section with animation */}
                <div
                  className={`transform transition-all duration-1000 ease-out ${
                    isHeroVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-400 to-yellow-200 bg-clip-text text-transparent">
                      BetterMorals
                    </span>
                  </div>
                </div>
                {/* Main heading with enhanced typography and colors */}
                <div
                  className={`transform transition-all duration-1000 ease-out ${
                    isHeroVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
                    <span className="text-white">Marketing with </span>
                    <span className="relative inline-block">
                      {/* Glow effect behind the text */}
                      <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-yellow-400 to-yellow-200 opacity-30"></span>
                      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 animate-shimmer neon-text">
                        Integrity
                      </span>
                    </span>
                    <span className="text-white"> In Mind</span>
                  </h1>
                </div>
                {/* Tagline with staggered animation */}
                <p
                  className={`text-lg md:text-xl max-w-xl text-gray-200 mb-10 transition-all duration-1000 ${
                    isHeroVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  We co-create systems and stories with people who want to build a
                  better world through authentic ethical marketing.
                </p>
                {/* CTA buttons with hover effects */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                    isHeroVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-medium rounded-lg shadow-md hover:shadow-xl hover:shadow-yellow-400/20 transform hover:-translate-y-1 transition-all duration-300">
                    Schedule a Free Consultation
                  </button>
                  <button className="px-8 py-4 bg-transparent border border-white/30 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
                    Explore Our Services
                  </button>
                </div>
                {/* Our Journey Section - appears on scroll */}
                <div
                  ref={journeyRef}
                  className={`relative z-10 flex flex-row items-center justify-center mt-32 max-w-6xl w-full transition-all duration-700 ease-out ${
                    journeyVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                      <h2 className="text-3xl font-bold text-white mb-6">
                        Our Journey
                      </h2>
                      <p className="text-white/90 leading-relaxed">
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
                      <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/40 to-accent-purple/40 mix-blend-multiply"></div>
                        <Image
                          src="/meeting.jpg"
                          alt="Our journey"
                          className="w-full h-full object-cover"
                          width={800}
                          height={600}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Scroll indicator */}
              </div>
            </section>
    </>
  
  );
};

export default HeroSection;