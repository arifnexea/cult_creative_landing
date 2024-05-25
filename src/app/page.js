"use client";
import Header from "@/app/components/Header";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
// import HomeFirst from "@/app/sections/homeSection/homeFirst";
// import HomeTwo from "@/app/sections/homeSection/homeTwo";
// import HomeThree from "@/app/sections/homeSection/homeThree";
// import HomeCompanies from "@/app/sections/homeSection/companies";
// import HomeFour from "@/app/sections/homeSection/homeFour";
// import HomeFive from "@/app/sections/homeSection/homeFive";
// import HomeSix from "@/app/sections/homeSection/homeSix";
// import LastSection from "@/app/sections/brandsection/LastSection";
import { Toaster } from "react-hot-toast";

const HomeFirst = dynamic(
  () => import("@/app/sections/homeSection/homeFirst"),
  { ssr: true }
);
const HomeTwo = dynamic(() => import("@/app/sections/homeSection/homeTwo"));
const HomeThree = dynamic(() => import("@/app/sections/homeSection/homeThree"));
const HomeCompanies = dynamic(() =>
  import("@/app/sections/homeSection/companies")
);
const HomeFour = dynamic(() => import("@/app/sections/homeSection/homeFour"));
const HomeFive = dynamic(() => import("@/app/sections/homeSection/homeFive"));
const HomeSix = dynamic(() => import("@/app/sections/homeSection/homeSix"));
const LastSection = dynamic(() =>
  import("@/app/sections/brandsection/LastSection")
);

const Home = () => (
  <>
    <title>Cult Creative</title>
    <main className="flex min-h-screen flex-col max-w-[100vw]">
      <Header logo="/images/logo.svg" />
      <Suspense fallback={<p>Loading...</p>}>
        <HomeFirst />
        <HomeTwo />
        <HomeThree />
        <HomeCompanies title="trusted by 900+ companies" />
        <HomeFour />
        <HomeFive />
        <HomeSix />
        <LastSection color="#1340FF" />
        <Toaster position="top-center" />
      </Suspense>
    </main>
  </>
);

export default Home;
