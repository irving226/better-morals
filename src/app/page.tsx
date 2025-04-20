"use client";

import { useEffect, useState, useRef } from "react";
import AppBar from "./component/Appbar/HomeAppbar";
import "./globals.css";
import { Typography, Box, Container, Button } from "@mui/material";
import AISection from "./component/HomePageSections/AISection";
import CampaignSection from "./component/HomePageSections/CampaignSection";
import VisitContactSection from "./component/HomePageSections/VisitContactSection";
import CombinedSection from "./component/HomePageSections/CombinedSection";
export default function HomePage() {
  const [blurStrength, setBlurStrength] = useState(20);
  const [parallaxY, setParallaxY] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [whiteSection, setWhiteSection] = useState(false);
  const [grayscapeVisible, setGrayscapeVisible] = useState(false);
  const journeyRef = useRef(null);
  const ctaRef = useRef(null);
  const grayscapeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const blur = Math.max(2, 12 - scrollY / 30);

      // Very slow parallax effect
      const parallaxOffset = scrollY * 0.0002;

      setBlurStrength(blur);
      setParallaxY(parallaxOffset);

      // Check if journey section should be visible
      // Around 20% scroll
      const journeyThreshold = window.innerHeight * 0.2;
      if (scrollY > journeyThreshold && !journeyVisible) {
        setJourneyVisible(true);
      } else if (scrollY <= journeyThreshold && journeyVisible) {
        setJourneyVisible(false);
      }

      // Check if CTA section should be visible
      // Around 40% scroll
      const ctaThreshold = window.innerHeight * 0.4;
      if (scrollY > ctaThreshold && !ctaVisible) {
        setCtaVisible(true);
      } else if (scrollY <= ctaThreshold && ctaVisible) {
        setCtaVisible(false);
      }

      // Check if user has scrolled to the white section
      const secondThreshold = window.innerHeight * 1.5; // 150% of viewport height
      if (scrollY > secondThreshold) {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [journeyVisible, ctaVisible, grayscapeVisible]);

  const features = [
    {
      title: "AI-Driven Insights",
      description:
        "Leverage our AI to gain actionable insights, optimize campaigns, and improve ROI. We provide data-driven strategies for maximum impact.",
      image: "/ai-insights.jpg",
    },
    {
      title: "Personalized Customer Journeys",
      description:
        "Create personalized customer experiences with our AI-powered tools. Enhance engagement and build stronger connections.",
      image: "/customer-journeys.jpg",
    },
    {
      title: "Sustainable AI Solutions",
      description:
        "Our AI solutions are designed with sustainability in mind. We help you create eco-friendly campaigns that resonate with your audience.",
      image: "/sustainable.jpg",
    },
    {
      title: "Real-Time Optimization",
      description:
        "Optimize your marketing efforts in real-time with our AI-powered analytics. Make data-driven decisions and achieve better results faster.",
      image: "/real-time.jpg",
    },
  ];

  return (
    <>
      <AppBar />

      <main className="main-wrapper">
        {/* Hero Section with large heading */}
        <section className="relative min-h-[100vh] flex flex-col justify-start items-center text-center px-6 overflow-hidden">
          {/* Background */}
          <div
            className="hero-background"
            style={{
              transform: `translateY(${parallaxY}px)`,
              filter: `blur(${blurStrength}px)`,
              opacity: whiteSection ? 0 : 1,
              transition: "opacity 500ms ease-out, filter 500ms ease-out",
            }}
          />

          <div className="glass-overlay" />

          {/* Static heading: always shown */}
          <div className="relative z-10 max-w-3xl pt-[30vh]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              Marketing with <span className="neon-text">Integrity</span> In
              Mind
            </h1>
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
                  Better Morals Marketing & AI was founded with a vision to
                  integrate ethical practices into the marketing and AI
                  landscape. Over the years, we have partnered with prestigious
                  brands, delivering innovative solutions that prioritize
                  sustainability and responsibility. Our mission is to lead the
                  industry by crafting intelligent, sustainable, and tailored
                  marketing solutions that resonate with our clients’ unique
                  identities. We value Integrity, Sustainability, Innovation,
                  and Collaboration, which guide our approach to every project.
                  Meet our dedicated team who are committed to making a
                  difference in the marketing world.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/40 to-accent-purple/40 mix-blend-multiply"></div>
                  <img
                    src="/api/placeholder/600/400"
                    alt="Our journey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Reveal-on-scroll CTA block */}
          <div
            ref={ctaRef}
            className={`relative z-10 max-w-2xl w-full mt-32 transition-all duration-700 ease-out ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-white text-lg md:text-xl mb-6">
              Ready to level up? Enter your email to learn how we blend AI and
              ethics to transform marketing.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-red-600 text-white font-medium px-6 py-3 rounded-full hover:bg-red-700 transition">
                Get Started →
              </button>
            </div>
          </div>
        </section>

        {/* Content Section that appears on scroll */}
        {/* Services Section with Glass Morphism Effect */}
        {/* Combined Wave + Bridge Element Transition */}

        {/* Wave Transition - Creates the curved shape */}
        <div className="relative z-10 mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 180"
            className="w-full h-auto relative z-10"
          >
            <path
              fill="#e6ffee" /* Light green matching services section */
              fillOpacity="1"
              d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,122.7C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          {/* <div className="absolute top-0 left-0 w-full h-64 bg-black/50 z-5"></div> */}

          {/* Bridge Element - Positioned to appear on top of the wave */}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-6 z-20">
            <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-8 md:space-y-0">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 font-medium text-gray-800">Fast Results</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 font-medium text-gray-800">Ethics First</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 font-medium text-gray-800">Client Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adjust the top margin of your services section */}
        <style jsx>{`
          /* Add this to reduce the space between the wave and services content */
          #services-section {
            margin-top: -60px; /* Adjust as needed to get the right spacing */
            position: relative;
            z-index: 5;
            padding-top: 80px; /* Add top padding to create space between the wave and content */
          }
        `}</style>
        <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          {/* Background Circles - Similar to the green glass morphism images */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-teal-200/20 to-teal-400/30 blur-xl"></div>
          <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-gradient-to-tr from-teal-300/20 to-green-400/30 blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-60 h-60 rounded-full bg-gradient-to-br from-cyan-200/20 to-green-300/20 blur-xl"></div>
          <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-teal-100/20 to-cyan-300/30 blur-xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Glass Morphism Card 1 */}
              <div className="rounded-2xl overflow-hidden relative group">
                {/* Glass Effect */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl transition-all duration-300 group-hover:bg-white/30"></div>

                {/* Floating Element */}
                <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-gradient-to-br from-teal-300/60 to-cyan-300/60 blur-sm transition-all duration-300 group-hover:scale-110"></div>

                {/* Content */}
                <div className="relative p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Brand Strategy
                  </h3>
                  <p className="text-gray-700">
                    Develop a comprehensive brand strategy that positions your
                    business for long-term success in your industry.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mt-6 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </div>
              </div>

              {/* Glass Morphism Card 2 */}
              <div className="rounded-2xl overflow-hidden relative group">
                {/* Glass Effect */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl transition-all duration-300 group-hover:bg-white/30"></div>

                {/* Floating Element */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-green-300/60 to-teal-300/60 blur-sm transition-all duration-300 group-hover:scale-110"></div>

                {/* Content */}
                <div className="relative p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Content Creation
                  </h3>
                  <p className="text-gray-700">
                    Produce engaging, high-quality content that tells your brand
                    story and connects with your audience.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-green-400 to-teal-400 mt-6 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </div>
              </div>

              {/* Glass Morphism Card 3 */}
              <div className="rounded-2xl overflow-hidden relative group">
                {/* Glass Effect */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl transition-all duration-300 group-hover:bg-white/30"></div>

                {/* Floating Element */}
                <div className="absolute -top-6 -left-6 w-18 h-18 rounded-full bg-gradient-to-br from-cyan-300/60 to-blue-300/60 blur-sm transition-all duration-300 group-hover:scale-110"></div>

                {/* Content */}
                <div className="relative p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Digital Marketing
                  </h3>
                  <p className="text-gray-700">
                    Implement data-driven marketing campaigns across multiple
                    channels to maximize your reach and ROI.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mt-6 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-md font-medium uppercase tracking-wide hover:-translate-y-1 transition-transform duration-300 shadow-lg shadow-teal-300/20">
                Explore All Services
              </button>
            </div>
          </div>
        </section>

        {/* Second Image Section */}
        <section className="min-h-[80vh] bg-[url('/earth.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center relative px-6">
          <CombinedSection />
        </section>

        {/* Third Image Section */}
        {/* <CampaignSection /> */}

        <div className="relative z-10">
          <svg
            className="w-full h-24 -mb-1"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
              fill="#ecfdf5" // minty green? update based on your palette
            />
          </svg>
        </div>

        <VisitContactSection />

        {/* Second Image Section */}
        <div className="relative h-24 w-full flex justify-center items-center overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-emerald-300/20 to-purple-700/30 blur-2xl" />
        </div>
        <section className="min-h-[80vh] bg-[url('/forest.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center relative px-6">
          <div className="bg-black/60 backdrop-blur-sm p-12 rounded-xl flex flex-col items-center max-w-2xl w-full text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Brand?
            </h2>
            <button className="border border-white text-white py-2 px-6 rounded hover:bg-white/10 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
