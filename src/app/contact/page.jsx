"use client";
import React, { Suspense } from "react";
import Header from "@/app/components/Header";
import LastSection from "../sections/brandsection/LastSection";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { Icon } from "@iconify/react";
import FormInput from "../components/FormInput";

function ContactUs() {
  const color = "8A5AFE";
  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.svg"} />
      <Suspense fallback={<p>Loading...</p>}>
        <section className="flex p-10  items-center justify-center bg-[#F4F4F4] text-[#8A5AFE] font-aileron">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div>
              <h1 className="lg:text-8xl xl:text-8xl text-5xl xl:-tracking-[.3rem] lg:-tracking-[.3rem] -tracking-[.1rem]">
                get
                <span className="font-times  font-medium">
                  {" "}
                  in <span className="italic xl:-tracking-[.5rem]"> touch</span>
                </span>
              </h1>
            </div>
            <div className="flex xl:flex-row lg:flex-row flex-col justify-center items-center gap-0">
              <div className="flex flex-col flex-start justify-items-start p-7 xl:w-[60%] lg:w-[60%]">
                <div className="flex flex-col justify-center items-center align-center p-8">
                  <Icon
                    icon="icomoon-free:location"
                    className="text-6xl text-[#8A5AFE] "
                  />
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <h3 className="text-3xl">address</h3>
                  <h3 className="xl:w-[70%] lg:w-[70%] w-[50%] justify-text">
                    Lot 4-401 & 4-402, Level 4, The Starling Mall, Jalan SS
                    21/37, Damansara Utama, 47400 Petaling Jaya, Selangor,
                    Malaysia.
                  </h3>
                </div>
              </div>
              <div className="flex flex-col flex-start justify-items-start p-7 w-[60%]">
                <div className="flex flex-col justify-center items-center align-center p-8">
                  <Icon
                    icon="tabler:mail-filled"
                    className="text-6xl text-[#8A5AFE] "
                  />
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <h3 className="text-3xl">Mail</h3>
                  <h3 className="text-xl">hello@cultcreative.asia</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[80%]">
              <div className="flex xl:flex-row lg:flex-row flex-col gap-5">
                <div className="w-full">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium leading-6"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-1 rounded-md shadow-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium leading-6"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full p-1 rounded-md shadow-sm"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="Subject"
                  className="block text-sm font-medium leading-6"
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-1 rounded-md shadow-sm"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="Message"
                  className="block text-sm font-medium leading-6"
                >
                  Message
                </label>
                <input
                  type="textarea"
                  className="w-full p-10 rounded-md shadow-sm"
                />
              </div>
              <div className="flex justify-center items-center w-full">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="bg-[#8A5AFE] py-2 px-12 rounded-full text-[#F4F4F4] font-times"
                >
                  Submit
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
        <LastSection />
      </Suspense>
    </main>
  );
}

export default ContactUs;
