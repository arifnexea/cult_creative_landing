import React from "react";
import Image from "next/image";
import Link from "next/link";
import Companies from "@/app/components/Companies";

const companies = [
  {
    name: "melium",
    path: "/images/brands/melium.png",
  },
  {
    name: "indigo",
    path: "/images/brands/indigo.png",
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
    path: "/images/brands/pavillion.png",
  },
  {
    name: "dressing paula",
    path: "/images/brands/dressingpaula.png",
  },
];
function CreatorFourth() {
  return (
    <section className="text-[#1340FF] bg-[#F4F4F4] p-5 gap-6">
      <Companies
        title={"Work with these names and upgrade your content creator game"}
        companiesImages={companies}
        type={"companies"}
        rounded={"rounded-full"}
      />
      {/* <div className="flex items-center gap-10">
        <h3 className="lg:text-3xl text-xl -tracking-[.1rem] font-bold">
          Work with these names and upgrade your <br /> content creator game
        </h3>
        <hr className="grow border-2 border-[#1340FF]" />
      </div>
      <div className="flex flex-wrap p-5 m-3 justify-evenly">
        {companies.map((elem, i) => {
          return (
            <>
              {elem?.link ? (
                <Link
                  href={elem.link}
                  className="flex mx-3 my-3 overflow-visible"
                >
                  <Image
                    src={elem.path}
                    alt={elem.name}
                    width={100}
                    height={100}
                    className={
                      "rounded-full  m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    }
                  />
                </Link>
              ) : (
                <Image
                  src={elem.path}
                  alt={elem.name}
                  width={100}
                  height={100}
                  className={`rounded-full m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
                />
              )}
            </>
          );
        })}
      </div> */}
    </section>
  );
}

export default CreatorFourth;
