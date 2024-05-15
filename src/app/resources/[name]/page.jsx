"use client";
import Header from "@/app/components/Header";
import LastSection from "@/app/sections/brandsection/LastSection";
import React from "react";

const Chip = ({ keyword }) => {
  return (
    <div className="p-2 bg-[#dfd4fa] text-[#8A5AFE] rounded-full inline-block px-3 text-xs font-semibold font-aileron">
      <p>{keyword}</p>
    </div>
  );
};

export function ResourceContent({ params: { name } }) {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
      <Header logo={"/images/logo.svg"} />
      <div className="text-center py-10 bg-[#8A5AFE]">
        <h className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
          Resources
        </h>
        {/* <p className="my-6">Read our news from top talents</p> */}
      </div>
      {/* Content of the blog */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-10 bg-slate-50 text-gray-500">
        {/* Text */}
        <div className="col-span-2 text-pretty text-[1.1rem]">
          {/* Title */}
          <div>
            <h1
              className="text-start text-4xl font-semibold text-pretty text-black mb-10"
              style={{
                lineHeight: 1.2,
              }}
            >
              Unlocking the Power of Brand Deals: A Guide For Content Creators
            </h1>
            <p className="my-3">
              Content creators have become a pivotal part of social media
              marketing and entertainment. With the creator economy booming,
              they now have a higher chance at earning money and popularity
              through brand deals and partnership, bringing both the creators
              and businesses more visibility, credibility, and financial
              success.
            </p>
            <br />
            <p>
              {
                "But navigating the world of content creation isn't always easy and securing brand deals is even harder, so here's a guide on how you can land your next brand deal."
              }
            </p>
          </div>

          {/* First Content */}
          <div>
            <p className="text-start text-2xl font-semibold text-pretty text-black my-10">
              Taking on Brand Deals
            </p>
            <p>
              {
                "There’s nothing sweeter than earning your first brand deal. You’ll get to monetise your content (yay, more money!), collaborate with your dream brands, and even reach larger audiences. By following these tips, you can make the most out of your future brand deals."
              }
            </p>
            <ol className="list-decimal ml-10 my-5">
              <li>
                <p>
                  {
                    "Authenticity is Key: Your audience trusts you for your authenticity, so it's important to collaborate with brands that align with your values and that resonate with your audience."
                  }
                </p>
              </li>
              <li className="my-3">
                <p>
                  {
                    "Transparency in Disclosure: No one likes a liar and no one likes to get sued either. Always be transparent about your content by adhering to relevant advertising guidelines and clearly disclosing when a content is sponsored."
                  }
                </p>
              </li>
              <li>
                <p>
                  {
                    "Quality Over Quantity: Instead of pursuing numerous brand deals, prioritise the ones that will allow you to produce engaging and authentic content that adds value to both the brand and your audience."
                  }
                </p>
              </li>
              <li className="my-3">
                <p>
                  {
                    "Negotiation and Contracts: Familiarise yourself with negotiation tactics and remember to always navigate contracts with caution. Make sure the terms of the contract aligns with your brand and audience, and don't hesitate to seek legal guidance when necessary."
                  }
                </p>
              </li>
              <li>
                <p>
                  {
                    "Consistent Brand Alignment: Maintain a consistent brand image and messaging across all your brand deals. This ensures cohesive and authentic representation of your brand and values."
                  }
                </p>
              </li>
            </ol>
            <p>
              {
                "Stick to this guide when approaching brand deals, so you can establish yourself as a credible and sought-after content creator whilst also maintaining the trust of your audience."
              }
            </p>
          </div>

          {/* Seconf Content */}
          <div>
            <p className="text-start text-2xl font-semibold text-pretty text-black my-10">
              How do you get brand deals on Cult Creative?
            </p>
            <p>
              {
                "Scoring your first (or second or third) brand deal just got easier thanks to Cult Creative’s creator platform. Whether you’re into fashion and beauty, tech and finance, or maybe you’re an explorer who’s ready to seize any opportunity that comes your way, we’ll connect you to amazing brands across South East Asia when you become a CC creator."
              }
            </p>
            <p>{"Did I mention it’s free to use? Yup, it is!"}</p>
            <p>
              {
                "Simply fill out this form and you’re on your way to securing your next brand deal."
              }
            </p>
          </div>

          {/* Conclusion */}
          <div>
            <p className="text-start text-2xl font-semibold text-pretty text-black my-10">
              Conclusion
            </p>
            <p>
              {
                "It can be both exciting and complex to work with brands. It is the path to elevating your career and creative endeavours."
              }
            </p>
            <p className="mt-3">
              {
                "With this guide, you’ll be well-equipped to forge successful partnerships with brands whilst also retaining the trust and loyalty of your audience. Remember to always be authentic, transparent, and genuine about your content no matter who you’re creating it for."
              }
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="col-span-1 p-5">
          <p className="text-start text-2xl font-semibold text-pretty text-black ">
            Keywords
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            <Chip keyword={"Creator Economy Malaysia"} />
            <Chip keyword={"Brand deals for Creators "} />
          </div>
        </div>
      </div>
      <LastSection color={"#1340FF"} />
    </main>
  );
}

export default ResourceContent;
