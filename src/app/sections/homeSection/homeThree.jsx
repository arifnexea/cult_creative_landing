"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function HomeThree() {
  const [index, setIndex] = useState(false);
  const [thumbnail, setThumbnail] = useState(true);

  return (
    <section className="lg:px-2 py-12 bg-[#1340FF]">
      <div className="flex flex-col md:flex-row p-2 items-center gap-10">
        {thumbnail ? (
          <Image
            src="/thumbnail.png"
            alt="Thumbnail Image"
            width={1000}
            height={562.5}
            className="rounded-md cursor-pointer"
            onClick={() => setThumbnail(false)}
          />
        ) : (
          <iframe
            name="iframe_name"
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
            } basis-1/2`}
            onMouseEnter={() => setIndex(true)}
            onMouseLeave={() => setIndex(false)}
          />
        )}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          // className="lg:absolute lg:right-0 w-[90%] xl:w-[33%] lg:w-[40%] gap-10 lg:text-start text-[#F4F4F4]"
          className="basis-1/2 p-2"
        >
          <h1
            className="lg:text-[10rem] lg:tracking-5 md:text-7xl text-6xl font-aileron font-light"
            style={{
              lineHeight: "70%",
            }}
          >
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
            className="mt-7"
          >
            <p className="lg:w-[95%] lg:ml-4 text-sm xl:text-2xl md:text-md my-3 font-aileron font-light text-balance">
              We take the hassle out of creator marketing.
            </p>
            <p className=" lg:w-[85%] lg:ml-4 xl:text-2xl md:text-md text-sm font-aileron font-light text-balance">
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
