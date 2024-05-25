import Carousel from "@/app/components/Carousel";
import { Icon } from "@iconify/react";
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

const Test = () => {
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
    <>
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
    </>
  );
};

export default Test;
