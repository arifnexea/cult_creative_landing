"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Companies = ({ title, companiesImages, rounded, imgStyle }) => {
  return (
    <section className="text-[#1340FF]">
      <div className="flex items-center gap-10 px-15">
        <h3 className="text-2xl -tracking-[.1rem] font-bold">{title}</h3>
        <hr className="grow border-2 border-[#1340FF]" />
      </div>
      <div className="flex gap-5 flex-wrap p-5 m-3 justify-evenly">
        {companiesImages?.map((elem, i) => {
          return (
            <>
              {elem?.link ? (
                <Link
                  key={i}
                  href={elem.link}
                  className="flex my-3 overflow-visible"
                >
                  <Image
                    src={elem.path}
                    alt={elem.name}
                    width={100}
                    height={100}
                    className={`${rounded} ${imgStyle} object-contain`}
                  />
                </Link>
              ) : (
                <Image
                  key={i}
                  src={elem.path}
                  alt={elem.name}
                  width={100}
                  height={100}
                  className={`${rounded} ${imgStyle}`}
                />
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
