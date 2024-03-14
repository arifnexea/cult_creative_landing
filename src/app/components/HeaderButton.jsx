import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useToggle from "../hooks/toggle";

const HeaderButton = () => {
  const [setToggle] = useToggle();
  return (
    <>
      <Link href={"/brands"} onClick={() => setToggle(false)}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="py-1.5 px-10 rounded-lg text-[#8A5AFE] text-sm border border-[#8A5AFE]"
        >
          For brands
        </motion.button>
      </Link>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="py-1.5 px-10 rounded-lg text-[#8A5AFE] text-sm border border-[#8A5AFE]"
      >
        For creators
      </motion.button>
    </>
  );
};

export default HeaderButton;
