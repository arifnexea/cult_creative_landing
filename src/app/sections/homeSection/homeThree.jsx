"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";
import Image from "next/image";
// bg-gradient-to-b from-[#1340FF] from-90% to-[#F4F4F4]
function HomeThree() {
  return (
    <section className="static lg:px-2 lg:py-12 md:p-6 bg-[#1340FF]">
      <div className="flex flex-col p-2  justify-center items-center  gap-3">
        <Image
          src="/images/Main/videoBanner.png"
          alt="Nonico x Cult Creative"
          width={500}
          height={500}
          className="lg:size-9/12 size-full lg:mr-9"
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
          className="absolute lg:right-0  w-[90%] xl:w-[33%] lg:w-[40%] gap-10 lg:text-start "
        >
          <h1 className="lg:text-9xl lg:tracking-5 md:text-7xl  text-4xl  font-aileron font-light">
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
          
             <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className=""
          >
          <p className="lg:w-[95%]  lg:ml-4 text-md xl:text-3xl lg:text-xl md:text-xl  my-3 font-aileron font-light">
           We take the hassle out of creator marketing.
          </p>
          <p  className=" lg:w-[85%]  lg:ml-4  xl:text-3xl lg:text-xl md:text-xl text-sm text-justify font-aileron font-light">
            With a simple monthly subscription,here’s how we bridge brands and 
            agencies with creators to establish genuine relationships with
            customers.
          </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeThree;
