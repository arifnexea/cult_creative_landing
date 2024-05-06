import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useToggle from "../hooks/toggle";

const HeaderButton = ({ btnStyle, borderColor }) => {
  const [setToggle] = useToggle();
  return (
    <>
      <Link href={"/brands"} onClick={() => setToggle(false)}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="py-2.5 px-10 rounded-full text-[#F4F4F4] text-xs bg-[#1340FF] uppercase font-aileron"
        >
          For brands
        </motion.button>
      </Link>
      <Link href={"/creators"} onClick={() => setToggle(false)}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="py-2.5 px-10 rounded-full text-[#F4F4F4] text-xs bg-[#1340FF] uppercase font-aileron"
        >
          For creators
        </motion.button>
      </Link>
    </>
  );
};

export default HeaderButton;
