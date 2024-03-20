"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";
import Image from "next/image";
// bg-gradient-to-b from-[#1340FF] from-90% to-[#F4F4F4]
function HomeThree() {
  return (
    <section className="static lg:px-5 lg:py-12 p-2 md:p-6 bg-[#1340FF]">
      <div className="flex flex-col  justify-center items-center  gap-3">
        <Image
          src="/images/Main/videoBanner.png"
          alt="Nonico x Cult Creative"
          width={500}
          height={500}
          className="lg:size-9/12 size-full"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="absolute lg:right-0  w-[90%] lg:w-[40%] gap-10 "
        >
          <h1 className="lg:text-9xl lg:tracking-5 md:text-5xl  text-xl  font-aileron font-bold">
            how it{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="font-serif italic"
            >
              <br /> works
            </motion.span>
            <br />
          </h1>
          <p className="lg:text-lg text-base  md:text-lg text-[#F4f4f4] lg:w-[75%] lg:text-start text-justify">
            We take the hassle out of creator marketing.
          </p>
          <p className="lg:text-lg text-base  md:text-lg text-[#F4f4f4] lg:w-[75%] lg:text-start text-justify">
            With a simple monthly subscription,here’s how we bridge brands and 
            agencies with creators to establish genuine relationships with
            customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeThree;
