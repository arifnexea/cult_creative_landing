import React, { useState } from "react";
import Carousel from "../components/Carousel";
import { Icon } from "@iconify/react";

const SecondSection = () => {
  const [cur, setCur] = useState(0);

  const vids = [
    {
      title: "bata",
      badge1: "20 posts 3m reach",
      badge2: "8.5m views 411k engagements",
      url: "https://storage.googleapis.com/landing_page_cult/Brands/Bata%20-%20Case%20Study%20x%20Cult%20Creative.mp4",
    },
    {
      title: "It's The Ship",
      badge1: "760 posts 177K reach",
      badge2: "1.4M views 5K ENGAGEMENT",
      url: "https://storage.googleapis.com/landing_page_cult/Brands/Its%20The%20Ship%20-%20Case%20Study%20x%20Cult%20Creative%20.mp4",
    },
    {
      title: "bata",
      badge1: "760 posts 177K reach",
      badge2: "8.5m views 411k engagements",
      url: "https://storage.googleapis.com/landing_page_cult/Brands/Dressing%20Paula%20-%20Case%20Study%20x%20Cult%20Creative.MOV",
    },
  ];

  return (
    <main className="bg-[#F4F4F4] py-10 text-[#8A5AFE]">
      <div className="flex flex-col gap-5">
        <div className="flex xl:flex-row flex-col items-center gap-10 mx-auto px-8">
          <h3 className="lg:text-9xl text-7xl font-aileron font-bold flex-1 text-center">
            we&apos;re{" "}
            <span className="font-serif font-light tracking-[-.5rem] italic">
              different
            </span>
          </h3>
          <p className="lg:w-[30vw] w-auto text-xl font-aileron font-light text-center">
            Rapid access to quality content by our expansive community of over
            13,000 talented creators ready to bring your vision to life.
          </p>
        </div>
        <div className="flex overflow-hidden mt-3">
          {vids.map((elem, i) => {
            return (
              <div key={i}>
                <Carousel
                  url={elem.url}
                  title={elem.title}
                  badge1={elem.badge1}
                  badge2={elem.badge2}
                  cur={cur}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-row mx-auto">
          <Icon
            icon="icon-park-outline:dot"
            width={20}
            onClick={() => setCur(0)}
            cursor={"pointer"}
            className={cur === 0 && "scale-150"}
          />
          <Icon
            icon="icon-park-outline:dot"
            width={20}
            onClick={() => setCur(1)}
            cursor={"pointer"}
            className={cur === 1 && "scale-150"}
          />
          <Icon
            icon="icon-park-outline:dot"
            width={20}
            onClick={() => setCur(2)}
            cursor={"pointer"}
            className={cur === 2 && "scale-150"}
          />
        </div>
      </div>
    </main>
  );
};

export default SecondSection;
