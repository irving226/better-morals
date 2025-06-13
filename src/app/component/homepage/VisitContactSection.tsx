"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import the components that use randomness and disable SSR
const ContactStarField = dynamic(
  () => import("./star-particles/ContactStarField"),
  {
    ssr: false,
  }
);
const RuneParticles = dynamic(() => import("./star-particles/RuneParticles"), {
  ssr: false,
});

export default function VisitContactSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950 py-24">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-purple-500/30" />
          ))}
        </div>
      </div>

      {/* FIXED: Replace random star generation with our client-side component */}
      <ContactStarField />

      {/* Glowing orbs (These are fine as they don't use Math.random()) */}
      <motion.div
        className="absolute top-20 -right-20 w-96 h-96 rounded-full z-0"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full z-0"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(220, 38, 38, 0.2), transparent 70%)",
        }}
      />

      {/* ... (The entire Title Section remains the same) ... */}
      <div className="text-center mb-12 relative z-10">
        <motion.h2
          className="text-5xl font-bold tracking-tight text-white mb-4 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-pink-400/30 blur-xl rounded-lg"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Visit Us
            </span>
          </span>
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto my-8 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.7)" }}
        />
      </div>

      {/* ... (The entire Content Container with the map remains the same) ... */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto rounded-2xl overflow-hidden border border-purple-500/20 bg-gray-900/40 backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,0.3)] mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* ... (All the content inside this div is unchanged) ... */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch p-8 relative z-10">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden relative">
            {/* ... map content ... */}
            <div className="relative z-0 w-full h-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086393885042!2d-122.4010968240205!3d37.79239401266473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cf53c03d%3A0x9b68103820218710!2sGoogle%20San%20Francisco!5e0!3m2!1sen!2sus!4v1713330000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(80%) contrast(120%) brightness(80%)",
                }}
                allowFullScreen
                loading="lazy"
                className="min-h-[300px] w-full"
              ></iframe>
            </div>
          </div>
          {/* Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
            {/* ... info content ... */}
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6">
              Connect With Us
            </h3>
            <p>123 Walnut Street, Denver, CO 80216</p>
            {/* ... etc ... */}
          </div>
        </div>
      </motion.div>

      {/* Magical rune circle / portal effect at bottom */}
      <div className="max-w-4xl mx-auto relative z-10 mt-8 overflow-hidden">
        <motion.div
          className="relative flex justify-center items-center py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* ... (Outer, Middle, and Inner spinning circles remain the same) ... */}
          <motion.div
            className="absolute w-64 h-64 rounded-full border-2 border-purple-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)" }}
          />

          {/* ... (Magical rune symbols remain the same) ... */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`rune-${i}`}
              className="absolute text-xl text-purple-400 font-bold"
              /* ... styles and animations ... */
              style={{
                transform: `rotate(${i * 60}deg) translateY(-80px) rotate(-${
                  i * 60
                }deg)`,
                fontFamily: "fantasy",
              }}
            >
              {["✧", "⍟", "⚝", "✺", "⚘", "⚜"][i]}
            </motion.div>
          ))}

          {/* ... (Pulsing core remains the same) ... */}
          <motion.div
            className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            /* ... animations ... */
          />

          {/* FIXED: Replace the random particle generation with our client-side component */}
          <RuneParticles />

          {/* Text in the center */}
          <motion.div
            className="relative text-white text-center font-bold"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* ... text content ... */}
            <motion.p
              className="text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              DENVER
            </motion.p>
            <motion.p
              className="text-xs text-purple-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              39.7392° N, 104.9903° W
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
