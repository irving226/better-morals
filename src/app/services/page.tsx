"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "sustainable-marketing",
    title: "Sustainable Marketing",
    desc: "Eco-conscious campaigns for modern brands. Build your impact without the waste.",
    icon: "leaf",
    color: "bg-emerald-400",
    darkColor: "bg-emerald-500",
    iconHoverColor: "group-hover:bg-emerald-500",
    shadowColor: "emerald",
    glowColor: "rgba(16, 185, 129, 0.6)",
    detailedContent: {
      headline:
        "Create campaigns that make an impact—without the environmental toll",
      paragraphs: [
        "Our sustainable marketing approach integrates eco-friendly practices at every stage of campaign development, from digital-first strategies that minimize physical waste to carbon-neutral hosting for all your web assets.",
        "We analyze your entire marketing footprint and identify opportunities to reduce environmental impact while actually improving campaign effectiveness—proving that ethical marketing can deliver even stronger ROI.",
        "Our team specializes in communicating authentic sustainability stories that resonate with today's conscious consumers, helping you avoid greenwashing pitfalls while building genuine brand loyalty.",
      ],
      stats: [
        { value: "87%", label: "of consumers prefer eco-conscious brands" },
        { value: "65%", label: "reduction in campaign carbon footprint" },
        { value: "2.4×", label: "higher engagement with sustainable content" },
      ],
      testimonial: {
        quote:
          "Better Morals helped us transition to fully sustainable marketing practices while actually increasing our conversion rates by 34%.",
        author: "Maria Chen, CMO at GreenLife Organics",
      },
    },
  },
  {
    id: "ai-driven-insights",
    title: "AI-Driven Insights",
    desc: "Real-time data powerups, minus the jargon. Your dashboard just got smarter.",
    icon: "chart",
    color: "bg-blue-400",
    darkColor: "bg-blue-500",
    iconHoverColor: "group-hover:bg-blue-500",
    shadowColor: "blue",
    glowColor: "rgba(59, 130, 246, 0.6)",
    detailedContent: {
      headline: "Actionable intelligence that drives real business outcomes",
      paragraphs: [
        "Our proprietary AI engine processes millions of data points across your entire marketing ecosystem, transforming complex patterns into clear, actionable insights delivered in real-time.",
        "Unlike black-box solutions, our transparent AI explains its recommendations in plain language, helping your team understand not just what to do, but why it matters—no data science degree required.",
        "Predictive analytics capabilities identify emerging trends and opportunities before your competitors, giving you the critical time advantage needed in today's fast-moving markets.",
      ],
      stats: [
        { value: "12×", label: "faster anomaly detection" },
        { value: "93%", label: "prediction accuracy rate" },
        { value: "41%", label: "reduction in wasted ad spend" },
      ],
      testimonial: {
        quote:
          "The real-time insights transformed our decision-making. We can now adjust campaigns on the fly based on actual performance data.",
        author: "David Park, Digital Director at NexTech Solutions",
      },
    },
  },
  {
    id: "personalized-journeys",
    title: "Personalized Journeys",
    desc: "Every click, tracked with care. Create loyal fans, not just customers.",
    icon: "compass",
    color: "bg-purple-400",
    darkColor: "bg-purple-500",
    iconHoverColor: "group-hover:bg-purple-500",
    shadowColor: "purple",
    glowColor: "rgba(139, 92, 246, 0.6)",
    detailedContent: {
      headline:
        "Transform casual browsers into brand advocates through tailored experiences",
      paragraphs: [
        "Our journey orchestration platform creates seamless, personalized experiences across all touchpoints, adapting in real-time to each customer's unique behaviors and preferences.",
        "Privacy-first design ensures all personalization respects user choices and regulatory requirements, building trust while still delivering the relevance today's consumers expect.",
        "Advanced segmentation goes beyond basic demographics to identify micro-audiences with specific needs, allowing for hyper-targeted messaging that dramatically increases conversion rates.",
      ],
      stats: [
        { value: "4.2×", label: "higher customer lifetime value" },
        { value: "68%", label: "increase in repeat purchases" },
        { value: "73%", label: "reduction in cart abandonment" },
      ],
      testimonial: {
        quote:
          "The personalized journey mapping completely transformed our customer relationships. Our NPS scores have never been higher.",
        author: "Sarah Johnson, Customer Experience Lead at StyleVibe",
      },
    },
  },
  {
    id: "live-performance-tuning",
    title: "Live Performance Tuning",
    desc: "AI monitors, you chill. Get auto-optimized campaigns with zero fluff.",
    icon: "settings",
    color: "bg-amber-400",
    darkColor: "bg-amber-500",
    iconHoverColor: "group-hover:bg-amber-500",
    shadowColor: "amber",
    glowColor: "rgba(245, 158, 11, 0.6)",
    detailedContent: {
      headline: "Continuous optimization that never sleeps",
      paragraphs: [
        "Our proprietary AI monitoring system analyzes campaign performance 24/7, making micro-adjustments to bidding strategies, creative deployments, and audience targeting without human intervention.",
        "A/B testing on autopilot continuously evaluates multiple variations against your KPIs, automatically reallocating budget to top performers while generating new variants to test.",
        "Adaptive budget management prevents wasted spend by automatically shifting resources to high-performing channels and pausing underperforming initiatives before they drain your resources.",
      ],
      stats: [
        { value: "31%", label: "average improvement in ROAS" },
        { value: "24/7", label: "continuous optimization" },
        { value: "50+", label: "variables monitored in real-time" },
      ],
      testimonial: {
        quote:
          "The system caught and corrected a failing ad set at 3 AM on a Sunday. By morning, performance was back on track without any manual intervention.",
        author: "Alex Rivera, Performance Marketing Lead at TechDrive",
      },
    },
  },
];

