import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ hoverText }) => {
  return (
    <section className="text-[#231F20]">
      <div className="flex item-start gap-10 xl:gap-40 flex-wrap">
        <div className="grow">
          <Image
            src={"/images/logo1.png"}
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
            <li className={`hover:text-[#8A5AFE] duration-150 cursor-pointer`}>
              Hire a Creative
            </li>
            <li className={`hover:text-[#8A5AFE] duration-150 cursor-pointer`}>
              Apply to Creative Jobs
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl -tracking-[.1rem]">Company</h1>
          <ul className="font-light text-sm">
            <Link href={"/about"}>
              <li
                className={`hover:text-[#8A5AFE] duration-150 cursor-pointer`}
              >
                About Us
              </li>
            </Link>
            <Link href={"/faq"}>
              <li
                className={`hover:text-[#8A5AFE] duration-150 cursor-pointer`}
              >
                FAQs
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                className={`hover:text-[#8A5AFE] duration-150 cursor-pointer`}
              >
                Contact
              </li>
            </Link>
            <Link href={"/resources"}>
              <li
                className={`hover:text-[#8A5AFE] duration-150 cursor-pointer`}
              >
                Resources
              </li>
            </Link>
            <Link href={"/newsroom"}>
              <li
                className={`hover:text-[#8A5AFE] duration-150 cursor-pointer`}
              >
                Newsroom
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl -tracking-[.1rem]">Support</h1>
          <ul className="font-light text-sm ">
            <li className={`hover:text-[#8A5AFE] duration-150 cursor-pointer`}>
              Privacy Policy
            </li>
            <li className={`hover:text-[#8A5AFE] duration-150 cursor-pointer`}>
              Terms and Conditions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
