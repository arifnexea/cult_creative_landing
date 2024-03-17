"use client";
import FirstSection from "./sections/FirstSection";
import { useEffect, useState } from "react";
import SecondSection from "./sections/SecondSection.jsx";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  );
}
