import { motion } from "framer-motion";

export default function OurBeliefSection() {
  return (
    <section className="relative py-28 bg-gray-950 text-white overflow-hidden">
      {/* Animated background gradient overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(139,92,246,0.2) 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl font-extrabold mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          We Build Campaigns with a Conscience
        </motion.h2>

        <motion.h3
          className="text-xl text-cyan-400 font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Rooted in values. Driven by integrity. Aligned with creators.
        </motion.h3>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At BetterMorals, we don't just automate. We amplify. We're not here to
          trick people into clicking—we're here to build trust, champion
          creators, and change the narrative around what marketing can be.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-900/30 to-red-600/10 p-6 rounded-xl border border-red-600/20 shadow-md"
          >
            <h3 className="text-2xl font-bold mb-3 text-red-400">
              The Industry Standard
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-gray-400">
              <li>Replace humans with prompts</li>
              <li>Exploit insecurities to convert</li>
              <li>Harvest data without consent</li>
              <li>Drive prices and quality into the ground</li>
            </ul>
            <p className="mt-4 text-sm italic text-red-300">
              Result: Disconnected audiences. Distrustful customers. Burnout on
              both sides.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/30 to-cyan-600/10 p-6 rounded-xl border border-cyan-600/20 shadow-md"
          >
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">
              The BetterMorals Way
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-gray-300">
              <li>AI supports, never replaces, human creators</li>
              <li>No manipulation—just clear, ethical messaging</li>
              <li>Privacy and consent built-in from the start</li>
              <li>Relationships over reach. Value over volume.</li>
            </ul>
            <p className="mt-4 text-sm italic text-cyan-300">
              Result: Thriving creatives. Loyal audiences. Brands that actually
              matter.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Optional: animated visual background accents */}
      <motion.div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full opacity-20"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute bottom-0 -right-32 w-96 h-96 rounded-full opacity-20"
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
    </section>
  );
}
