"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      key: `star-${i}`,
      opacity: Math.random() * 0.7,
      delay: Math.random() * 8,
      duration: Math.random() * 5 + 3,
      size: Math.random() * 3 + 1,
      colorHue: 180 + Math.random() * 60,
      lightness: 70 + Math.random() * 20,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      blur: Math.random() * 4 + 2,
      spread: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.key}
          className="absolute rounded-full"
          animate={{
            opacity: [0, star.opacity, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: `hsl(${star.colorHue}, 100%, ${star.lightness}%)`,
            top: star.top,
            left: star.left,
            boxShadow: `0 0 ${star.blur}px ${star.spread}px hsl(${star.colorHue}, 100%, 80%)`,
          }}
        />
      ))}
    </>
  );
};

export default StarField;
