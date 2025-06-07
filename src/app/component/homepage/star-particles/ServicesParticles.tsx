import { motion } from "framer-motion";

export default function OurServicesSection() {
  const services = [
    {
      title: "Eco-Conscious Strategy",
      description:
        "Develop sustainable brand strategies that position your business for long-term success while minimizing environmental impact.",
      icon: "leaf",
      color: "from-cyan-400 to-emerald-500",
      hoverGlow: "rgba(6, 182, 212, 0.7)",
      delay: 0.2,
    },
    {
      title: "Sustainable Content",
      description:
        "Create engaging, environmentally-conscious content that resonates with modern audiences while supporting your green initiatives.",
      icon: "compass",
      color: "from-purple-400 to-fuchsia-500",
      hoverGlow: "rgba(139, 92, 246, 0.7)",
      delay: 0.4,
    },
    {
      title: "Green Tech Marketing",
      description:
        "Leverage eco-friendly digital marketing strategies that maximize your reach while minimizing carbon footprint.",
      icon: "bolt",
      color: "from-amber-400 to-yellow-500",
      hoverGlow: "rgba(234, 179, 8, 0.7)",
      delay: 0.6,
    },
  ];

  const renderIcon = (iconName, size = 6) => {
    switch (iconName) {
      case "leaf":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        );
      case "compass":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        );
      case "bolt":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        );
      default:
        return null;
    }
  };

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

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
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
              backgroundColor: `hsl(${140 + Math.random() * 60}, 100%, ${
                70 + Math.random() * 20
              }%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px ${
                Math.random() * 2 + 1
              }px hsl(${140 + Math.random() * 60}, 100%, 80%)`,
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
            "radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent 70%)",
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
            "radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold tracking-tight text-white mb-4 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-600/30 to-emerald-400/30 blur-xl rounded-lg"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-500">
                Our Services
              </span>
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto my-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ boxShadow: "0 0 15px rgba(16, 185, 129, 0.7)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Card with glassmorphism */}
              <div className="relative h-full">
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur-md transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${service.hoverGlow}, rgba(255, 255, 255, 0.3))`,
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>

                {/* Glass card */}
                <div className="relative h-full backdrop-blur-xl bg-gray-900/50 border border-gray-700/50 p-8 rounded-xl shadow-2xl overflow-hidden">
                  {/* Subtle animated gradient lines */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                      className="absolute h-px w-full opacity-20"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${service.hoverGlow}, transparent)`,
                        top: "30%",
                      }}
                      animate={{ left: ["-100%", "100%"] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 1.5,
                      }}
                    />
                  </div>

                  {/* Neon icon */}
                  <div className="relative mb-6">
                    <motion.div
                      className="absolute -inset-3 rounded-full blur-md z-0 opacity-50"
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      style={{
                        background: `radial-gradient(circle, ${service.hoverGlow}, transparent)`,
                      }}
                    />
                    <div
                      className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center bg-gray-900 border border-opacity-50"
                      style={{
                        borderColor: service.hoverGlow,
                        boxShadow: `0 0 15px ${service.hoverGlow}`,
                      }}
                    >
                      <div
                        className={`bg-clip-text bg-gradient-to-r ${service.color}`}
                      >
                        {renderIcon(service.icon, 8)}
                      </div>
                    </div>
                  </div>

                  {/* Text content */}
                  <motion.h3
                    className="text-2xl font-bold mb-4 text-white"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.8)",
                        "0 0 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.9)",
                        "0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.8)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-gray-300">{service.description}</p>

                  {/* Animated link */}
                  <motion.div
                    className="mt-6 inline-flex items-center text-sm font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <span
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                    >
                      Learn more
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className="relative group overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all duration-300"></div>

            {/* Animated light reflection */}
            <div className="absolute -inset-full h-full w-1/2 z-5 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>

            {/* Button text */}
            <span className="relative z-10 block px-8 py-3 text-white font-medium text-lg">
              Explore All Services
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
