'use client';

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
      <HomeHeader logo={"/images/logo.png"} />
      <Suspense fallback={<p>Loading...</p>}>
      <HomeFirst />
      <HomeTwo />
      <HomeThree />
      <SixthSection />
      <HomeFour />
      <HomeFive />
      <HomeSix />
      <LastSection />
      </Suspense>
    </main>
  );
}

export default Home;
