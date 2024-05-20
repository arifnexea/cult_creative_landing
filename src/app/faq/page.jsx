"use client";
import { useState } from "react";
import Header from "../components/Header";
import LastSection from "../sections/brandsection/LastSection";
import * as head from "@/app/components/head";

const Accordion = () => {
  const [currentTab, setCurrentTab] = useState("creators");

  const handleChangeTab = (e) => setCurrentTab(e.target.value);

  const Item = ({ title, text }) => (
    <div className={"grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10 border-t-2 border-t-gray-200"}>
      <p className="font-bold text-gray-800">{title}</p>
      <p className="text-gray-600">{text}</p>
    </div>
  );

  const creators = (
    <div className="flex flex-col text-lg">
      <Item
        title={"Do I have to pay to use Cult Creative?"}
        text={"Nope! Cult Creative is a free platform and won’t cost you anything."}
      />
      <Item
        title={"Who do I contact if I have any questions/inquiries?"}
        text={"You may email our support team at support@cultcreative.asia or DM us on Instagram at @cultcreativeasia"}
      />
    </div>
  );

  return (
    <>
      <head.Title value="FAQ" />
      <Header />
      <section className="relative z-1 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] text-black">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary text-[#8A5AFE]">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-bold sm:text-[40px]/[48px]">
                  Any Questions? Look Here
                </h2>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-row gap-5 px-5 my-10 font-aileron font-bold">
            <button
              value={"creators"}
              className={`${
                currentTab === "creators" &&
                "border-b-4 border-b-indigo-500 rounded-sm transition ease-in-out duration-300"
              }`}
              onClick={handleChangeTab}
            >
              Creator
            </button>
          </div>

          {/* Items */}
          {currentTab === "creators" && creators}
        </div>
      </section>
      <LastSection />
    </>
  );
};

export default Accordion;

// const AccordionItem = ({ header, text }) => {
//   const [active, setActive] = useState(false);

//   const handleToggle = (event) => {
//     event.preventDefault();
//     setActive(!active);
//   };

//   return (
//     <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8 text-black">
//       <button
//         className={`faq-btn flex w-full text-left`}
//         onClick={handleToggle}
//       >
//         <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
//           <svg
//             className={`fill-primary stroke-primary duration-200 ease-in-out ${
//               active ? "rotate-180" : ""
//             }`}
//             width="17"
//             height="10"
//             viewBox="0 0 17 10"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
//               fill=""
//               stroke=""
//             />
//           </svg>
//         </div>

//         <div className="w-full">
//           <h4 className="mt-1 text-lg font-semibold">{header}</h4>
//         </div>
//       </button>

//       <div
//         className={`pl-[62px] duration-200 ease-in-out ${
//           active ? "block" : "hidden"
//         }`}
//       >
//         <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// };
