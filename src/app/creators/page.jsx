"use client";
import * as head from "@/app/components/head";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import CreatorFirst from "@/app/sections/creatorSection/CreatorFirst";
import CreatorSecond from "@/app/sections/creatorSection/CreatorSecond";
import CreatorThird from "@/app/sections/creatorSection/CreatorThird";
import CreatorFourth from "@/app/sections/creatorSection/CreatorFourth";
import CreatorFifth from "@/app/sections/creatorSection/CreatorFifth";
import CreatorSixth from "@/app/sections/creatorSection/CreatorSixth";
import CreatorLast from "@/app/sections/creatorSection/CreatorLast";
import LastSection from "@/app/sections/brandsection/LastSection";
import { Toaster } from "react-hot-toast";

const Creators = () => {
  return (
    <>
      <head.Title value="Creators" />
      <main className="flex min-h-screen flex-col">
        <Header logo={"/images/logo.svg"} />
        <Suspense fallback={<p>Loading...</p>}>
          <CreatorFirst />
          <CreatorSecond />
          <CreatorThird />
          <CreatorFourth />
          <CreatorFifth />
          <CreatorSixth />
          <CreatorLast />
          <LastSection color={"#006D53"} />
          <Toaster position="top-center" />
        </Suspense>
      </main>
    </>
  );
};

export default Creators;
