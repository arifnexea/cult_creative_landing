"use client";
import FirstSection from "./sections/FirstSection";
import { useEffect, useState } from "react";
import SecondSection from "./sections/SecondSection.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FirstSection />
      <SecondSection />
    </main>
  );
}
