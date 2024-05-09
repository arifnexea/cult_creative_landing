/* eslint-disable react-hooks/exhaustive-deps */
// "use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import LoadingIcon from "@/app/components/Icons/loading-icon";
import toast from "react-hot-toast";
import VideoComponent from "@/app/components/VideoComponent";

const vid = [
  {
    id: uuidv4(),
    // name: "https://storage.googleapis.com/landing-cultcreative/main/Trove%202%20x%20Cult%20Creative.mp4",
    name: "https://storage.googleapis.com/landing-cultcreative/main/Bata%20x%20Cult%20Creative.mp4",
  },
  {
    id: uuidv4(),
    name: "https://storage.googleapis.com/landing-cultcreative/main/Bata%20x%20Cult%20Creative.mp4",
  },
];

const HomeFirst = () => {
  const [vidIndex, setVidIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <section className="p-8 bg-[#1340FF]">
      <div className="flex lg:flex-row flex-col justify-stretch gap-10 items-center lg:items-start text-[#F4F4F4]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          // className="flex flex-col lg:w-[50%] text-center text-[#F4F4F4] lg:text-left gap-10 basis-1/2 bg-slate-600"
          className="basis-1/2 flex flex-col space-y-10 text-center lg:text-start text-[#F4F4F4]"
        >
          <h1
            className="2xl:text-[11rem] xl:text-[9rem] lg:text-[7rem] text-7xl lg:tracking-5 font-aileron"
            style={{
              lineHeight: "70%",
            }}
          >
            where{" "}
            <span className="-tracking-[.5rem] xl:-tracking-[13px] font-times italic">
              <br /> brands & <br />
            </span>
            <span className="-tracking-[.5rem] xl:-tracking-[13px] font-times">
              creators
            </span>
            <br />
            co-create.
          </h1>
          <p
            // className="lg:text-[25.4px] text-xl lg:w-[75%] bg-slate-500 w-auto"
            className="w-auto text-[25.5px] leading-tight tracking-[-2px] lg:w-[75%]"
          >
            Cult Creative is the all-in-one portal for creators and brands to
            seamlessly work, collaborate and elevate.
          </p>
          <p
            // className="lg:text-[25.4px] text-xl lg:w-[75%] lg:text-justify"
            className="w-auto text-[25.5px] leading-tight tracking-[-2px] lg:w-[75%]"
          >
            With our 13,000 talent pool across Southeast Asia, we help transform
            ideas into captivating, quality content for brands.
          </p>
        </motion.div>
        <div className="sticky top-32 my-10 basis-1/2">
          <div className="sm:hidden">
            <motion.video
              key={vidIndex}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={vid[vidIndex]?.name}
              className="h-[37rem] rounded-lg"
              autoPlay
              loop
              muted
              webkit-playsinline="true"
              playsInline
              preload="metadata"
            >
              <source type="video/mp4" />
            </motion.video>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-3 justify-center">
              {loading && <LoadingIcon w={"5em"} h={"5em"} c={"white"} />}
              {vid &&
                vid.map((elem, i) => {
                  return (
                    // <VideoComponent key={i} src={elem?.name} />
                    <video
                      key={i}
                      className="w-[50%] 2xl:h-[70vh] xl:[h-40vh] rounded-md object-cover"
                      autoPlay
                      loop
                      muted
                      webkit-playsInline
                      playsInline
                      preload="metadata"
                    >
                      <source src={elem?.name} type="video/mp4" />
                    </video>
                  );
                })}
            </div>
          </div>
          <div className="flex absolute left-[50%] translate-x-[-50%] bottom-5 sm:hidden">
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
        <Link href={"/brands"}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="bg-slate-100 py-2 px-12 rounded-full text-[#1340FF] font-aileron uppercase font-bold"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default HomeFirst;
