"use client";

import { motion } from "framer-motion";

const ContactStarField = () => {
  const stars = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    animate: {
      opacity: [0, Math.random() * 0.7, 0],
      scale: [0, 1, 0],
    },
    transition: {
      duration: Math.random() * 5 + 3,
      repeat: Infinity,
      delay: Math.random() * 8,
      ease: "easeInOut",
    },
    style: {
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      backgroundColor: `hsl(${260 + Math.random() * 60}, 100%, ${
        70 + Math.random() * 20
      }%)`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      boxShadow: `0 0 ${Math.random() * 4 + 2}px ${
        Math.random() * 2 + 1
      }px hsl(${260 + Math.random() * 60}, 100%, 80%)`,
    },
  }));

  return (
    <div className="absolute inset-0 z-0">
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full"
          animate={star.animate}
          transition={star.transition}
          style={star.style}
        />
      ))}
    </div>
  );
};

export default ContactStarField;
