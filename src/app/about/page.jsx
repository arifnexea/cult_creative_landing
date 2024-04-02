"use client";
import React, { Suspense } from "react";
import Header from "@/app/components/Header";
import LastSection from "../sections/brandsection/LastSection";
import { AnimatePresence, motion, wrap } from "framer-motion";
import Image from "next/image";

function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.svg"} />
      <Suspense fallback={<p>Loading...</p>}>
        <section className="bg-[#FF3600] pt-6  pb-14 px-3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:justify-center lg:items-center">
              <motion.video
                src="https://storage.googleapis.com/landing_page_cult/about/Cult%20Creative%20About%20Page.mp4"
                nitial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[100%] xl:h-[85vh] lg:h-[75vh]"
                // autoPlay
                loop
                muted
                webkit-playsinline
                playsInline
              >
                <source type="video/mp4" />
              </motion.video>
            </div>
            <div className="flex flex-col  justify-center items-center gap-y-8">
              <h1 className="xl:text-[11rem]  lg:text-[8rem]  md:text-7xl  text-center text-4xl xl:-mt-[74px] lg:-mt-[60px]">
                <span className="xl:text-[9rem] lg:text-[7rem]"> our </span>{" "}
                <span className="font-times xl:-tracking-[0.7rem] lg:-tracking-[0.5rem] -tracking-[0.1rem] font-extralight">
                  operating
                </span>{" "}
                <span className="font-times xl:-tracking-[0.7rem] lg:-tracking-[0.5rem] -tracking-[0.1rem] font-extralight italic">
                  beliefs
                </span>
              </h1>
              <div className="flex flex-col w-[90%] xl:text-3xl text-lg font-aileron font-thin gap-y-8  text-center text-justify ">
                <p className="font-thin">
                  Every day we come together for a vision that we believe in
                  creators and the community, and that Cult Creative can assist
                  creators to achieve passion, purpose and paycheque.
                </p>
                <p>
                  We stay grounded in our values that creatives are essential to
                  the workforce, everyone has creativity in them, and we're able
                  to smash long-standing stereotypes about creatives.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-8 bg-[#F4F4F4] text-[#FF3600]">
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
            <div className="flex flex-col lg:flex-row w-[87%] items-center content-center">
              <h1 className="xl:text-8xl lg:text-8xl text-7xl basis-1/2 m-2 -tracking-[.6rem] text-center">
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
                  className="font-times italic font-light -tracking-[.4rem]"
                >
                  different{" "}
                </motion.span>
              </h1>
              <p className="basis-1/2 lg:text-2xl text-xl text-justify ">
                Rapid access to quality content by our expansive community of
                over 13,000 talented creators ready to bring your vision to
                life.
              </p>
            </div>
            <div className="flex flex-row py-6 gap-6">
              <div className="xl:flex lg:flex flex-col justify-items-end items-end   basis-1/2 hidden">
                <Image
                  src={
                    "https://storage.googleapis.com/landing_page_cult/creators/Cult%20Creative%202.jpg"
                  }
                  alt="creator"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col lg:basis-1/2 xl:basis-1/2  basis-2/2 xl:text-4xl lg:text-3xl md:text-3xl  text-2xl">
                <div className="lg:p-5 p-3 my-4 mx-3 text-center xl:w-[70%] w-full  ">
                  {" "}
                  <h1 className="xl:text-6xl lg:text-5xl md:text-4xl  text-3xl font-bold uppercase  lg:-tracking-[.10rem] xl:text-start lg:text-start  text-center xl:-tracking-[0.3rem]">
                    2020:<span className="italic">THE year we starteD</span>
                  </h1>
                </div>
                <div className="rounded-full  border-2 border-solid border-[#FF3600] lg:p-5 p-3 my-4 mx-3 text-center xl:w-[70%] w-full">
                  {" "}
                  <h1 className=" font-bold uppercase  lg:-tracking-[.1rem]   xl:-tracking-[.1rem]">
                    13,000+ individual creators
                  </h1>
                </div>
                <div className="rounded-full  border-2 border-solid border-[#FF3600] lg:p-5 p-3 my-4 mx-3 text-center xl:w-[70%] w-full">
                  {" "}
                  <h1 className=" font-bold uppercase  lg:-tracking-[.1rem] text-center xl:-tracking-[.1rem]">
                    900+ companies on boarded
                  </h1>
                </div>
                <div className="rounded-full  border-2 border-solid border-[#FF3600] lg:p-5 p-3 my-4 mx-3 text-center  xl:w-[70%] w-full">
                  {" "}
                  <h1 className=" font-bold uppercase  lg:-tracking-[.1rem]  xl:-tracking-[.1rem]">
                    1,200 jobs matched
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <LastSection color={"#8A5AFE"} />
      </Suspense>
    </main>
  );
}

export default AboutUs;
