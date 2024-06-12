import React from "react";
import { motion } from "framer-motion";
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
    url: "https://storage.googleapis.com/landing-cultcreative/main/main_cut%20Trove%20x%20Cult%20Creative.mp4",
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

const VideoBig = () => {
  return vids.map((elem) => (
    <div key={elem.id} className="flex flex-col snap-center">
      <motion.video
        key={elem.id}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src={elem.url}
        className="w-[40vw] rounded-lg"
        autoPlay
        loop
        muted
        webkit-playsinline="true"
        playsInline
      >
        <source type="video/mp4" />
      </motion.video>
      <h2 className="font-aileron text-lg pt-3 font-semibold">{elem.name}</h2>
    </div>
  ));
};

export default VideoBig;
