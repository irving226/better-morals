import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const ParticleLayer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: `particle-${i}`,
      x1: Math.random() * 800,
      x2: Math.random() * 800,
      y1: Math.random() * 100,
      y2: Math.random() * 100,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
    }));
  }, []);

  if (!isClient) return null;

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            x: [p.x1, p.x2],
            y: [p.y1, p.y2],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 4px rgba(6, 182, 212, 0.8)",
          }}
        />
      ))}
    </>
  );
};

export default ParticleLayer;
