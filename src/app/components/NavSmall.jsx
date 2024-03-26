import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const NavSmall = ({ isVisible, linerstart, linerEnd, btnColor, btnstyle }) => {
  return (
    isVisible && (
      <motion.nav
        key="modal"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className={`absolute top-20 p-5 text-center left-0 w-screen h-50 bg-[#FAF9F6] bg-gradient-to-r from-[${linerstart}] to-[${linerEnd}`}
      >
        <div className="flex flex-col gap-5">
          <Link href="/home">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            className={`text-3xl font-serif italic text-[${btnColor}] font-bold ${btnstyle}`}
          >
            For brands
          </motion.button>
          </Link>
          <Link href="/creators">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            className="text-3xl font-serif italic text-black font-bold "
          >
            For creators
          </motion.button>
          </Link>
        </div>
      </motion.nav>
    )
  );
};

export default NavSmall;
