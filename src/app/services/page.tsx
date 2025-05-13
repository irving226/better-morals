"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import OurEthos from "../component/OurServicesComponents/OurEthos";
import ServicesOverviewCards from "../component/OurServicesComponents/ServicesOverviewCards";

// Custom AnimatedSection component for scroll animations
const AnimatedSection = ({
  children = null as React.ReactNode,
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
const FloatingParticle = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const randomWidth = Math.random() * 3 + 1;
    const randomHeight = Math.random() * 3 + 1;
    const randomHue = 180 + Math.random() * 60;
    const randomLightness = 70 + Math.random() * 20;
    const randomOpacity = Math.random() * 0.4;
    const randomShadowBlur = Math.random() * 6 + 2;
    const randomShadowSpread = Math.random() * 2 + 1;

    setStyle({
      width: `${randomWidth}px`,
      height: `${randomHeight}px`,
      backgroundColor: `hsl(${randomHue}, 100%, ${randomLightness}%)`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: randomOpacity,
      boxShadow: `0 0 ${randomShadowBlur}px ${randomShadowSpread}px hsl(${randomHue}, 100%, 80%)`,
      animation: `float-particle ${Math.random() * 30 + 20}s linear infinite`,
    });
  }, []);

  return <div className="absolute rounded-full" style={style} />;
};

export default function ServicesSection() {
  const numberOfParticles = 15;

  return (
    <div className="relative overflow-hidden">
      {/* Dark background with gradient transitions */}
      <div id="services-section" className="relative overflow-hidden">
        <section className="relative py-12 bg-gradient-to-b from-gray-950 to-gray-950 overflow-hidden">
          {/* Floating particles */}
          <div className="absolute inset-0 z-0">
            {Array.from({ length: numberOfParticles }).map((_, i) => (
              <FloatingParticle key={i} />
            ))}
          </div>

          <OurEthos />
        </section>
      </div>

      {/* Wave transition */}
      <div className="relative h-20 bg-gray-950">
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
      <ServicesOverviewCards />

      {/* Changed to dark background for the bottom section */}
      <div className="relative py-24 bg-gray-900 text-white">
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

        <AnimatedSection
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
          delay={0.3}
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            We&apos;re not here to chase trends or push tactics that don&apos;t
            align. We&apos;re here to help you grow in a way that feels aligned,
            ethical, and sustainable. Our approach is grounded in compassion,
            driven by data, and powered by AI that amplifies humanity—not
            replaces it.
          </p>
          <p className="text-gray-300 mt-6 leading-relaxed text-lg">
            If you&apos;re here to change the world (or even just your corner of
            it), we&apos;re ready to build alongside you.
          </p>
        </AnimatedSection>
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
