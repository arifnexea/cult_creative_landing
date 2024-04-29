"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useWindowSize } from "@uidotdev/usehooks";

const vid = [
  {
    id: uuidv4(),
    name: "https://storage.googleapis.com/landing-cultcreative/creator/cut%20Focus%20Foods%20x%20Cult%20Creative.mp4",
  },
  {
    id: uuidv4(),
    name: "https://storage.googleapis.com/landing-cultcreative/creator/cut%20Hotel%20Indigo%20x%20Cult%20Creative.mp4",
  },
];

const CreatorFirst = () => {
  const [vidIndex, setVidIndex] = useState(1);

  // useEffect(() => {
  //   const vidScroll = setInterval(() => {
  //     setVidIndex(vidIndex == vid.length - 1 ? 0 : vidIndex + 1);
  //   }, 4000);

  //   return () => {
  //     clearInterval(vidScroll);
  //   };
  // }, [vidIndex]);

  return (
    <section className="p-8 bg-[#006D53]">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-3 items-center lg:items-start">
        <div className="sticky top-32 my-7 basis-1/2 ">
          <div className="sm:hidden">
            <motion.video
              key={vidIndex}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={vid[vidIndex].name}
              className="h-[37rem] rounded-lg"
              autoPlay
              loop
              muted
              webkit-playsInline
              playsInline
              preload="metadata"
            >
              <source type="video/mp4" />
            </motion.video>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-3 justify-center">
              {vid.map((elem) => {
                return (
                  <video
                    key={elem.id}
                    className="w-[50%] 2xl:h-[70vh] xl:[h-40vh] rounded-md object-cover"
                    autoPlay
                    loop
                    muted
                    webkit-playsInline
                    playsInline
                    preload="metadata"
                  >
                    <source src={elem.name} type="video/mp4" />
                  </video>
                );
              })}
            </div>
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

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col px-8 lg:w-[50%] text-center lg:text-left basis-1/2 gap-7"
        >
          <h1
            className="2xl:text-[11rem] xl:text-[9rem] lg:text-[7rem] text-7xl lg:tracking-5 font-aileron"
            style={{
              lineHeight: 0.9,
            }}
          >
            get <span className="font-times">brand</span>
            <span className="font-times italic -tracking-[.5rem] xl:-tracking-[.8rem]">
              <br />
              deals,{" "}
            </span>
            get
            <span className="font-times italic -tracking-[.5rem] xl:-tracking-[.8rem]">
              <br /> paid.
            </span>
          </h1>
          <p className="lg:text-xl text-xl text-[#F4f4f4] lg:w-[75%] lg:text-justify">
            Leverage your skills and make money off your current social media
            account.
          </p>
          <p className="lg:text-xl text-xl text-[#F4f4f4] lg:w-[75%] lg:text-justify">
            Simply sign up and opt in to become a creator and get synced to
            amazing brand deals.
          </p>
          <div className="text-center">
            <Link href={"/creators/contactForm"}>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="bg-slate-100 py-2 px-12 rounded-full text-[#006D53] font-times"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorFirst;
