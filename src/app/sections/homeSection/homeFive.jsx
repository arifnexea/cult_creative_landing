import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const vids = [
  {
    id: uuid(),
    name: "Hotel Indigo",
    url: "https://storage.googleapis.com/landing-cultcreative/main/Hotel%20Indigo%20CNY%20x%20Cult%20Creative%20.mp4",
  },
  {
    id: uuid(),
    name: "Trove",
    url: "https://storage.googleapis.com/landing-cultcreative/main/Trove%20x%20Cult%20Creative.mp4",
  },
  {
    id: uuid(),
    name: "Mimone Spa",
    url: "https://storage.googleapis.com/landing-cultcreative/main/Mimone%20Spa%20x%20Cult%20Creative.mov",
  },
  {
    id: uuid(),
    name: "Supermama Lab",
    url: "https://storage.googleapis.com/landing-cultcreative/main/Supermama%20Lab%20x%20Cult%20Creative.mp4",
  },
];

function HomeFive() {
  return (
    <section className="py-8 bg-[#F4F4F4] text-[#8A5AFE]">
      <h1 className="text-center font-aileron md:text-[7rem] text-6xl md:-tracking-[.6rem] -tracking-[.3rem]">
        we <span className="font-times italic">match you</span> to{" "}
        <span className="font-times italic ">brands</span>
      </h1>
      <div className="flex flex-wrap lg:flex-row justify-evenly gap-10 mt-16 px-9">
        {vids.map((elem) => (
          <div className="flex flex-col text-center" key={elem?.id}>
            <motion.video
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={elem?.url}
              className="max-w-[19rem] rounded-md"
              autoPlay
              loop
              muted
              webkit-playsInline
              playsInline
              preload="metadata"
            >
              <source type="video/mp4" />
            </motion.video>
            <h2 className="font-aileron text-lg pt-3 font-semibold text-start">
              {elem?.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeFive;
