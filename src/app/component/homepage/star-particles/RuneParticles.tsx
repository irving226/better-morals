"use client";

import { motion } from "framer-motion";

const RuneParticles = () => {
  // This logic is safe now because it only runs on the client.
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    animate: {
      scale: [0, 1, 0],
      x: [0, Math.cos(i * 30 * (Math.PI / 180)) * 80],
      y: [0, Math.sin(i * 30 * (Math.PI / 180)) * 80],
    },
    transition: {
      duration: 2 + Math.random(),
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeOut",
    },
    style: {
      width: `${4 + Math.random() * 6}px`,
      height: `${4 + Math.random() * 6}px`,
      background: `rgba(${139 + Math.random() * 97}, ${
        92 + Math.random() * 144
      }, ${246 - Math.random() * 93}, 0.8)`,
      boxShadow: `0 0 8px rgba(${139 + Math.random() * 97}, ${
        92 + Math.random() * 144
      }, ${246 - Math.random() * 93}, 0.8)`,
    },
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={particle.animate}
          style={particle.style}
        />
      ))}
    </>
  );
};

export default RuneParticles;
