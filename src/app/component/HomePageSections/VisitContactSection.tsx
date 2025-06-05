"use client";

import { motion } from "framer-motion";

export default function VisitContactSection() {
  // Array for animated digital coordinates/points
  const digitalPoints = [
    { x: 15, y: 20 },
    { x: 85, y: 30 },
    { x: 25, y: 70 },
    { x: 75, y: 80 },
    { x: 50, y: 50 },
  ];

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

      {/* Animated stars/particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            animate={{
              opacity: [0, Math.random() * 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              backgroundColor: `hsl(${260 + Math.random() * 60}, 100%, ${
                70 + Math.random() * 20
              }%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px ${
                Math.random() * 2 + 1
              }px hsl(${260 + Math.random() * 60}, 100%, 80%)`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
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

      {/* Title section */}
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

      {/* Digital coordinate system - Map points connected with animated lines */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
        {digitalPoints.map((point, index) => (
          <motion.div
            key={`point-${index}`}
            className="absolute w-2 h-2 rounded-full bg-purple-500"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              boxShadow: "0 0 10px rgba(139, 92, 246, 0.7)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Connecting lines between points */}
        {digitalPoints.map((point, index) => {
          const nextPoint = digitalPoints[(index + 1) % digitalPoints.length];
          return (
            <motion.div
              key={`line-${index}`}
              className="absolute h-px bg-gradient-to-r from-purple-500/50 to-pink-500/50"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                width: `${Math.sqrt(
                  Math.pow(nextPoint.x - point.x, 2) +
                    Math.pow(nextPoint.y - point.y, 2)
                )}%`,
                transformOrigin: "left center",
                transform: `rotate(${
                  Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
                  (180 / Math.PI)
                }deg)`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />
          );
        })}
      </div>

      {/* Content container with glassmorphism */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto rounded-2xl overflow-hidden border border-purple-500/20 bg-gray-900/40 backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,0.3)] mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Animated glow accent */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Digital circuit traces - Decorative pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`circuit-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              style={{
                top: `${15 + i * 20}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                left: ["-100%", "100%"],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.8,
              }}
            />
          ))}

          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`v-circuit-${i}`}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent"
              style={{
                left: `${20 + i * 20}%`,
              }}
              animate={{
                top: ["-100%", "100%"],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.2,
              }}
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch p-8 relative z-10">
          {/* Map with neon frame */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden relative">
            {/* Animated neon border */}
            <motion.div
              className="absolute -inset-0.5 rounded-xl"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(139, 92, 246, 0.7), inset 0 0 10px rgba(139, 92, 246, 0.7)",
                  "0 0 15px rgba(139, 92, 246, 0.9), inset 0 0 15px rgba(139, 92, 246, 0.9)",
                  "0 0 10px rgba(139, 92, 246, 0.7), inset 0 0 10px rgba(139, 92, 246, 0.7)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))",
              }}
            />

            {/* Digital scanning effect overlay */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none opacity-20 overflow-hidden"
              style={{
                mixBlendMode: "screen",
              }}
            >
              <motion.div
                className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Actual map */}
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

          {/* Info with cyber-futuristic styling */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
            {/* Cyber badge */}
            <div className="absolute -left-2 top-0 flex items-center space-x-1">
              <motion.div
                className="w-2 h-2 rounded-full bg-pink-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="text-xs font-mono text-pink-500"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                LOCATION_PRIME
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6">
              Connect With Us
            </h3>

            {/* Info with icon decorations */}
            <div className="flex items-center mb-4 group">
              <motion.div
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 mr-4 border border-purple-500/30"
                whileHover={{ scale: 1.1 }}
                style={{ boxShadow: "0 0 10px rgba(139, 92, 246, 0.3)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-pink-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </motion.div>
              <motion.p
                className="text-gray-300 group-hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                123 Walnut Street, Denver, CO 80216
              </motion.p>
            </div>

            <div className="flex items-center mb-4 group">
              <motion.div
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 mr-4 border border-purple-500/30"
                whileHover={{ scale: 1.1 }}
                style={{ boxShadow: "0 0 10px rgba(139, 92, 246, 0.3)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-pink-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
              <motion.p
                className="text-gray-300 group-hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                Open Monday to Friday, 9 AM – 5 PM
              </motion.p>
            </div>

            <div className="flex items-center mb-8 group">
              <motion.div
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 mr-4 border border-purple-500/30"
                whileHover={{ scale: 1.1 }}
                style={{ boxShadow: "0 0 10px rgba(139, 92, 246, 0.3)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-pink-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>
              <div className="text-gray-300 group-hover:text-white transition-colors">
                Contact us at{" "}
                <motion.a
                  href="mailto:hello@example.com"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 relative inline-block group-hover:underline"
                  whileHover={{
                    textShadow: "0 0 8px rgba(139, 92, 246, 0.7)",
                  }}
                >
                  clarityskyz@bettermoralsmarketing.com
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
            </div>

            {/* Contact button with neon effect */}
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Glowing background */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 blur-sm transition-all duration-300"></span>

              {/* Animated light reflection */}
              <motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "linear-gradient(270deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%)",
                    "linear-gradient(270deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)",
                    "linear-gradient(270deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%)",
                  ],
                  backgroundPosition: ["-100% 0%", "200% 0%", "-100% 0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Button text */}
              <span className="relative z-10 px-8 py-3 text-white font-medium flex items-center space-x-2">
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </motion.a>
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
          {/* Outer spinning circle */}
          <motion.div
            className="absolute w-64 h-64 rounded-full border-2 border-purple-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)" }}
          />

          {/* Middle spinning circle - opposite direction */}
          <motion.div
            className="absolute w-48 h-48 rounded-full border-2 border-pink-500/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)" }}
          />

          {/* Inner spinning circle */}
          <motion.div
            className="absolute w-32 h-32 rounded-full border-2 border-purple-400/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)" }}
          />

          {/* Magical rune symbols positioned around the circles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`rune-${i}`}
              className="absolute text-xl text-purple-400 font-bold"
              animate={{
                opacity: [0.6, 1, 0.6],
                textShadow: [
                  "0 0 5px rgba(139, 92, 246, 0.7)",
                  "0 0 15px rgba(139, 92, 246, 0.9)",
                  "0 0 5px rgba(139, 92, 246, 0.7)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
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

          {/* Pulsing core */}
          <motion.div
            className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            animate={{
              scale: [0.8, 1, 0.8],
              boxShadow: [
                "0 0 20px rgba(139, 92, 246, 0.7)",
                "0 0 30px rgba(139, 92, 246, 0.9)",
                "0 0 20px rgba(139, 92, 246, 0.7)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Magical energy particles radiating from center */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: [0, Math.cos(i * 30 * (Math.PI / 180)) * 80],
                y: [0, Math.sin(i * 30 * (Math.PI / 180)) * 80],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              style={{
                width: 4 + Math.random() * 6,
                height: 4 + Math.random() * 6,
                background: `rgba(${139 + Math.random() * 97}, ${
                  92 + Math.random() * 144
                }, ${246 - Math.random() * 93}, 0.8)`,
                boxShadow: `0 0 8px rgba(${139 + Math.random() * 97}, ${
                  92 + Math.random() * 144
                }, ${246 - Math.random() * 93}, 0.8)`,
              }}
            />
          ))}

          {/* Text in the center */}
          <motion.div
            className="relative text-white text-center font-bold"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
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
