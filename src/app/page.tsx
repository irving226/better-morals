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
        {/* <div className="relative z-10 mt-8"> */}
        <div>
          {/* <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[80vw] h-40 bg-emerald-400/20 blur-3xl rounded-full pointer-events-none z-0" /> */}

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
        <section>
          <CombinedSection />
        </section>
        <div>
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
    </>
  );
}
