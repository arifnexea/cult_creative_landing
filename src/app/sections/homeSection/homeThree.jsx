"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function HomeThree() {
  const [index, setIndex] = useState(false);

  return (
    <section className="lg:px-2 py-12 bg-[#1340FF]">
      <div className="flex flex-col p-2 justify-center items-center gap-3">
        <iframe
          src="https://www.youtube.com/embed/xTvO7RmOyBM?si=xKjLNN2DNwOTewu3"
          frameborder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          allowTransparency
          loading="lazy"
          className={`rounded-xl md:w-[500px] md:h-[281.25px] lg:w-[1000px] lg:h-[562.5px] ${
            index && "z-10 transition duration-1000 ease-in-out"
          }`}
          onMouseEnter={() => setIndex(true)}
          onMouseLeave={() => setIndex(false)}
        />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="absolute lg:right-0 w-[90%] xl:w-[33%] lg:w-[40%] gap-10 lg:text-start "
        >
          <h1 className="lg:text-9xl lg:tracking-5 md:text-7xl text-4xl font-aileron font-light">
            how it{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="font-times italic"
            >
              <br /> works
            </motion.span>
            <br />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <p className="lg:w-[95%] lg:ml-4 text-md xl:text-3xl lg:text-xl md:text-xl my-3 font-aileron font-light">
              We take the hassle out of creator marketing.
            </p>
            <p className=" lg:w-[85%] lg:ml-4 xl:text-3xl lg:text-xl md:text-xl text-sm text-justify font-aileron font-light">
              With a simple monthly subscription,here’s how we bridge brands and
              agencies with creators to establish genuine relationships with
              customers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeThree;
