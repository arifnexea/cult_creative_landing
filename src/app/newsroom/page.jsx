"use client";
import Header from "../components/Header";
import LastSection from "../sections/brandsection/LastSection";
import News from "../components/News";
import newsdata from "../contants/newsroom.json";
import * as head from "@/app/components/head";

const Newsroom = () => {
  return (
    <>
      <head.Title value="Newsroom" />
      <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
        <Header logo={"/images/logo.svg"} />
        <div className="text-center py-10 bg-[#8A5AFE]">
          <h className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
            Newsroom
          </h>
          <p className="my-6">Read our news from top talents</p>
        </div>
        <div className="px-5 py-10 bg-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {newsdata.map((elem, i) => (
              <div key={i}>
                <News
                  title={elem.title}
                  date={elem.date}
                  link={elem.link}
                  source={elem.source}
                  image={elem.image}
                />
              </div>
            ))}
          </div>
        </div>
        <LastSection color={"#1340FF"} />
      </main>
    </>
  );
};

export default Newsroom;
