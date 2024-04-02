"use client";
import React, { Suspense } from "react";
import Header from "@/app/components/Header";
import LastSection from "@/app/sections/brandsection/LastSection";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { Icon } from "@iconify/react";
import FormInput from "@/app/components/FormInput";
import Link from "next/link";
import Image from "next/image";
function CreatorForm() {
  const color = "#006D53";
  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.svg"} />
      <Suspense fallback={<p>Loading...</p>}>
        <section className="flex p-10  items-center justify-center bg-[#006D53]">
          <div className="basis-1/2 hidden xl:block">
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
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 ">
              <h1 className="sm:text-8xl text-8xl -tracking-[.35rem]">
                get{" "}
                <span className="font-times italic -tracking-[.6rem] text-8xl">
                  started.
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-xl font-bold -tracking-[.05rem]">
                We’re excited to work together. <br />
                Tell us who you are and we’ll get back to you with suitable
                brand deals.
              </h1>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-[#F4F4F4]">
                <FormInput
                  label={"Full Name"}
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
                <div className="sm:col-span-3">
                  <label
                    htmlFor="Pronoun"
                    className="block text-sm font-medium leading-6"
                  >
                    Pronoun
                  </label>
                  <div className="mt-2">
                    <select
                      className={`block w-full rounded-full border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[${color}]`}
                    >
                      <option value="he">He/Him </option>
                      <option value="she">She/Her </option>
                      <option value="they">They/Them</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
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
                <div className="sm:col-span-3">
                  <label
                    htmlFor="languages"
                    className="block text-sm font-medium leading-6"
                  >
                    Languages
                  </label>
                  <div className="mt-2">
                    <select
                      className={`block w-full rounded-full border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[${color}]`}
                    >
                      <option value="english">English </option>
                      <option value="malay">Malay </option>
                      <option value="mandarin">Mandarin </option>
                      <option value="tamil">Tamil </option>
                      <option value="hindi">Hindi</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
                <FormInput
                  label={"Interests"}
                  name={"interests"}
                  type={"text"}
                  color={color}
                />
              </div>
              <div className="mx-auto">
                <Link href={"/creators/contactForm"}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-serif uppercase flex-none`}
                  >
                    Submit
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <LastSection color={"#006D53"} />
      </Suspense>
    </main>
  );
}

export default CreatorForm;
