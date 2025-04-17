"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Driven Insights",
    description:
      "Leverage our AI to gain actionable insights, optimize campaigns, and improve ROI. We provide data-driven strategies for maximum impact.",
  },
  {
    title: "Personalized Customer Journeys",
    description:
      "Create personalized customer experiences with our AI-powered tools. Enhance engagement and build stronger connections.",
  },
  {
    title: "Sustainable AI Solutions",
    description:
      "Our AI solutions are designed with sustainability in mind. We help you create eco-friendly campaigns that resonate with your audience.",
  },
  {
    title: "Real-Time Optimization",
    description:
      "Optimize your marketing efforts in real-time with our AI-powered analytics. Make data-driven decisions and achieve better results faster.",
  },
];

export default function AISection() {
  return (
    <section className=" py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white/60 backdrop-blur-lg shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-black/5"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
