"use client";
import React from "react";
import { Suspense } from "react";
import HomeHeader from "../components/HomeComponents/homeHeader";
import CreatorFirst from "../sections/creatorSection/CreatorFirst";
import CreatorSecond from "../sections/creatorSection/CreatorSecond";
import CreatorThird from "../sections/creatorSection/CreatorThird";
import SixthSection from "../sections/SixthSection";
import CreatorFourth from "../sections/creatorSection/CreatorFourth";
import CreatorFifth from "../sections/creatorSection/CreatorFifth";
import CreatorSixth from "../sections/creatorSection/CreatorSixth";
import CreatorLast from "../sections/creatorSection/CreatorLast";
import LastSection from "../sections/LastSection";
function Creators() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeHeader color={"#006D53"} logo={"/images/creator/cc_logo5.png"} />
      <Suspense fallback={<p>Loading...</p>}>
        <CreatorFirst />
        <CreatorSecond />
        <CreatorThird />
        <CreatorFourth />
        <CreatorFifth />
        <CreatorSixth />
        <CreatorLast />
        <LastSection color={"#006D53"} />
      </Suspense>
    </main>
  );
}

export default Creators;
