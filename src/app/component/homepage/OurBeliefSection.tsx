// ADD THIS LINE AT THE VERY TOP
"use client";

import { motion } from "framer-motion";
import { memo } from "react";

// --- BeliefCard Component Definition (can be in the same file or imported) ---
// For simplicity, I'm including it here. If it's in another file, just import it.

const beliefCardThemes = {
  standard: {
    initialX: -50,
    gradient: "from-red-900/30 to-red-600/10",
    border: "border-red-600/20",
    textColor: "text-red-400",
    listColor: "text-gray-400",
    resultColor: "text-red-300",
  },
  morals: {
    initialX: 50,
    gradient: "from-cyan-900/30 to-cyan-600/10",
    border: "border-cyan-600/20",
    textColor: "text-cyan-400",
    listColor: "text-gray-300",
    resultColor: "text-cyan-300",
  },
};

const BeliefCard = memo(({ title, listItems, resultText, theme }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: theme.initialX },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      className={`bg-gradient-to-br ${theme.gradient} p-6 rounded-xl border ${theme.border} shadow-md`}
    >
      <h3 className={`text-2xl font-bold mb-3 ${theme.textColor}`}>{title}</h3>
      <ul className={`list-disc ml-6 space-y-2 text-sm ${theme.listColor}`}>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className={`mt-4 text-sm italic ${theme.resultColor}`}>{resultText}</p>
    </motion.div>
  );
});
BeliefCard.displayName = "BeliefCard";

// --- Main OurBeliefSection Component ---

const beliefData = [
  {
    title: "The Industry Standard",
    listItems: [
      "Replace humans with prompts",
      "Exploit insecurities to convert",
      "Harvest data without consent",
      "Drive prices and quality into the ground",
    ],
    resultText:
      "Result: Disconnected audiences. Distrustful customers. Burnout on both sides.",
    theme: beliefCardThemes.standard,
  },
  {
    title: "The BetterMorals Way",
    listItems: [
      "AI supports, never replaces, human creators",
      "No manipulation—just clear, ethical messaging",
      "Privacy and consent built-in from the start",
      "Relationships over reach. Value over volume.",
    ],
    resultText:
      "Result: Thriving creatives. Loyal audiences. Brands that actually matter.",
    theme: beliefCardThemes.morals,
  },
];

const BackgroundOrbs = () => (
  <>
    <motion.div
      className="absolute top-1/3 -left-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background:
          "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
      }}
    />
    <motion.div
      className="absolute bottom-0 -right-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{
        duration: 10,
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
);

export default function OurBeliefSection() {
  return (
    <section className="relative py-28 bg-gray-950 text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(139,92,246,0.2) 100%)",
          opacity: 0.05,
        }}
      />

      <BackgroundOrbs />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl font-extrabold mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          We Build Campaigns with a Conscience
        </motion.h2>

        <motion.h3
          className="text-xl text-cyan-400 font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Rooted in values. Driven by integrity. Aligned with creators.
        </motion.h3>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          At BetterMorals, we don't just automate. We amplify. We're not here to
          trick people into clicking—we're here to build trust, champion
          creators, and change the narrative around what marketing can be.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {beliefData.map((data) => (
            <BeliefCard key={data.title} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}
