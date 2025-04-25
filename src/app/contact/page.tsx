"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "General Inquiry", // Default subject
  });

  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const formRef = useRef<HTMLFormElement>(null);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Success state
    setIsSubmitting(false);
    setFormSubmitted(true);

    // Reset form after delay
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        message: "",
        subject: "General Inquiry",
      });
      setFormSubmitted(false);
    }, 3000);
  };

  // Calculate glow position for focused input
  const calculateGlowPosition = (fieldName: string) => {
    if (activeField !== fieldName) return {};

    const fieldElement = document.getElementById(fieldName);
    if (!fieldElement) return {};

    const rect = fieldElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    return {
      background: `radial-gradient(circle 150px at ${centerX}px ${centerY}px, rgba(56, 189, 248, 0.15), transparent 80%)`,
    };
  };

  // Define subjects list for dropdown
  const subjects = [
    "General Inquiry",
    "AI Marketing Solutions",
    "Sustainability Consultation",
    "Partnership Opportunities",
    "Career Information",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Digital grid background */}
      <div className="absolute inset-0 grid grid-cols-24 grid-rows-24 opacity-10 z-0">
        {Array.from({ length: 576 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-cyan-500/10" />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
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

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full"></div>

      {/* Custom cursor follow effect for UI interaction */}
      <div
        className="fixed w-80 h-80 rounded-full pointer-events-none z-0 opacity-20 transition-transform duration-200 ease-out"
        style={{
          background: `radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%)`,
          transform: `translate(${cursorPosition.x - 160}px, ${
            cursorPosition.y - 160
          }px)`,
          opacity: activeField ? 0 : 0.2,
        }}
      />

      {/* Interactive glow for form fields */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={calculateGlowPosition(activeField || "")}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Get in{" "}
          <span className="relative">
            <span className="absolute -inset-1 bg-cyan-400/20 blur-lg rounded-lg"></span>
            <span className="relative text-cyan-400 text-shadow-cyan">
              Touch
            </span>
          </span>
        </h1>
        <div className="w-24 h-0.5 bg-cyan-400 mx-auto my-8 rounded-full shadow-glow-cyan"></div>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          We'd love to hear from you. Fill out the form and we'll respond as
          soon as we can.
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto bg-gray-800/40 backdrop-blur-lg p-10 rounded-2xl border border-gray-700/50 shadow-2xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {formSubmitted ? (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mx-auto flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-300">
              Thank you for reaching out. We&apos;ll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6">
            {/* Name field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                />
                <AnimatePresence>
                  {activeField === "name" && (
                    <motion.div
                      className="absolute inset-0 rounded-md pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-x-0 h-px -bottom-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-y-0 w-px right-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-x-0 h-px -top-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-y-0 w-px left-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Email field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                />
                <AnimatePresence>
                  {activeField === "email" && (
                    <motion.div
                      className="absolute inset-0 rounded-md pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-x-0 h-px -bottom-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-y-0 w-px right-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-x-0 h-px -top-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-y-0 w-px left-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subject field (dropdown) */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Subject
              </label>
              <div className="relative">
                <select
                  name="subject"
                  id="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus("subject")}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 appearance-none"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <AnimatePresence>
                  {activeField === "subject" && (
                    <motion.div
                      className="absolute inset-0 rounded-md pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-x-0 h-px -bottom-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-y-0 w-px right-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-x-0 h-px -top-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-y-0 w-px left-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Message field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                />
                <AnimatePresence>
                  {activeField === "message" && (
                    <motion.div
                      className="absolute inset-0 rounded-md pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-x-0 h-px -bottom-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-y-0 w-px right-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-x-0 h-px -top-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute inset-y-0 w-px left-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Submit button */}
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md font-medium overflow-hidden"
              >
                {/* Background and hover effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-500 ease-out group-hover:w-full"></span>

                {/* Text and loading state */}
                <span className="relative flex items-center justify-center">
                  {isSubmitting ? (
                    <svg
                      className="animate-spin mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </span>
              </button>
            </motion.div>
          </form>
        )}
      </motion.div>

      {/* Alternative contact methods */}
      <motion.div
        className="max-w-3xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Email */}
        <motion.div
          className="group bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-colors duration-300"
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-glow-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
          <p className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
            contact@bettermorals.ai
          </p>
        </motion.div>

        {/* Call */}
        <motion.div
          className="group bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-full flex items-center justify-center mb-4 shadow-glow-purple">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
          <p className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
            +1 (555) 123-4567
          </p>
        </motion.div>

        {/* Visit */}
        <motion.div
          className="group bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-colors duration-300"
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-4 shadow-glow-emerald">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
          <p className="text-gray-400 hover:text-emerald-300 transition-colors duration-300">
            123 Eco Avenue, Denver, CO
          </p>
        </motion.div>
      </motion.div>

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

        .text-shadow-cyan {
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.6),
            0 0 20px rgba(6, 182, 212, 0.4);
        }

        .shadow-glow-cyan {
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
        }

        .shadow-glow-blue {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }

        .shadow-glow-purple {
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        }

        .shadow-glow-emerald {
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </main>
  );
}
