import React from "react";
import Badge from "./Badge";

const Carousel = ({
  url,
  name,
  title,
  badge1,
  badge2,
  badge3,
  badge4,
  cur,
  contentStyle,
}) => {
  return (
    <div
      className={`flex gap-2 flex-col lg:flex-row items-center lg:items-start justify-between w-screen ease-in-out duration-500 transition-transform`}
      style={{
        transform: `translateX(-${cur * 100}%)`,
      }}
    >
      <div className="basis-1/2">
        <div className="aspect-video">
          <video
            src={url}
            className=" h-[37rem] rounded-lg ml-auto"
            autoPlay
            loop
            muted
            webkit-playsInline
            playsInline
            preload="metadata"
          >
            <source type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={`flex flex-col items-center gap-5 basis-1/2 lg:mt-20`}>
        <h1 className="sm:text-6xl text-4xl font-aileron font-bold italic tracking-[-.2rem]">
          <span className="font-extralight text-4xl">Client : </span>{" "}
          {title?.toUpperCase()}
        </h1>
        <div className={`${contentStyle}`}>
          <Badge contents={badge1} />
          <Badge contents={badge2} />
          <Badge contents={badge3} />
          <Badge contents={badge4} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
