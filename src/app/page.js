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
import Companies from "./components/Companies";
import HomeCompanies from "./sections/homeSection/companies";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.svg"} />
      <Suspense fallback={<p>Loading...</p>}>
        <HomeFirst />
        <HomeTwo />
        <HomeThree />
        <HomeCompanies title={"trusted by 900+ companies"} />
        <HomeFour />
        <HomeFive />
        <HomeSix />
        <LastSection color={"#1340FF"} />
        <Toaster position="top-center" />
      </Suspense>
    </main>
  );
}
