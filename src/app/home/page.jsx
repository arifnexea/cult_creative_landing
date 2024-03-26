"use client";
import { Suspense, useEffect, useState } from "react";
import HomeHeader from "../components/HomeComponents/homeHeader";
import HomeFirst from "../sections/homeSection/homeFirst";
import HomeTwo from "../sections/homeSection/homeTwo";
import HomeThree from "../sections/homeSection/homeThree";
import HomeFour from "../sections/homeSection/homeFour";
import HomeFive from "../sections/homeSection/homeFive";
import SixthSection from "../sections/SixthSection";
import HomeSix from "../sections/homeSection/homeSix";
import LastSection from "../sections/LastSection";
import Footer from "../components/Footer";
function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeHeader color={"#1340FF"} logo={"/images/Main/cc_logo4.png"} />
      <Suspense fallback={<p>Loading...</p>}>
      <HomeFirst />
      <HomeTwo />
      <HomeThree />
      <SixthSection title={" join 900+ other companies using Cult Creative"} />
      <HomeFour />
      <HomeFive />
      <HomeSix />
      <LastSection color={"#1340FF"} />
      </Suspense>
    </main>
  );
}

export default Home;
