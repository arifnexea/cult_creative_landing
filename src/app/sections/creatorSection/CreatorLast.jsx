'use client';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "../../components/FormInput";
function CreatorLast() {
const color = "#006D53"

  return (
    <section className="flex p-10  items-center justify-center bg-[#006D53]">
    <div className="basis-1/2 hidden xl:block">
      <Image
        src={"https://storage.googleapis.com/landing_page_cult/creators/Cult%20Creative%202.jpg"}
        alt="creator"
        width={500}
        height={500}
        className="rounded-lg"
      />
    </div>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 ">
        <h1 className="sm:text-8xl text-8xl -tracking-[.35rem]">
          get  {" "}
          <span className="font-serif italic -tracking-[.6rem] text-8xl">started.</span>
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-bold -tracking-[.05rem]">
        We’re excited to work together. <br />Tell us who you are and we’ll get back to you with suitable brand deals.
        </h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-[#F4F4F4]">
          <FormInput
            label={"Name"}
            name={"first-name"}
            type={"text"}
            color={color}
          />
          <FormInput
            label={"Email Address"}
            name={"email-address"}
            type={"email"}
            color={color}
          />
          <FormInput
            label={"Phone Number"}
            name={"phone-number"}
            type={"number"}
            color={color}
          />
          <FormInput
            label={"Nationality"}
            name={"nationality"}
            type={"text"}
            color={color}
          />
          <FormInput
            label={"Date of Birth"}
            name={"date-of-birth"}
            type={"date"}
            color={color}
          />
          <FormInput
            label={"Current Location"}
            name={"location"}
            type={"text"}
            color={color}
          />
          <FormInput
            label={"Instagram Username"}
            name={"instagram"}
            type={"text"}
            color={color}
          />
          <FormInput
            label={"Tik Tok Username"}
            name={"tiktok"}
            type={"text"}
            color={color}
          />
          <FormInput
            label={"Languages"}
            name={"languages"}
            type={"text"}
            color={color}
          />
           <FormInput
            label={"Interests"}
            name={"interests"}
            type={"text"}
            color={color}
          />
        </div>
        <div className="mx-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-serif uppercase flex-none`}
          >
            Submit
          </motion.button>
        </div>
      </div>
    </div>

  </section>
  )
}

export default CreatorLast