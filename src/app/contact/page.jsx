import { makeCanonicalUrl } from "@/app/components/misc";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import { Content } from "./Content";
import LastSection from "@/app/sections/brandsection/LastSection";

export const metadata = {
  title: "Contact Us",
  description: "Connect with Cult Creative. Reach out to our dedicated support team via email or Instagram for any enquiries or assistance.",
  alternates: {
    canonical: makeCanonicalUrl("/contact"),
  },
};

const Contact = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <section className="flex p-10 items-center justify-center bg-[#F4F4F4] text-[#8A5AFE] font-aileron">
            <Content />
          </section>
          <LastSection />
        </Suspense>
      </main>
    </>
  );
};

export default Contact;
