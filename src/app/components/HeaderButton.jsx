import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useToggle from "../hooks/toggle";

const HeaderButton = ({btnStyle ,textColor ,borderColor}) => {
  const [setToggle] = useToggle();
  return (
    <>
      <Link href={"/home"} onClick={() => setToggle(false)}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={`py-1.5 px-10 rounded-lg text-[${textColor}] text-sm border border-[${borderColor}]  ${btnStyle}`}
        >
          For brands
        </motion.button>
      </Link>
      <Link href={"/home"} onClick={() => setToggle(false)}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={`py-1.5 px-10 rounded-lg text-[${textColor}] text-sm border border-[${borderColor}] ${btnStyle}`}
        >
          For creators
        </motion.button>
      </Link>
    </>
  );
};

export default HeaderButton;
