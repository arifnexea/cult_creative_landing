"use client";

import React from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";

function CreatorThird() {
  return (
    <section className="p-8 bg-[#1340FF] text-[#F4F4F4]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col lg:flex-row w-[87%] items-center  content-center">
          <h1 className="xl:text-8xl lg:text-8xl text-7xl basis-1/2 m-2">
            we’re{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className=" font-serif italic font-light -tracking-[.4rem]"
            >
              different{" "}
            </motion.span>
          </h1>
          <p className="basis-1/2 lg:text-2xl text-xl">
            We make sure you get paid in 30 days.No paperwork, no hassle. Just
            focus on being creative.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row py-5">
          <div className="rounded-full  border-2 border-solid lg:p-5 p-3 my-4 mx-3 text-center">
            <h1 className="xl:text-7xl lg:text-6xl  text-3xl font-bold uppercase xl:-tracking-[.45rem] lg:-tracking-[.10rem] ">
              50 completed campaigns
            </h1>
          </div>
          <div className="rounded-full  border-2 border-solid lg:p-5 p-3 my-4  mx-3 text-center">
            <h1 className="xl:text-7xl lg:text-6xl text-3xl font-bold uppercase xl:-tracking-[.45rem] lg:-tracking-[.10rem] ">
              2700 creators matched
            </h1>
          </div>
        </div>
        <div className="py-9 text-center ">
          <h1 className="lg:text-7xl text-3xl basis-1/2">
            
            <span className="lg:-tracking-[.5rem]">RM 230K</span>{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className=" lg:text-8xl text-3xl font-serif italic font-light lg:-tracking-[.4rem]"
            >
              creator {" "} payments 
            </motion.span>{" "}
            processed
          </h1>
        </div>
        <div className="p-3">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="bg-slate-100 py-2 px-12 rounded-full text-[#1340FF] font-serif"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default CreatorThird;
