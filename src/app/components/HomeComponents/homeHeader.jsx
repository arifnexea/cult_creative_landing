"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import HeaderButton from "../HeaderButton";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useToggle from "@/app/hooks/toggle";
import NavSmall from "../NavSmall";

const HomeHeader = ({ logo }) => {
  const [state, toggle, setToggle] = useToggle();

  return (
    <nav
      className={`py-4 px-8 bg-[#FAF9F6] sticky top-0 z-10 ${
        !state && "drop-shadow-md"
      }`}
    >
      <div className="flex items-center">
        <Link href={"/"} onClick={() => setToggle(false)}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              src={`${logo}`}
              alt="logo"
              width={120}
              height={120}
              className="text-cyan-600"
              priority
            />
          </motion.div>
        </Link>
        <div className="sm:flex ms-auto gap-5 hidden">
          <HeaderButton
            textColor={"#1340FF"}
            borderColor={"#1340FF"}
            btnStyle={""}
          />
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
      <NavSmall
        isVisible={state}
        linerstart={"#FAF9F6"}
        linerEnd={"#1340FF"}
        btnColor={"#1340FF"}
        btnstyle={""}
      />
    </nav>
  );
};

export default HomeHeader;
