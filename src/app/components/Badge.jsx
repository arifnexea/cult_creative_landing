import React from "react";
import { motion } from "framer-motion";

const Badge = ({ contents }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      className="p-3 px-5 border border-[#8A5AFE] text-center rounded-full font-aileron font-bold"
    >
      <p className="bg-gradient-to-r from-[#8A5AFE] to-[#9618f6] inline-block text-transparent bg-clip-text text-[20px] md:text-[30px]">
        {contents?.toUpperCase()}
      </p>
    </motion.div>
  );
};

export default Badge;
