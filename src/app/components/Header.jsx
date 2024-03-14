"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import HeaderButton from "./HeaderButton";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useToggle from "../hooks/toggle";
import NavSmall from "./NavSmall";

const Header = () => {
  const [state, toggle, setToggle] = useToggle();

  return (
    <nav className="py-4 px-8 bg-[#FAF9F6] sticky top-0 z-10 drop-shadow-md">
      <div className="flex items-center">
        <Link href={"/"} onClick={() => setToggle(false)}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={120}
              height={120}
              className="text-cyan-600"
            />
          </motion.div>
        </Link>
        <div className="sm:flex ms-auto gap-5 hidden">
          <HeaderButton />
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="flex ms-auto gap-5 sm:hidden"
          onClick={toggle}
        >
          <Icon
            icon="iconamoon:menu-burger-horizontal"
            color="black"
            width={26}
            cursor={"pointer"}
          />
        </motion.div>
      </div>
      <NavSmall isVisible={state} />
    </nav>
  );
};

export default Header;
