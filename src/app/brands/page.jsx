"use client";
import Header from "@/app/components/Header";
import FifthSection from "@/app/sections/brandsection/FifthSection";
import FirstSection from "@/app/sections/brandsection/FirstSection";
import FourthSection from "@/app/sections/brandsection/FourthSection";
import LastSection from "@/app/sections/brandsection/LastSection";
import SecondSection from "@/app/sections/brandsection/SecondSection";
import SeventhSection from "@/app/sections/brandsection/SeventhSection";
import SixthSection from "@/app/sections/brandsection/SixthSection";
import ThirdSection from "@/app/sections/brandsection/ThirdSection";
import React, { Suspense } from "react";

const Brands = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.svg"} />
      <Suspense fallback={<p>Loading...</p>}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection
          title={" join 900+ other companies using Cult Creative"}
        />
        <SeventhSection />
        <LastSection color={"#8A5AFE"} />
      </Suspense>
    </main>
  );
};

export default Brands;
