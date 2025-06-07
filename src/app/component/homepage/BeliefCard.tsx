// File: BeliefCard.js (or .tsx)

import { memo } from "react";
import { motion } from "framer-motion";

const BeliefCard = ({ title, listItems, resultText, theme }) => {
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
};

// This final line is the most critical part.
// It ensures that this component is the default export.
export default memo(BeliefCard);
