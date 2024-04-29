"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "../../components/FormInput";
import Link from "next/link";

function CreatorLast() {
  const color = "#006D53";

  return (
    <section className="flex p-10  items-center justify-center bg-[#006D53]">
      <div className="basis-1/2 hidden xl:block">
        <Image
          src={
            "https://storage.googleapis.com/landing-cultcreative/creator/Cult%20Creative%202%20(1).jpg"
          }
          alt="creator"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 ">
          <h1 className="sm:text-8xl text-8xl -tracking-[.35rem]">
            get{" "}
            <span className="font-serif italic -tracking-[.6rem] text-8xl">
              started.
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold -tracking-[.05rem]">
            We’re excited to work together. <br />
            Tell us who you are and we’ll get back to you with suitable brand
            deals.
          </h1>
          <div className="mx-auto">
            <Link href={"/creators/contactForm"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-serif uppercase flex-none`}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatorLast;
