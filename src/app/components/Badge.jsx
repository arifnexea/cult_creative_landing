import React from "react";
import { motion } from "framer-motion";

const Badge = ({ contents }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      className="p-3 border border-[#8A5AFE] rounded-lg font-aileron font-bold"
    >
      <p className="bg-gradient-to-r from-[#8A5AFE] to-[#9618f6] inline-block text-transparent bg-clip-text">
        {contents?.toUpperCase()}
      </p>
    </motion.div>
  );
};

export default Badge;
