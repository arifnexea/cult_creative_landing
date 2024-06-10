"use client";
import { PageMeta } from "@/app/components/PageMeta";
import Header from "@/app/components/Header";
import Image from "next/image";
import LastSection from "@/app/sections/brandsection/LastSection";

const PrivacyPolicy = () => {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        desc="Safeguard your data with Cult Creative’s Privacy Policy. Learn how we protect your information and ensure transparency in our practices."
        canonicalPath="/privacy-policy"
      />
      <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
        <Header />
        <div className="text-center py-10 bg-[#8A5AFE]">
          <p className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
            Privacy Policy
          </p>
        </div>
        <div className="bg-white">
          {Array(4)
            .fill(1)
            .map((e, i) => (
              <Image
                key={i}
                src={`/pdpa/pdpa-${i + 1}.jpg`}
                alt={`Privacy policy, page ${i + 1}`}
                width={400}
                height={600}
                className="bg-black bg-clip-text sm:w-[65%] w-full mx-auto"
                draggable="false"
              />
            ))}
        </div>
        <LastSection color="#1340FF" />
      </main>
    </>
  );
};

export default PrivacyPolicy;
