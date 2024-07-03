import dynamic from "next/dynamic";
import { Snitcher } from "@/app/components/Snitcher";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const CreatorFirst = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorFirst")
);
const CreatorSecond = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorSecond")
);
const CreatorThird = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorThird")
);
const CreatorFourth = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorFourth")
);
const CreatorFifth = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorFifth")
);
const CreatorSixth = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorSixth")
);
const CreatorLast = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorLast")
);
const LastSection = dynamic(() =>
  import("@/app/sections/brandsection/LastSection")
);

export const metadata = {
  title: "Creators",
  description:
    "Join Cult Creative and monetise your social media presence with brand deals, where creators get paid hassle-free within 30 days. Sign up, get synced to amazing brand deals, and up your content creator game today.",
  openGraph: {
    title: "Get Branded Deals for UGC - Earn Side Money while Creating Content",
    // Must specify because `openGraph` has been overriden here
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "/creators",
  },
};

const Creators = () => {
  return (
    <>
      <Snitcher />
      <Header />
      <main className="flex min-h-screen flex-col">
        <Suspense fallback={<p>Loading...</p>}>
          <CreatorFirst />
          <CreatorSecond />
          <CreatorThird />
          <CreatorFourth />
          <CreatorFifth />
          <CreatorSixth />
          <CreatorLast />
          <Toaster position="top-center" />
        </Suspense>
      </main>
      <LastSection color="#006D53" />
    </>
  );
};

export default Creators;
