"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Campaign = {
  client: string;
  date: string;
  tags: string[];
  highlights: string[];
  description: string;
};

const campaigns: Campaign[] = [
  {
    client: "GreenTech",
    date: "May 2023",
    tags: ["Eco-Friendly", "Sustainability"],
    highlights: ["Impact: Results"],
    description:
      "This campaign focused on eco-conscious branding and led to a 45% increase in customer engagement through sustainable messaging.",
  },
  {
    client: "Retail Innovators",
    date: "August 2023",
    tags: ["AI Solutions", "Innovation"],
    highlights: ["Impact: Automation"],
    description:
      "Retail Innovators leveraged our AI tools to enhance targeting accuracy, reducing campaign costs by 22%.",
  },
];

export default function CampaignSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Successful Campaigns
        </h2>

        {campaigns.map((c, index) => (
          <div
            key={c.client}
            className="border border-black/5 bg-white/70 backdrop-blur-md shadow-md rounded-2xl transition-all"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {c.client}
                </h3>
                <p className="text-sm text-gray-500">{c.date}</p>
              </div>
              <span className="text-gray-500 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden px-6 pb-6"
                >
                  <div className="text-gray-700 text-sm mb-3">
                    {c.description}
                  </div>

                  {/* Tags as badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {c.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
