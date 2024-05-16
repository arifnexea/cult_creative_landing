"use client";
import * as head from "@/app/components/head";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import FirstSection from "@/app/sections/brandsection/FirstSection";
import SecondSection from "@/app/sections/brandsection/SecondSection";
import ThirdSection from "@/app/sections/brandsection/ThirdSection";
import FourthSection from "@/app/sections/brandsection/FourthSection";
import FifthSection from "@/app/sections/brandsection/FifthSection";
import SixthSection from "@/app/sections/brandsection/SixthSection";
import SeventhSection from "@/app/sections/brandsection/SeventhSection";
import LastSection from "@/app/sections/brandsection/LastSection";
import { Toaster } from "react-hot-toast";

const Brands = () => {
  return (
    <>
      <head.Title value="Brands" />
      <main className="flex min-h-screen flex-col">
        <Header logo="/images/logo.svg" />
        <Suspense fallback={<p>Loading...</p>}>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection title="join 900+ other companies using Cult Creative" />
          <SeventhSection />
          <LastSection color="#8A5AFE" />
          <Toaster position="top-center" />
        </Suspense>
      </main>
    </>
  );
};

export default Brands;
