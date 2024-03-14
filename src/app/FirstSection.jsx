"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const NextSection = () => {
  return (
    <section className="py-5 bg-[#8A5AFE]">
      <div className="flex lg:flex-row flex-col justify-between p-10 gap-5 items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col lg:w-[50%] text-center lg:text-left gap-10 "
        >
          <h1 className="lg:text-9xl text-7xl lg:tracking-5 font-aileron">
            let <span className="font-serif">our</span>{" "}
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
              creators{" "}
            </motion.span>
            do <span className="font-serif italic">the work</span>
            <br />
            for <span className="font-serif italic">you.</span>
          </h1>
          <p className="text-lg text-[#F4f4f4] lg:w-[75%] lg:text-justify">
            With our network of 13,000 creators we’ve built across Southeast
            Asia, we take the guesswork out of creator marketing.
          </p>
          <p className="text-lg text-[#F4f4f4] lg:w-[75%] lg:text-justify">
            Get quality User-Generated Content and KOL campaigns for your brand,
            to drive genuine user engagement.
          </p>
        </motion.div>
        <div className="flex gap-4 overflow-scroll snap-x lg:overflow-visible">
          <motion.video
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            // controls
            src="https://res.cloudinary.com/dirld0zbv/video/upload/v1710312954/Trove_2_x_Cult_Creative_gib6vm.mov"
            className="h-[37rem] rounded-lg snap-center"
            autoPlay
            loop
          >
            <source type="video/mp4" />
          </motion.video>
          <motion.video
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="h-[37rem] rounded-lg snap-center"
            src="https://res.cloudinary.com/dirld0zbv/video/upload/v1710399550/Bata_x_Cult_Creative_iqeaa9.mov"
            // controls
            autoPlay
            loop
          >
            <source type="video/mp4" />
          </motion.video>
        </div>
      </div>
      <div className="text-center mt-5">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="bg-slate-100 py-2 px-12 rounded-full text-[#8A5AFE] font-serif"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default NextSection;
