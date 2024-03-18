import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="text-[#231F20]">
      <div className="flex item-start gap-10 xl:gap-40 flex-wrap">
        <div className="grow">
          <Image
            src={"/images/logo.png"}
            alt="Cult creative"
            width={130}
            height={130}
          />
          <div className="mt-10">
            <p className="uppercase font-light">202001018157 (1374477-W)</p>
            <p className="uppercase font-light">Copyright 2024</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl -tracking-[.1rem]">Cult Careers</h1>
          <ul className="font-light text-sm">
            <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
              Hire A Creative
            </li>
            <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
              Apply To Creative Jobs
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl -tracking-[.1rem]">Company</h1>
          <ul className="font-light text-sm">
            <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
              Contact
            </li>
            <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
              Resources
            </li>
            <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
              Newsroom
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl -tracking-[.1rem]">Support</h1>
          <ul className="font-light text-sm ">
            <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
              Privacy policy{" "}
            </li>
            <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
              Terms and conditions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
