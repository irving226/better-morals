"use client";

import AppBar from "./component/Appbar/HomeAppbar";
import "./globals.css";
import VisitContactSection from "./component/HomePageSections/VisitContactSection";
import CombinedSection from "./component/HomePageSections/CombinedSection";
import OurServicesSection from "./component/HomePageSections/OurServicesSection";
import HeroSection from "./component/HomePageSections/HeroSection";
export default function HomePage() {
  return (
    <>
      <AppBar />

      <main className="main-wrapper">
        <HeroSection />

        {/* Wave Transition - Creates the curved shape */}
        <div className="relative z-10 mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 180"
            className="w-full h-auto relative z-10"
          >
            <defs>
              <linearGradient id="servicesWave" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />{" "}
                {/* transparent start */}
                <stop offset="70%" stopColor="#0f172a" stopOpacity="0.6" />{" "}
                {/* darker fade-in */}
                <stop
                  offset="100%"
                  stopColor="#0f172a"
                  stopOpacity="0.85"
                />{" "}
                {/* strong base */}
              </linearGradient>
            </defs>

            <path
              fill="url(#servicesWave)"
              d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,122.7C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[80vw] h-40 bg-emerald-400/20 blur-3xl rounded-full pointer-events-none z-0" />

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
        <section className="relative z-10">
          <CombinedSection />
        </section>
        <div className="relative z-4">
          {/* <svg
            className="w-full h-2"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,117.3C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#e0f7fa"
            />
          </svg> */}
        </div>

        <VisitContactSection />
      </main>
      {/* CSS for animations - add to globals.css */}
      <style jsx global>{`
        /* Hero background styling */
        .hero-background {
          background-image: linear-gradient(
              to bottom right,
              rgba(20, 30, 70, 0.5),
              rgba(10, 15, 50, 0.5)
            ),
            url("/leaves.jpg");
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 100%;
        }

        /* Light ray animations */
        .light-ray {
          position: absolute;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          width: 150px;
          height: 100%;
          transform: rotate(-45deg);
          filter: blur(5px);
          opacity: 0.4;
        }

        .light-ray-1 {
          top: -50%;
          left: 20%;
          animation: ray-move-1 8s ease-in-out infinite;
        }

        .light-ray-2 {
          top: -20%;
          left: 60%;
          animation: ray-move-2 12s ease-in-out infinite;
        }

        .light-ray-3 {
          top: 30%;
          left: 10%;
          animation: ray-move-3 10s ease-in-out infinite;
        }

        @keyframes ray-move-1 {
          0%,
          100% {
            transform: rotate(-45deg) translateY(0);
          }
          50% {
            transform: rotate(-45deg) translateY(30vh);
          }
        }

        @keyframes ray-move-2 {
          0%,
          100% {
            transform: rotate(-45deg) translateY(0);
          }
          50% {
            transform: rotate(-45deg) translateY(-30vh);
          }
        }

        @keyframes ray-move-3 {
          0%,
          100% {
            transform: rotate(-45deg) translateX(0);
          }
          50% {
            transform: rotate(-45deg) translateX(30vw);
          }
        }

        /* Enhanced neon text effect */
        .neon-text {
          position: relative;
          text-shadow: 0 0 10px rgba(255, 230, 90, 0.5),
            0 0 20px rgba(255, 230, 90, 0.3), 0 0 30px rgba(255, 230, 90, 0.1);
        }

        /* Text shimmer animation */
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        /* Glass effect improvements */
        .glass-overlay {
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }
      `}</style>
    </>
  );
}
