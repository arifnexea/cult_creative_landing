import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "./FormInput";

const Form = ({ image }) => {
  return (
    <section className="flex items-center justify-center">
      <div className="basis-1/2 hidden xl:block">
        <Image
          src={"/images/brands/form.jpg"}
          alt="test"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 ">
          <h1 className="sm:text-8xl text-6xl -tracking-[.35rem]">
            power up <br />
            <span className="font-serif">your marketing</span>
          </h1>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="bg-slate-100 py-2 px-12 rounded-full text-[#006D53] font-serif uppercase flex-none"
            >
              Book a call
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold -tracking-[.05rem]">
            Want to get in touch? Tell us what you need.
          </h1>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-[#F4F4F4]">
            <FormInput label={"Name"} name={"first-name"} type={"text"} />
            <FormInput
              label={"Work Email"}
              name={"first-name"}
              type={"email"}
            />
            <FormInput
              label={"Phone Number"}
              name={"first-name"}
              type={"number"}
            />
            <FormInput
              label={"Company Name"}
              name={"first-name"}
              type={"test"}
            />
            <FormInput
              label={"Company Size"}
              name={"first-name"}
              type={"test"}
            />
            <FormInput label={"Industry"} name={"first-name"} type={"test"} />
            <FormInput
              label={"Monthly Influencer Budget"}
              name={"first-name"}
              type={"test"}
            />
            <FormInput
              label={"Company Size"}
              name={"first-name"}
              type={"test"}
            />
          </div>
          <div className="mx-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="bg-slate-100 py-2 px-12 rounded-full text-[#006D53] font-serif uppercase flex-none"
            >
              Submit
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