// Core values displayed in the ribbon
const coreValues = [
  {
    title: "Fast Results",
    icon: "bolt",
    bgColor: "bg-emerald-400",
  },
  {
    title: "Ethics First",
    icon: "shield",
    bgColor: "bg-purple-400",
  },
  {
    title: "Client Focus",
    icon: "users",
    bgColor: "bg-amber-400",
  },
];

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  // Handler for expanding a service card
  const handleExpand = (serviceId) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setExpandedService(serviceId);

    // Reset animating state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Handler for collapsing back to the grid
  const handleCollapse = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setExpandedService(null);

    // Reset animating state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Render icons based on the type
  const renderIcon = (iconName, size = 6) => {
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
      default:
        return null;
    }
  };

  // Get the expanded service details
  const expandedServiceData = expandedService
    ? services.find((s) => s.id === expandedService)
    : null;

  return (
    <div className="relative overflow-hidden">
      {/* Dark background with gradient transitions */}
      <section className="relative py-12 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                backgroundColor: `hsl(${180 + Math.random() * 60}, 100%, ${
                  70 + Math.random() * 20
                }%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4,
                boxShadow: `0 0 ${Math.random() * 6 + 2}px ${
                  Math.random() * 2 + 1
                }px hsl(${180 + Math.random() * 60}, 100%, 80%)`,
                animation: `float-particle ${
                  Math.random() * 30 + 20
                }s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* Core values ribbon - similar to your screenshots */}
        <div className="relative z-10 mx-auto py-6 px-4 max-w-4xl bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl mb-16 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5"></div>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-12 h-12 ${value.bgColor} rounded-full flex items-center justify-center text-white mb-2 shadow-lg`}
                >
                  {renderIcon(value.icon, 5)}
                </div>
                <p className="text-white font-medium">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <div className="relative h-20 bg-gray-900">
        <svg
          className="absolute bottom-0 w-full h-20"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C240,80 720,120 1440,40 L1440,120 L0,120 Z"
            fill="#f0fdfa"
            fillOpacity="1"
          ></path>
        </svg>
      </div>

      {/* Services section */}
      <motion.section
        ref={sectionRef}
        className="relative pt-16 pb-24 px-6 overflow-hidden"
        animate={{
          backgroundColor: expandedService
            ? "rgb(17 24 39)"
            : "rgb(240 253 250)",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Background elements for expanded mode */}
        <AnimatePresence>
          {expandedService && (
            <>
              {/* Animated grid background */}
              <motion.div
                className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-cyan-500/10" />
                ))}
              </motion.div>

              {/* Floating particles */}
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-float-particle"
                    style={{
                      width: Math.random() * 3 + 1 + "px",
                      height: Math.random() * 3 + 1 + "px",
                      backgroundColor: `hsl(${
                        180 + Math.random() * 60
                      }, 100%, ${70 + Math.random() * 20}%)`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.4,
                      boxShadow: `0 0 ${Math.random() * 6 + 2}px ${
                        Math.random() * 2 + 1
                      }px hsl(${180 + Math.random() * 60}, 100%, 80%)`,
                      animationDuration: `${Math.random() * 30 + 20}s`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Glowing orbs */}
              <motion.div
                className="absolute top-1/4 -right-48 w-96 h-96 rounded-full opacity-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: expandedServiceData
                    ? `radial-gradient(circle, rgba(var(--${expandedServiceData.shadowColor}-rgb), 0.2), transparent 70%)`
                    : "radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%)",
                }}
              />

              <motion.div
                className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full opacity-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%)",
                }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Light theme background elements - only visible when not expanded */}
        <AnimatePresence>
          {!expandedService && (
            <>
              <motion.div
                className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-100/30 blur-3xl rounded-full -z-10"
                initial={{ opacity: expandedService ? 0 : 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100/20 blur-3xl rounded-full -z-10"
                initial={{ opacity: expandedService ? 0 : 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Section heading with theme-aware styling */}
        <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              animate={{
                color: expandedService ? "#ffffff" : "#111827",
              }}
              transition={{ duration: 0.4 }}
            >
              Our
            </motion.span>
            <span className="relative">
              <span className="absolute inset-0 animate-pulse-slow bg-amber-400/20 blur-xl rounded-lg -z-10"></span>
              <motion.span
                className="text-neon-amber"
                animate={{
                  textShadow: expandedService
                    ? "0 0 10px rgba(245, 158, 11, 0.6), 0 0 20px rgba(245, 158, 11, 0.4)"
                    : "0 0 5px rgba(245, 158, 11, 0.4), 0 0 10px rgba(245, 158, 11, 0.2)",
                }}
                transition={{ duration: 0.4 }}
              >
                Services
              </motion.span>
            </span>
          </motion.h2>

          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6 shadow-neon-amber"></div>

          <motion.p
            animate={{
              color: expandedService ? "rgb(209 213 219)" : "rgb(75 85 99)",
            }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cutting-edge solutions that combine ethical AI and human expertise
            for exceptional results.
          </motion.p>
        </div>

        {/* Services grid with expanding card functionality */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {!expandedService ? (
              // Grid view (4 cards)
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    layoutId={`card-${service.id}`}
                  >
                    <div
                      className={`bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-neon-${service.shadowColor} transition-all duration-300`}
                      onClick={() => handleExpand(service.id)}
                    >
                      {/* Card content */}
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          {/* Icon */}
                          <motion.div
                            className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white mr-4 shadow-md transition-all duration-300 ${service.iconHoverColor}`}
                            layoutId={`icon-${service.id}`}
                          >
                            {renderIcon(service.icon, 5)}
                          </motion.div>

                          {/* Title */}
                          <motion.h3
                            className="text-xl font-semibold text-gray-900"
                            layoutId={`title-${service.id}`}
                          >
                            {service.title}
                          </motion.h3>
                        </div>

                        {/* Description */}
                        <motion.p
                          className="text-gray-600 mb-6"
                          layoutId={`desc-${service.id}`}
                        >
                          {service.desc}
                        </motion.p>

                        {/* Separator line */}
                        <div className="w-full h-px bg-gray-200 mb-4 relative overflow-hidden">
                          <div
                            className={`absolute inset-y-0 left-0 w-0 bg-${service.shadowColor}-400 group-hover:w-full transition-all duration-500 ease-out`}
                          ></div>
                        </div>

                        {/* Learn more */}
                        <div className="flex justify-end">
                          <span className="inline-flex items-center text-gray-500 group-hover:text-amber-500 transition-colors duration-300">
                            <span className="mr-1">Learn more</span>
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
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Expanded view (single detailed card) with dark neon theme
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                layoutId={`card-${expandedService}`}
              >
                <div
                  className={`bg-gray-800/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/60 shadow-neon-${expandedServiceData.shadowColor} transition-all duration-300`}
                >
                  {/* Back button */}
                  <div className="absolute top-4 left-4 z-10">
                    <button
                      onClick={handleCollapse}
                      className={`p-2 rounded-full bg-gray-800 shadow-md hover:shadow-neon-${expandedServiceData.shadowColor} transition-all duration-300 text-white group border border-gray-700/60`}
                    >
                      {renderIcon("arrow-left", 5)}
                    </button>
                  </div>

                  {/* Expanded card header */}
                  <div className="p-8 pb-4 flex items-start">
                    <motion.div
                      className={`w-16 h-16 ${expandedServiceData.darkColor} rounded-lg flex items-center justify-center text-white mr-6 shadow-neon-${expandedServiceData.shadowColor}`}
                      layoutId={`icon-${expandedService}`}
                    >
                      {renderIcon(expandedServiceData.icon, 7)}
                    </motion.div>

                    <div>
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        layoutId={`title-${expandedService}`}
                      >
                        {expandedServiceData.title}
                      </motion.h3>

                      <motion.p
                        className="text-gray-300"
                        layoutId={`desc-${expandedService}`}
                      >
                        {expandedServiceData.desc}
                      </motion.p>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="w-full h-px bg-gray-700/60"></div>
                  {/* Expanded content */}
                  <div className="p-8">
                    {/* Headline with neon glow */}
                    <motion.h4
                      className={`text-xl font-semibold text-neon-${expandedServiceData.shadowColor} mb-6`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      style={{
                        textShadow: `0 0 10px ${expandedServiceData.glowColor}, 0 0 20px ${expandedServiceData.glowColor}`,
                      }}
                    >
                      {expandedServiceData.detailedContent.headline}
                    </motion.h4>

                    {/* Main content in 2 columns on larger screens */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left column - Paragraphs */}
                      <div className="lg:col-span-2 space-y-4">
                        {expandedServiceData.detailedContent.paragraphs.map(
                          (paragraph, idx) => (
                            <motion.p
                              key={idx}
                              className="text-gray-300"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + idx * 0.1,
                              }}
                            >
                              {paragraph}
                            </motion.p>
                          )
                        )}

                        {/* Testimonial */}
                        <motion.div
                          className="mt-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-l-cyan-400 italic"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <p className="text-gray-300 mb-2">
                            "
                            {
                              expandedServiceData.detailedContent.testimonial
                                .quote
                            }
                            "
                          </p>
                          <p className="text-gray-400 text-sm not-italic">
                            —{" "}
                            {
                              expandedServiceData.detailedContent.testimonial
                                .author
                            }
                          </p>
                        </motion.div>
                      </div>

                      {/* Right column - Stats */}
                      <div className="space-y-6">
                        <motion.h5
                          className="text-lg font-medium text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          Key Results
                        </motion.h5>

                        {expandedServiceData.detailedContent.stats.map(
                          (stat, idx) => (
                            <motion.div
                              key={idx}
                              className="bg-gray-800/30 border border-gray-700/40 rounded-lg p-4 shadow-sm hover:shadow-neon-sm transition-shadow duration-300"
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.3 + idx * 0.1,
                              }}
                            >
                              <div
                                className={`text-2xl font-bold text-${expandedServiceData.shadowColor}-400 mb-1`}
                                style={{
                                  textShadow: `0 0 10px ${expandedServiceData.glowColor}`,
                                }}
                              >
                                {stat.value}
                              </div>
                              <div className="text-gray-300 text-sm">
                                {stat.label}
                              </div>
                            </motion.div>
                          )
                        )}

                        {/* CTA */}
                        <motion.div
                          className="mt-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <button
                            className={`group w-full py-3 px-6 bg-gray-800 border border-${expandedServiceData.shadowColor}-500/50 text-white rounded-lg shadow-neon-${expandedServiceData.shadowColor} hover:shadow-neon-lg-${expandedServiceData.shadowColor} transition-all duration-500 relative overflow-hidden`}
                            style={{
                              textShadow: `0 0 5px ${expandedServiceData.glowColor}`,
                            }}
                          >
                            {/* Glow effect on hover */}
                            <span
                              className={`absolute inset-0 w-0 bg-${expandedServiceData.shadowColor}-500/20 group-hover:w-full transition-all duration-700`}
                            ></span>

                            {/* Text content */}
                            <span className="relative flex items-center justify-center">
                              Get Started
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
                                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                              >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                              </svg>
                            </span>
                          </button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Digital lines flowing through the card */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {/* Horizontal lines */}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={`h-${i}`}
                          className={`absolute h-px bg-gradient-to-r from-transparent via-${expandedServiceData.shadowColor}-400/40 to-transparent`}
                          style={{
                            top: `${15 + i * 20}%`,
                            left: 0,
                            right: 0,
                          }}
                          initial={{ opacity: 0, translateX: "-100%" }}
                          animate={{
                            opacity: 0.3,
                            translateX: "100%",
                            transition: {
                              opacity: { duration: 0.5, delay: 0.3 + i * 0.1 },
                              translateX: {
                                duration: 15 + i * 2,
                                ease: "linear",
                                repeat: Infinity,
                                delay: 0.3 + i * 0.5,
                              },
                            },
                          }}
                        />
                      ))}

                      {/* Vertical lines */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={`v-${i}`}
                          className={`absolute w-px bg-gradient-to-b from-transparent via-${expandedServiceData.shadowColor}-400/40 to-transparent`}
                          style={{
                            left: `${25 + i * 25}%`,
                            top: 0,
                            bottom: 0,
                          }}
                          initial={{ opacity: 0, translateY: "-100%" }}
                          animate={{
                            opacity: 0.3,
                            translateY: "100%",
                            transition: {
                              opacity: { duration: 0.5, delay: 0.3 + i * 0.1 },
                              translateY: {
                                duration: 15 + i * 2,
                                ease: "linear",
                                repeat: Infinity,
                                delay: 0.3 + i * 0.5,
                              },
                            },
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA button - only show when no expanded service */}
        {!expandedService && (
          <div className="text-center mt-16">
            <Link href="/services">
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-lg bg-amber-400 text-white font-medium transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Neon glow effect that pulses on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-amber-400 shadow-neon-amber-lg"></span>

                <span className="relative flex items-center">
                  Explore All Services
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
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </div>
        )}
      </motion.section>

      {/* Bottom wave transition with smoother curve */}
      <div className="relative h-16 bg-gray-50">
        <svg
          className="absolute top-0 w-full h-16 rotate-180"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C240,80 720,120 1440,40 L1440,120 L0,120 Z"
            fill="#111827"
            fillOpacity="1"
          ></path>
        </svg>
      </div>

      {/* CSS animations and custom classes */}
      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(
              ${Math.random() * 50 - 25}px,
              ${Math.random() * 50 - 25}px
            );
          }
          66% {
            transform: translate(
              ${Math.random() * 50 - 25}px,
              ${Math.random() * 50 - 25}px
            );
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }

        .text-neon-amber {
          color: #f59e0b;
          text-shadow: 0 0 8px rgba(245, 158, 11, 0.6),
            0 0 20px rgba(245, 158, 11, 0.4);
        }

        .text-neon-emerald {
          color: #10b981;
          text-shadow: 0 0 8px rgba(16, 185, 129, 0.6),
            0 0 20px rgba(16, 185, 129, 0.4);
        }

        .text-neon-blue {
          color: #3b82f6;
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.6),
            0 0 20px rgba(59, 130, 246, 0.4);
        }

        .text-neon-purple {
          color: #8b5cf6;
          text-shadow: 0 0 8px rgba(139, 92, 246, 0.6),
            0 0 20px rgba(139, 92, 246, 0.4);
        }

        .shadow-neon-emerald {
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
        }

        .shadow-neon-blue {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }

        .shadow-neon-purple {
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }

        .shadow-neon-amber {
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.4);
        }

        .shadow-neon-sm {
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
        }

        .shadow-neon-lg-emerald {
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.6);
        }

        .shadow-neon-lg-blue {
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.6);
        }

        .shadow-neon-lg-purple {
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.6);
        }

        .shadow-neon-lg-amber {
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);
        }

        .shadow-neon-amber-lg {
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);
        }

        :root {
          --emerald-rgb: 16, 185, 129;
          --blue-rgb: 59, 130, 246;
          --purple-rgb: 139, 92, 246;
          --amber-rgb: 245, 158, 11;
        }
      `}</style>
    </div>
  );
}
