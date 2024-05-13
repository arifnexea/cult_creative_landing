"use client";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";
import { motion } from "framer-motion";

function CreatorFifth() {
  const [cur, setCur] = useState(0);
  return (
    <section className="py-9 lg:px-20 px-10 bg-[#006D53] font-aileron text-[#F4F4F4]">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 md:col-span-1">
          <h1
            className="xl:text-9xl lg:text-8xl md:text-8xl text-7xl -tracking-[.4rem]"
            style={{
              lineHeight: 0.7,
            }}
          >
            trusted
            <br />
            <span className="font-times">by {"  "}</span>
            <span className="font-times italic -tracking-[.4rem] lg:-tracking-[.8rem]">
              {" "}
              creators
            </span>
          </h1>
        </div>
        <div className="col-span-2 md:col-span-1 ">
          <div className="flex overflow-hidden">
            <motion.div
              className="border-2 border-slate-50 min-w-full transition-transform ease-in-out duration-300"
              style={{
                transform: `translateX(-${cur * 100}%)`,
              }}
            >
              <div className="flex flex-col w-[75%] py-5 mx-10 h-[80vh] gap-20">
                <Icon icon="fa:quote-right" width={100} />
                <p className=" xl:text-3xl lg:text-2xl text-lg  font-thin uppercase tracking-[.2rem]">
                  <TypeAnimation
                    sequence={[
                      "Cult Creative has been exceptional in bridging the connection between the client and myself, articulating the client’s  brand identity with precision.",
                    ]}
                    speed={50}
                  />
                </p>
                <p className="ms-auto mt-auto text-lg sm:text-2xl italic tracking-[.2rem]">
                  —Anniecia Thomas
                </p>
              </div>
            </motion.div>
            <motion.div
              className="border-2 border-slate-50 min-w-full transition-transform ease-in-out duration-300"
              style={{
                transform: `translateX(-${cur * 100}%)`,
              }}
            >
              <div className="flex flex-col w-[75%] py-5 mx-10 h-[80vh] gap-20">
                <Icon icon="fa:quote-right" width={100} />
                <p className="text-lg lg:text-3xl font-thin uppercase tracking-[.2rem]">
                  <TypeAnimation
                    sequence={[
                      "i appreciate cult creative for guiding me when they didn’t have to.",
                    ]}
                    speed={50}
                  />
                </p>
                <p className="ms-auto mt-auto text-lg sm:text-2xl italic tracking-[.2rem]">
                  —Wong Yuet Ting
                </p>
              </div>
            </motion.div>
            <motion.div
              className="border-2 border-slate-50 min-w-full transition-transform ease-in-out duration-300"
              style={{
                transform: `translateX(-${cur * 100}%)`,
              }}
            >
              <div className="flex flex-col w-[75%] py-5 mx-10 h-[80vh] gap-20">
                <Icon icon="fa:quote-right" width={100} />
                <p className="text-lg lg:text-3xl font-thin uppercase tracking-[.2rem]">
                  <TypeAnimation
                    sequence={[
                      "Cult creative deserves praise for their attention to detail. they carefully considered my concerns throughout the campaign.",
                    ]}
                    speed={50}
                  />
                </p>
                <p className="ms-auto mt-auto text-lg sm:text-2xl italic tracking-[.2rem]">
                  —Arina Farhah
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center my-7">
        <Icon
          icon="icon-park-outline:dot"
          width={20}
          cursor={"pointer"}
          className={cur === 0 && "scale-150"}
          onClick={() => setCur(0)}
        />
        <Icon
          icon="icon-park-outline:dot"
          width={20}
          cursor={"pointer"}
          className={cur === 1 && "scale-150"}
          onClick={() => setCur(1)}
        />
        <Icon
          icon="icon-park-outline:dot"
          width={20}
          cursor={"pointer"}
          className={cur === 2 && "scale-150"}
          onClick={() => setCur(2)}
        />
      </div>
    </section>
  );
}

export default CreatorFifth;
