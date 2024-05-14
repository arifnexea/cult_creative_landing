import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavSmall = ({ isVisible }) => {
  return (
    isVisible && (
      <motion.nav
        key="modal"
        initial={{ opacity: 0, top: -100 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        className={`sticky top-0 p-5 left-0 h-50 bg-[#F4F4F4]`}
      >
        <div className="flex flex-col justify-between items-center gap-10 mt-5">
          <Link href="/brands">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              className="text-slate-700 font-aileron text-lg font-semibold"
              // className={`text-3xl font-serif italic text-[${btnColor}] font-bold ${btnstyle}`}
            >
              For brands
            </motion.button>
          </Link>
          <Link href="/creators">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              className="text-slate-700 font-aileron text-lg font-semibold"
            >
              For creators
            </motion.button>
          </Link>
          {/* <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="bg-[#8A5AFE] py-3 px-12 text-md rounded-full text-zinc-100 font-aileron uppercase font-bold w-full"
          >
            Get Started
          </motion.button> */}
        </div>
      </motion.nav>
    )
  );
};

export default NavSmall;
