import dynamic from "next/dynamic";
import { Snitcher } from "@/app/components/Snitcher.jsx";
import Header from "@/app/components/Header.jsx";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const FirstSection = dynamic(() =>
  import("@/app/sections/brandsection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("@/app/sections/brandsection/SecondSection")
);
const ThirdSection = dynamic(() =>
  import("@/app/sections/brandsection/ThirdSection")
);
const FourthSection = dynamic(() =>
  import("@/app/sections/brandsection/FourthSection")
);
const FifthSection = dynamic(() =>
  import("@/app/sections/brandsection/FifthSection")
);
const SixthSection = dynamic(() =>
  import("@/app/sections/brandsection/SixthSection")
);
const SeventhSection = dynamic(() =>
  import("@/app/sections/brandsection/SeventhSection")
);
const LastSection = dynamic(() =>
  import("@/app/sections/brandsection/LastSection")
);

export const metadata = {
  title: "Brands",
  description:
    "Tailored digital creator marketing solutions for SMEs and brands with flexible UGC and KOL campaign management to amplify your brand’s reach and engagement.",
  openGraph: {
    title:
      "Digital Marketing Solutions for SMEs and Brands - Flexible UGC and KOL Campaign Management Agency",
    // Must specify because `openGraph` has been overriden here
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "/brands",
  },
};

const Brands = () => {
  return (
    <>
      <Snitcher />
      <Header />
      <main className="flex min-h-screen flex-col">
        <Suspense fallback={<p>Loading...</p>}>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <SeventhSection />
          <FourthSection />
          <FifthSection />
          <SixthSection title="join 900+ other companies using Cult Creative" />
          <Toaster position="top-center" />
        </Suspense>
      </main>
      <LastSection color="#8A5AFE" />
    </>
  );
};

export default Brands;
