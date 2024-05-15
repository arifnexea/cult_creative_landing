import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = ({ image, date, link, title, source, type, path }) => {
  return (
    <div className="p-3 rounded-lg text-black bg-stone-100">
      {type === "resource" ? (
        <Link href={path}>
          <div className="overflow-hidden max-h-[400px]">
            {image ? (
              <Image
                src={image}
                alt={source}
                width={500}
                height={500}
                className="rounded-md object-cover w-full hover:scale-105 transition-all ease-in-out duration-300"
              />
            ) : (
              <div className="w-full h-[250px] bg-gray-200 rounded-md"></div>
            )}
          </div>
          {/* <div className="bg-slate-500 w-full h-48 rounded-lg"></div> */}
          {/* <div className="inline-flex gap-1 text-xs text-black">
            <p className="font-semibold">Featured</p>
            <p>.</p>
            <p>{date}</p>
          </div> */}
          <p className="truncate font-semibold my-5">{title}</p>

          <p className="text-xs font-semibold hover:text-blue-900">
            Continue reading...
          </p>
        </Link>
      ) : (
        <Link href={link}>
          <div className="overflow-hidden max-h-[250px]">
            {image ? (
              <Image
                src={image}
                alt={source}
                width={500}
                height={500}
                className="rounded-md object-cover w-full hover:scale-105 transition-all ease-in-out duration-300"
              />
            ) : (
              <div className="w-full h-[250px] bg-gray-200 rounded-md"></div>
            )}
          </div>
          {/* <div className="bg-slate-500 w-full h-48 rounded-lg"></div> */}
          <div className="inline-flex gap-1 text-xs text-black">
            <p className="font-semibold">Featured</p>
            <p>.</p>
            <p>{date}</p>
          </div>
          <p className="truncate font-semibold my-5">{title}</p>

          <p className="text-xs font-semibold hover:text-blue-900">
            Continue reading...
          </p>
        </Link>
      )}
    </div>
  );
};

export default News;
