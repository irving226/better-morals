"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const StarField = dynamic(() => import("./star-particles/StarField"), {
  ssr: false,
});

StarField.displayName = "StarField";

// GlowingOrbs component
const GlowingOrbs = memo(() => (
  <>
    <motion.div
      className="absolute top-1/4 -right-20 w-96 h-96 rounded-full z-0"
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background:
          "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
      }}
    />
    <motion.div
      className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full z-0"
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 4,
      }}
      style={{
        background:
          "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)",
      }}
    />
  </>
));
GlowingOrbs.displayName = "GlowingOrbs";

// CoreValue component
type CoreValueProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientId: string;
  gradientColors: [string, string];
  delay: number;
  shadowColor: string;
};

const CoreValue = memo(
  ({
    icon,
    title,
    description,
    gradientId,
    gradientColors,
    delay,
    shadowColor,
  }: CoreValueProps) => (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative">
        <motion.div
          className="absolute left-0 top-1/2 w-40 h-1.5 -z-10 origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: [0, 0.8, 0] }}
          transition={{
            duration: 0.8,
            delay,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            background: `linear-gradient(to right, transparent, ${shadowColor})`,
            transform: "translateY(-50%) translateX(-100%)",
            filter: "blur(3px)",
          }}
        />
        <motion.div
          className="absolute -inset-3 rounded-full blur-md z-0 opacity-70"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay * 2,
          }}
          style={{
            background: `radial-gradient(circle, ${shadowColor}, transparent)`,
          }}
        />
        <div
          className={`relative w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center z-10 border border-${gradientColors[1]}/50 shadow-[0_0_15px_${shadowColor}]`}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12"
            animate={{
              filter: [
                `drop-shadow(0 0 3px ${shadowColor})`,
                `drop-shadow(0 0 6px ${shadowColor})`,
                `drop-shadow(0 0 3px ${shadowColor})`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
            <defs>
              <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
                <stop stopColor={gradientColors[0]} />
                <stop offset="1" stopColor={gradientColors[1]} />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </div>
      <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-gray-300 max-w-xs">{description}</p>
    </motion.div>
  )
);
CoreValue.displayName = "CoreValue";

// ModernFeatureSection component
const ModernFeatureSection = () => {
  const coreValues = [
    {
      icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
      title: "Fast Results",
      description: "Delivering solutions with speed and precision.",
      gradientId: "boltGradient",
      gradientColors: ["#0EA5E9", "#06B6D4"] as [string, string],
      delay: 0.1,
      shadowColor: "rgba(6, 182, 212, 0.7)",
    },
    {
      icon: (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </>
      ),
      title: "Ethics First",
      description: "Guided by integrity in all our endeavors.",
      gradientId: "shieldGradient",
      gradientColors: ["#C084FC", "#8B5CF6"] as [string, string],
      delay: 0.3,
      shadowColor: "rgba(139, 92, 246, 0.7)",
    },
    {
      icon: (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      ),
      title: "Client Focus",
      description: "Building relationships through personalized service.",
      gradientId: "usersGradient",
      gradientColors: ["#FACC15", "#EAB308"] as [string, string],
      delay: 0.5,
      shadowColor: "rgba(234, 179, 8, 0.7)",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gray-950">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-cyan-500/30" />
          ))}
        </div>
      </div>

      <StarField />
      <GlowingOrbs />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-around space-y-12 md:space-y-0 md:space-x-8">
          {coreValues.map((value) => (
            <CoreValue key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatureSection;
