// import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import { v4 as uuid } from "uuid";

// const vids = [
//   {
//     id: uuid(),
//     name: "Hotel Indigo",
//     url: "https://storage.googleapis.com/landing-cultcreative/main/Hotel%20Indigo%20CNY%20x%20Cult%20Creative%20.mp4",
//   },
//   {
//     id: uuid(),
//     name: "Trove",
//     url: "https://storage.googleapis.com/landing-cultcreative/main/Trove%20x%20Cult%20Creative.mp4",
//   },
//   {
//     id: uuid(),
//     name: "Mimone Spa",
//     url: "https://storage.googleapis.com/landing-cultcreative/main/Mimone%20Spa%20x%20Cult%20Creative.mov",
//   },
//   {
//     id: uuid(),
//     name: "Supermama Lab",
//     url: "https://storage.googleapis.com/landing-cultcreative/main/Supermama%20Lab%20x%20Cult%20Creative.mp4",
//   },
// ];

// function HomeFive() {
//   return (
//     <section className="py-8 bg-[#F4F4F4] text-[#8A5AFE]">
//       <h1 className="text-center font-aileron md:text-[7rem] text-6xl md:-tracking-[.6rem] -tracking-[.3rem]">
//         we <span className="font-times italic">match you</span> to{" "}
//         <span className="font-times italic ">brands</span>
//       </h1>
//       <div className="flex flex-wrap lg:flex-row justify-evenly gap-10 mt-16 px-9">
//         {vids.map((elem) => (
//           <div className="flex flex-col text-center" key={elem?.id}>
//             <motion.video
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               src={elem?.url}
//               className="max-w-[15rem] rounded-md"
//               autoPlay
//               loop
//               muted
//               webkit-playsInline
//               playsInline
//               preload="metadata"
//             >
//               <source type="video/mp4" />
//             </motion.video>
//             <h2 className="font-aileron text-lg pt-3 font-semibold text-start">
//               {elem?.name}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default HomeFive;

"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import { Icon } from "@iconify/react";
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
    <section className="py-8 bg-[#F4F4F4] text-[#8A5AFE]">
      <h1 className="text-center font-aileron 2xl:text-[115px] text-7xl md:text-8xl font-light">
        <span className="font-times italic -tracking-[6px] md:-tracking-[12px]">
          creators,
        </span>{" "}
        <span className="-tracking-[5px] md:text-[91px] text-6xl">get</span>{" "}
        <span className="font-times italic -tracking-[6px] md:-tracking-[12px]">
          brand deals
        </span>
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
              className="w-[20rem] rounded-lg"
              autoPlay
              loop
              muted
              webkit-playsInline
              playsInline
            >
              <source type="video/mp4" />
            </motion.video>
            <h2 className="font-aileron text-lg pt-3 font-semibold">
              {elem.name}
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
                  name={elem.name}
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

export default HomeFive;
