import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const vids = [
  {
    id: 1,
    name: "Hotel Indigo",
    url: "https://storage.googleapis.com/landing_page_cult/main/Hotel%20Indigo%20CNY%20x%20Cult%20Creative%20.mp4",
  },
  {
    id: 2,
    name: "Trove",
    url: "https://storage.googleapis.com/landing_page_cult/main/Trove%20x%20Cult%20Creative.mov",
  },
  {
    id: 3,
    name: "Mimone Spa",
    url: "https://storage.googleapis.com/landing_page_cult/main/Mimone%20Spa%20x%20Cult%20Creative.mov",
  },
  {
    id: 4,
    name: "Supermama Lab",
    url: "https://storage.googleapis.com/landing_page_cult/main/Supermama%20Lab%20x%20Cult%20Creative.mp4",
  },
];

function HomeFive() {
  // const [vidIndex, setVidIndex] = useState(0);

  // useEffect(() => {
  //   const vidScroll = setInterval(() => {
  //     setVidIndex(vidIndex == vid.length - 1 ? 0 : vidIndex + 1);
  //   }, 4000);

  //   return () => {
  //     clearInterval(vidScroll);
  //   };
  // }, [vidIndex]);

  return (
    <section className="py-8 bg-[#F4F4F4] text-[#8A5AFE]">
      <h1 className="text-center font-aileron md:text-[7rem] text-6xl md:-tracking-[.6rem] -tracking-[.3rem]">
        we <span className="font-times italic">match</span>{" "}
        <span className="font-times ">you</span> to{" "}
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
              className="h-[26rem]"
              autoPlay
              loop
              muted
              webkit-playsinline
              playsinline
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
