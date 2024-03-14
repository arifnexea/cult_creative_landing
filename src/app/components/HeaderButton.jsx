import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderButton = () => {
  return (
    <>
      <Link href={"/brands"}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="py-1.5 px-10 rounded-lg text-[#123eff] text-sm border border-[#123fff]"
        >
          For brands
        </motion.button>
      </Link>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="py-1.5 px-10 rounded-lg text-[#123eff] text-sm border border-[#123fff]"
      >
        For creators
      </motion.button>
    </>
  );
};

export default HeaderButton;
