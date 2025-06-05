"use client";

import React, { useEffect, useState } from "react";
import OurEthos from "../component/OurServicesComponents/OurEthos";
import ServicesOverviewCards from "../component/OurServicesComponents/ServicesOverviewCards";

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
    const animationDuration = Math.random() * 30 + 20;

    setStyle({
      width: `${randomWidth}px`,
      height: `${randomHeight}px`,
      backgroundColor: `hsl(${randomHue}, 100%, ${randomLightness}%)`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: randomOpacity,
      boxShadow: `0 0 ${randomShadowBlur}px ${randomShadowSpread}px hsl(${randomHue}, 100%, 80%)`,
      animation: `float-particle ${animationDuration}s linear infinite`,
    });
  }, []);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

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

      {/* CSS animations and custom classes */}
      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(10px, -10px);
          }
          66% {
            transform: translate(-10px, 15px);
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
