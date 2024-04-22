import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "./FormInput";

const Form = ({ image, color }) => {
  return (
    <section className="flex items-center justify-center">
      <div className="basis-1/2 hidden xl:block">
        <Image
          src={
            "https://storage.googleapis.com/landing_page_cult/main/Cult%20Creative%201.jpg"
          }
          alt="test"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5 xl:basis-1/2">
        <h1
          className="md:text-[7rem] text-6xl font-aileron md:-tracking-[.5rem] text-pretty max-w-[30rem]"
          style={{
            lineHeight: 0.75,
          }}
        >
          power up <span className="font-times">your</span>{" "}
          <span className="font-times italic -tracking-[.5rem]">marketing</span>
        </h1>
        <div>
          <a
            href="https://calendly.com/danishmokhtar/30min?month=2024-03"
            target="__blank"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-aileron uppercase flex-none`}
            >
              Book a call
            </motion.button>
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold -tracking-[.05rem]">
            Want to get in touch? Tell us what you need.
          </h1>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-[#F4F4F4]">
            <FormInput
              label={"Name"}
              name={"first-name"}
              type={"text"}
              color={color}
            />
            <FormInput
              label={"Work Email"}
              name={"first-name"}
              type={"email"}
              color={color}
            />
            <FormInput
              label={"Phone Number"}
              name={"first-name"}
              type={"number"}
              color={color}
            />
            <FormInput
              label={"Company Name"}
              name={"first-name"}
              type={"test"}
              color={color}
            />
            <FormInput
              label={"Company Size"}
              name={"first-name"}
              type={"test"}
              color={color}
            />
            <FormInput
              label={"Industry"}
              name={"first-name"}
              type={"test"}
              color={color}
            />
            <FormInput
              label={"Monthly Influencer Budget"}
              name={"first-name"}
              type={"test"}
              color={color}
            />
            <FormInput
              label={"Company Size"}
              name={"first-name"}
              type={"test"}
              color={color}
            />
          </div>
          <div className="mx-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-aileron uppercase flex-none`}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </div>
    </section>
    // <section className="flex gap-32 items-center">
    //   <div className="hidden xl:block">
    //     <Image
    //       src={
    //         "https://storage.googleapis.com/landing_page_cult/main/Cult%20Creative%201.jpg"
    //       }
    //       alt="test"
    //       width={600}
    //       height={600}
    //       className="rounded-lg"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-5">
    //     <h1 className="sm:text-8xl text-6xl -tracking-[.35rem]">
    //       power up <br />
    //       <span className="font-serif">
    //         your <br />
    //         marketing
    //       </span>
    //     </h1>
    //     <div>
    //       <motion.button
    //         whileHover={{ scale: 1.1 }}
    //         whileTap={{ scale: 0.8 }}
    //         className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-serif uppercase flex-none`}
    //       >
    //         Book a call
    //       </motion.button>
    //     </div>
    //     <div className="flex flex-col gap-6">
    //       <h1 className="text-xl font-bold -tracking-[.05rem]">
    //         Want to get in touch? Tell us what you need.
    //       </h1>
    //       <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-[#F4F4F4]">
    //         <FormInput
    //           label={"Name"}
    //           name={"first-name"}
    //           type={"text"}
    //           color={color}
    //         />
    //         <FormInput
    //           label={"Work Email"}
    //           name={"first-name"}
    //           type={"email"}
    //           color={color}
    //         />
    //         <FormInput
    //           label={"Phone Number"}
    //           name={"first-name"}
    //           type={"number"}
    //           color={color}
    //         />
    //         <FormInput
    //           label={"Company Name"}
    //           name={"first-name"}
    //           type={"test"}
    //           color={color}
    //         />
    //         <FormInput
    //           label={"Company Size"}
    //           name={"first-name"}
    //           type={"test"}
    //           color={color}
    //         />
    //         <FormInput
    //           label={"Industry"}
    //           name={"first-name"}
    //           type={"test"}
    //           color={color}
    //         />
    //         <FormInput
    //           label={"Monthly Influencer Budget"}
    //           name={"first-name"}
    //           type={"test"}
    //           color={color}
    //         />
    //         <FormInput
    //           label={"Company Size"}
    //           name={"first-name"}
    //           type={"test"}
    //           color={color}
    //         />
    //       </div>
    //       <div className="mx-auto">
    //         <motion.button
    //           whileHover={{ scale: 1.1 }}
    //           whileTap={{ scale: 0.8 }}
    //           className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-serif uppercase flex-none`}
    //         >
    //           Submit
    //         </motion.button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Form;
