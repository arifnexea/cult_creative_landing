/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import LoadingIcon from "@/app/components/Icons/loading-icon";
import dynamic from "next/dynamic";
import useMediaQuery from "@/app/hooks/useMediaQuery";
// import { useMediaQuery } from "@uidotdev/usehooks";

const VideoSmall = dynamic(() =>
  import("@/app/sections/homeSection/VideoSmall")
);

export function getVideos() {
  const vids = [
    {
      id: uuidv4(),
      name: "https://storage.googleapis.com/landing-cultcreative/main/Raea%20x%20Cult%20Creative%20(1).mov",
    },
    {
      id: uuidv4(),
      name: "https://storage.googleapis.com/landing-cultcreative/main/Bata%20x%20Cult%20Creative.mp4",
    },
  ];

  return vids;
}

const HomeFirst = () => {
  const [vidIndex, setVidIndex] = useState(0);
  const { isMdAndAbove } = useMediaQuery();

  const vids = getVideos();

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
          // className="flex flex-col lg:w-[50%] text-center lg:text-left gap-10 basis-1/2 bg-slate-600"
          className="basis-1/2 flex flex-col space-y-10 text-center lg:text-start"
        >
          <h1
            className="2xl:text-[11rem] xl:text-[9rem] lg:text-[7rem] text-8xl lg:tracking-5 font-aileron"
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
        <div className="sticky top-28 basis-1/2">
          {/* <div className="flex gap-5 sm:gap-3 overflow-hidden px-4">
            {vids &&
              vids?.map((elem, i) => {
                return (
                  <video
                    key={i}
                    className="w-[100%] sm:w-[50%] rounded-lg object-cover"
                    autoPlay
                    loop
                    muted
                    webkit-playsInline
                    playsInline
                    preload="metadata"
                    // style={{
                    //   transform: "translateX(-106%)",
                    // }}
                  >
                    <source src={elem?.name} type="video/mp4" />
                  </video>
                );
              })}
          </div> */}

          {isMdAndAbove ? (
            <div className="flex gap-3 justify-center">
              {vids &&
                vids?.map((elem, i) => {
                  return (
                    <video
                      key={i}
                      className="w-[40%] lg:w-[50%] rounded-lg object-cover"
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
          ) : (
            <>
              <div className="flex mx-auto justify-center">
                <Icon
                  icon="pepicons-pencil:line-x"
                  style={{ color: vidIndex === 0 ? "#8ea0f1" : "black" }}
                  width={70}
                  onClick={() => setVidIndex(0)}
                  cursor={"pointer"}
                />
                <Icon
                  icon="pepicons-pencil:line-x"
                  style={{ color: vidIndex === 1 ? "#8ea0f1" : "black" }}
                  width={70}
                  onClick={() => setVidIndex(1)}
                  cursor={"pointer"}
                />
              </div>
              <VideoSmall src={vids[vidIndex]?.name} />
            </>
          )}

          {/* <div className="hidden lg:block">
            <motion.video
              key={vidIndex}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={vids[vidIndex]?.name}
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
          </div> */}
          {/* {isSmallDevice && (
            <div className="flex absolute left-[50%] translate-x-[-50%] bottom-5">
              {vids?.map((_, i) => {
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
          )} */}
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
