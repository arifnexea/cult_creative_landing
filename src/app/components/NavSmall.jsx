import React from "react";
import { motion } from "framer-motion";

const NavSmall = ({ isVisible, linerstart, linerEnd, btnColor, btnstyle }) => {
  return (
    isVisible && (
      <motion.nav
        key="modal"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className={`absolute top-20 p-5 text-center left-0 w-screen h-50 bg-gradient-to-b from-[${linerstart}] to-[${linerEnd}]`}
      >
        <div className="flex flex-col gap-5">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            className={`text-3xl font-serif italic text-[${btnColor}] font-bold ${btnstyle}`}
          >
            For brands
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            className="text-3xl font-serif italic text-black font-bold"
          >
            For creators
          </motion.button>
        </div>
      </motion.nav>
    )
  );
};

export default NavSmall;
