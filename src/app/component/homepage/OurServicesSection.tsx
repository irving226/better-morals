"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ServicesParticles = dynamic(
  () => import("./star-particles/ServicesParticles"),
  {
    ssr: false,
  }
);

export default function OurServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-emerald-500/30" />
          ))}
        </div>
      </div>

      <ServicesParticles />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 -right-20 w-96 h-96 rounded-full z-0"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent 70%)",
        }}
      />
    </section>
  );
}
