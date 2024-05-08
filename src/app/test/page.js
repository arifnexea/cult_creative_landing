import React from "react";
import Companies from "../components/Companies";
import HorizontalScroll from "../components/Companies";
import Link from "next/link";
import Image from "next/image";

const companies = [
  {
    name: "melium",
    path: "/images/brands/melium.png",
  },
  {
    name: "indigo",
    path: "/images/Main/indigo.png",
  },
  {
    name: "bata",
    path: "/images/brands/bata.jpg",
  },
  {
    name: "huckleberry",
    path: "/images/brands/huckleberry.png",
  },
  {
    name: "longchamp",
    path: "/images/brands/longchamp.png",
  },
  {
    name: "farmfresh",
    path: "/images/brands/farmfresh.png",
  },
  {
    name: "pavillion",
    path: "/images/Main/pavi.png",
  },
  {
    name: "dressing paula",
    path: "/images/Main/uniqlo.png",
  },
];

const page = () => {
  return (
    <main className="bg-[#F4F4F4]">
      <Companies
        title="Test"
        companiesImages={companies}
        rounded={"rounded-full"}
        imgStyle={
          "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        }
      />
    </main>
  );
};

export default page;
