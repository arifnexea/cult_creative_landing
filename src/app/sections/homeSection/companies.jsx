import Companies from "@/app/components/Companies";
import React from "react";

const companies = [
  {
    name: "melium",
    path: "/images/brands/melium.png",
  },
  {
    name: "indigo",
    path: "/images/main/indigo.png",
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
    path: "/images/main/pavi.png",
  },
  {
    name: "dressing paula",
    path: "/images/main/uniqlo.png",
  },
];

const HomeCompanies = ({ title }) => {
  return (
    <main className="bg-[#F4F4F4] py-10 px-5">
      <Companies
        title={title}
        companiesImages={companies}
        rounded={"rounded-full"}
      />
    </main>
  );
};

export default HomeCompanies;
