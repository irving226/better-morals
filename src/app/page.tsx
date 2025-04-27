"use client";

import { useEffect, useState, useRef } from "react";
import AppBar from "./component/Appbar/HomeAppbar";
import "./globals.css";
import VisitContactSection from "./component/HomePageSections/VisitContactSection";
import CombinedSection from "./component/HomePageSections/CombinedSection";
import OurServicesSection from "./component/HomePageSections/OurServicesSection";
import Image from "next/image";
export default function HomePage() {
  const [blurStrength, setBlurStrength] = useState(20);
  const [parallaxY, setParallaxY] = useState(0);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [whiteSection, setWhiteSection] = useState(false);
  const [grayscapeVisible, setGrayscapeVisible] = useState(false);
  const journeyRef = useRef(null);
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
                  At BetterMorals we don’t just do marketing, we co-create
                  systems and stories with people who want to build a better
                  world! Every service we offer is designed to free up your
                  time, sharpen your message, and fuel conscious growth through
                  powerful automation as well as authentic ethical marketing and
                  branding. Whether you’re just starting out, scaling up, or
                  creating your legacy—we’ve got a package for where you are and
                  where you’re going.
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
        </section>

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
        <div>
          <OurServicesSection />
        </div>

        {/* Second Image Section */}
        <section className="min-h-[80vh] bg-[url('/earth.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center relative px-6">
          <CombinedSection />
        </section>

        <div className="relative z-10">
          <svg
            className="w-full h-24 -mb-1"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            ?
          </svg>
        </div>

        <VisitContactSection />
      </main>
    </>
  );
}
