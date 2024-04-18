"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import { Icon } from "@iconify/react";
const vid = [
  {
    url: "https://storage.googleapis.com/landing_page_cult/creators/Supermama%20Lab%20x%20Cult%20Creative.mp4",
  },
];

const vids = [
  {
    id: 1,
    title: "Hotal Indigo",
    badge1: "",
    badge2: "",
    url: "https://storage.googleapis.com/landing_page_cult/creators/Hotel%20Indigo%20CNY%20x%20Cult%20Creative%20.mp4",
  },
  {
    id: 2,
    title: "Trove",
    badge1: "",
    badge2: "",
    url: "https://storage.googleapis.com/landing_page_cult/creators/Trove%20x%20Cult%20Creative.mov",
  },
  {
    id: 3,
    title: "Mimone Spa",
    badge1: "",
    badge2: "",
    url: "https://storage.googleapis.com/landing_page_cult/creators/Mimone%20Spa%20x%20Cult%20Creative.mov",
  },
  {
    id: 4,
    title: "Supermama",
    badge1: "",
    badge2: "",
    url: "https://storage.googleapis.com/landing_page_cult/creators/Supermama%20Lab%20.mp4",
  },
];

function CreatorSecond() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const vidScroll = setInterval(() => {
      setCur(cur == vids.length - 1 ? 0 : cur + 1);
    }, 4000);

    return () => {
      clearInterval(vidScroll);
    };
  }, [cur]);

  return (
    <section className="py-8 bg-[#F4F4F4] text-[#006D53]">
      <h1 className="text-center font-aileron 2xl:text-8xl text-6xl lg:text-8xl md:text-8xl -tracking-[.1rem] font-semibold">
        we <span className="font-times italic -tracking-[.4rem]">match</span>{" "}
        <span className="font-times -tracking-[.4rem]">you</span> to{" "}
        <span className="font-times italic -tracking-[.4rem]">brands</span>
      </h1>
      <div className="lg:flex lg:flex-row justify-center gap-10 mt-16 px-9 hidden">
        {vids.map((elem) => (
          <div key={elem.id} className="flex flex-col">
            <motion.video
              key={elem.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={elem.url}
              className="w-[27rem] rounded-lg"
              autoPlay
              loop
              muted
              webkit-playsInline
              playsInline
            >
              <source type="video/mp4" />
            </motion.video>
            <h2 className="font-aileron text-lg pt-3 font-semibold">
              {elem.title}
            </h2>
          </div>
        ))}
      </div>
      <div className=" lg:hidden flex flex-col gap-5 ">
        <div className="flex mx-auto">
          <Icon
            icon="pepicons-pencil:line-x"
            style={{ color: cur === 0 ? "#006D53" : "black" }}
            width={70}
            onClick={() => setCur(0)}
            cursor={"pointer"}
          />
          <Icon
            icon="pepicons-pencil:line-x"
            style={{ color: cur === 1 ? "#006D53" : "black" }}
            width={70}
            onClick={() => setCur(1)}
            cursor={"pointer"}
          />
          <Icon
            icon="pepicons-pencil:line-x"
            style={{ color: cur === 2 ? "#006D53" : "black" }}
            width={70}
            onClick={() => setCur(2)}
            cursor={"pointer"}
          />
          <Icon
            icon="pepicons-pencil:line-x"
            style={{ color: cur === 3 ? "#006D53" : "black" }}
            width={70}
            onClick={() => setCur(3)}
            cursor={"pointer"}
          />
        </div>
        <div className="flex overflow-hidden">
          {vids.map((elem, i) => {
            return (
              <div key={i}>
                <Carousel
                  url={elem.url}
                  title={elem.title}
                  badge1={elem.badge1}
                  badge2={elem.badge2}
                  cur={cur}
                  setCur={setCur}
                  contentStyle={"hidden"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CreatorSecond;
