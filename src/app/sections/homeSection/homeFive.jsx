import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const vid = [
  {
    url: "https://storage.googleapis.com/landing_page_cult/Brands/Nonico%20x%20Cult%20Creative.mp4",
  },
];

function HomeFive() {
  const [vidIndex, setVidIndex] = useState(0);

  useEffect(() => {
    const vidScroll = setInterval(() => {
      setVidIndex(vidIndex == vid.length - 1 ? 0 : vidIndex + 1);
    }, 4000);

    return () => {
      clearInterval(vidScroll);
    };
  }, [vidIndex]);

  return (
    <section className="py-8 bg-[#F4F4F4] text-[#8A5AFE]">
      <h1 className="text-center font-aileron text-8xl md:text-8xl ">
        we{" "}
        <span className="font-serif italic -tracking-[.6rem]">match you</span>{" "}
        to <span className="font-serif italic -tracking-[.6rem]">brands</span>
      </h1>
      <div className="flex  flex-wrap lg:flex-row justify-evenly gap-10 mt-16 px-9">
        <div className="flex flex-col text-center">
          <motion.video
            key={vidIndex}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={vid[0].url}
            className="h-[26rem]"
            autoPlay
            loop
            muted
            webkit-playsinline
            playsinline
          >
            <source type="video/mp4" />
          </motion.video>
          <h2 className="font-serif text-lg pt-3">Hotel Indigo</h2>
        </div>
        <div className="flex flex-col text-center">
          <motion.video
            key={vidIndex}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={vid[0].url}
            className="h-[26rem] rounded-lg"
            autoPlay
            loop
            muted
            webkit-playsinline
            playsinline
          >
            <source type="video/mp4" />
          </motion.video>
          <h2 className="font-serif text-lg pt-3">Trove</h2>
        </div>
        <div className="flex flex-col text-center">
          <motion.video
            key={vidIndex}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={vid[0].url}
            className="h-[26rem] rounded-lg"
            autoPlay
            loop
            muted
            webkit-playsinline
            playsinline
          >
            <source type="video/mp4" />
          </motion.video>
          <h2 className="font-serif text-lg pt-3">Mimone Spa </h2>
        </div>
        <div className="flex flex-col text-center">
          <motion.video
            key={vidIndex}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={vid[0].url}
            className="h-[26rem] rounded-lg"
            autoPlay
            loop
            muted
            webkit-playsinline
            playsinline
          >
            <source type="video/mp4" />
          </motion.video>
          <h2 className="font-serif text-lg pt-3">Supermama Lab</h2>
        </div>
      </div>
    </section>
  );
}

export default HomeFive;
