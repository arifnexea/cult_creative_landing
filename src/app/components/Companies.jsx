import React from "react";
import Image from "next/image";

const Companies = ({ title, companiesImages }) => {
  return (
    <section className="text-[#1340FF] ">
      <div className="flex items-center gap-10">
        <h3 className="text-2xl -tracking-[.1rem] font-bold">{title}</h3>
        <hr className="grow border-2 border-[#1340FF]" />
      </div>
      <div className="flex px-10 my-6 gap-6 justify-center flex-wrap">
        {companiesImages.map((elem, i) => {
          return (
            <>
              <Image
                src={elem.path}
                alt={elem.name}
                width={140}
                height={140}
                className="rounded-full"
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
