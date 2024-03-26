"use client";
import FirstSection from "./sections/brandsection/FirstSection";
import { Suspense, useEffect, useState } from "react";
import SixthSection from "./sections/brandsection/SixthSection";
import LastSection from "./sections/brandsection/LastSection";
import Header from "./components/Header";
import HomeFirst from "./sections/homeSection/homeFirst";
import HomeTwo from "./sections/homeSection/homeTwo";
import HomeThree from "./sections/homeSection/homeThree";
import HomeFour from "./sections/homeSection/homeFour";
import HomeFive from "./sections/homeSection/homeFive";
import HomeSix from "./sections/homeSection/homeSix";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.svg"} />
      <Suspense fallback={<p>Loading...</p>}>
        <HomeFirst />
        <HomeTwo />
        <HomeThree />
        <SixthSection
          title={" join 900+ other companies using Cult Creative"}
        />
        <HomeFour />
        <HomeFive />
        <HomeSix />
        <LastSection color={"#1340FF"} />
      </Suspense>
    </main>
  );
}
