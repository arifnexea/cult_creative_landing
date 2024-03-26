"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";

const vid = [
  {
    url: "https://storage.googleapis.com/landing_page_cult/Brands/Nonico%20x%20Cult%20Creative.mp4",
  },
  {
    url: "https://storage.googleapis.com/landing_page_cult/Brands/Slae%20Cosmetics%20x%20Cult%20Creative.mp4",
  },
];

const FirstSection = () => {
  const [vidIndex, setVidIndex] = useState(0);

  useEffect(() => {
    const vidScroll = setInterval(() => {
      setVidIndex(vidIndex == vid.length - 1 ? 0 : vidIndex + 1);
    }, 4000);

    return () => {
      clearInterval(vidScroll);
    };
  }, [vidIndex]);

  return (
    <section className="p-8 bg-[#8A5AFE] ">
      <div className="flex lg:flex-row flex-col justify-between gap-3 items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col text-center lg:text-left gap-10 basis-1/2"
        >
          <h1
            className="2xl:text-[11rem] xl:text-[9rem] lg:text-[7rem] text-7xl lg:tracking-5 font-aileron"
            style={{
              lineHeight: 0.8,
            }}
          >
            let <span className="font-times">our</span>
            <br />
            <span className="font-times -tracking-[.5rem] xl:-tracking-[1rem] italic">
              creators
            </span>{" "}
            do
            <br />
            the{" "}
            <span className="font-times -tracking-[.5rem] xl:-tracking-[1rem] italic">
              work
            </span>
            <br />
            for <span className="font-times">you</span>.
          </h1>
          <p className="text-[25.4px] text-[#F4f4f4] w-[75%] lg:text-justify mx-auto lg:ms-1 -tracking-[.1rem]">
            With our network of 13,000 creators we’ve built across Southeast
            Asia, we take the guesswork out of creator marketing.
          </p>
          <p className="text-[25.4px] text-[#F4f4f4] w-[75%] lg:text-justify mx-auto lg:ms-1 -tracking-[.1rem]">
            Get quality User-Generated Content and KOL campaigns for your brand,
            to drive genuine user engagement.
          </p>
        </motion.div>
        <div className="relative my-10 basis-1/2">
          <div className="sm:hidden">
            <motion.video
              key={vidIndex}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={vid[vidIndex].url}
              className="h-[37rem] rounded-lg"
              autoPlay
              loop
              muted
              webkit-playsinline
              playsInline
            >
              <source type="video/mp4" />
            </motion.video>
          </div>
          <div className="hidden sm:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex gap-3 justify-center"
            >
              {vid.map((elem, i) => {
                return (
                  <video
                    key={i}
                    src={elem.url}
                    className="h-[37rem] 2xl:h-[70vh] xl:[h-40vh] rounded-lg"
                    autoPlay
                    loop
                    muted
                    webkit-playsinline
                    playsInline
                  >
                    <source type="video/mp4" />
                  </video>
                );
              })}
            </motion.div>
          </div>
          <div className="flex absolute left-[50%] translate-x-[-50%] bottom-5 sm:hidden md:hidden lg:hidden">
            {vid.map((_, i) => {
              return i === vidIndex ? (
                <Icon key={i} icon="icon-park-outline:dot" width={20} />
              ) : (
                <Icon
                  key={i}
                  icon="octicon:dot-24"
                  width={20}
                  onClick={() => setVidIndex(i)}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-center my-10">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="bg-slate-100 py-2 px-12 rounded-full text-[#8A5AFE] font-aileron uppercase font-bold"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default FirstSection;
