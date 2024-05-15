"use client";
import React from "react";
import Header from "../components/Header";
import LastSection from "../sections/brandsection/LastSection";
import News from "../components/News";
import resourcesData from "../contants/resources.json";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
      <Header logo={"/images/logo.svg"} />
      <div className="text-center py-10 bg-[#8A5AFE]">
        <h className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
          Resources
        </h>
        {/* <p className="my-6">Read our news from top talents</p> */}
      </div>
      <div className="px-5 py-10 bg-slate-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resourcesData.map((elem, i) => (
            <div key={i} className=" cursor-pointer">
              <News
                title={elem.title}
                image={elem.image}
                type={"resource"}
                path={elem.path}
              />
            </div>
          ))}
        </div>
      </div>
      <LastSection color={"#1340FF"} />
    </main>
  );
};

export default Page;
