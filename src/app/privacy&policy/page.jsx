"use client";
import React from "react";
import Header from "../components/Header";
import LastSection from "../sections/brandsection/LastSection";
import Image from "next/image";

const Terms = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
      <Header logo={"/images/logo.svg"} />
      <div className="text-center py-10 bg-[#8A5AFE]">
        <h className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
          Privacy & Policy
        </h>
      </div>
      <div className="bg-white">
        {Array(4)
          .fill(1)
          .map((e, i) => (
            <Image
              key={i}
              src={`/pdpa/pdpa-${i + 1}.jpg`}
              width={400}
              height={600}
              alt="1"
              className="bg-black bg-clip-text sm:w-[65%] w-full mx-auto"
              draggable="false"
            />
          ))}
      </div>
      <LastSection color={"#1340FF"} />
    </main>
  );
};

export default Terms;
