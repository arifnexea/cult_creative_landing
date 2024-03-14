"use client";
import Image from "next/image";
import Header from "./components/Header";
import FirstSection from "./FirstSection";
import { useEffect, useState } from "react";
import useToggle from "./hooks/toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FirstSection />
    </main>
  );
}
