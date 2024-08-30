import Image from "next/image";

const Companies = ({ title, companiesImages, rounded, imgStyle, type }) => {
  return (
    <section className="text-[#1340FF]">
      <div className="flex items-center gap-10 px-15">
        <h3 className="lg:text-3xl text-xl -tracking-[.1rem] font-bold">
          {title}
        </h3>
      </div>
      {type === "companies" && (
        <div className="py-5 relative overflow-hidden w-[90vw] mx-auto">
          <div
            className="flex animate-loop-scroll whitespace-nowrap hover:animation-paused"
            style={{ animationDuration: "30s" }}
          >
            {/* Duplicate logos to ensure seamless looping */}
            {companiesImages?.map((elem, i) => (
              <div key={`top-${i}`} className="w-24 h-24 flex items-center justify-center">
                <Image
                  src={elem.path}
                  alt={elem.name}
                  width={100}
                  height={100}
                  className={`${rounded} ${imgStyle} object-cover rounded-full`}
                />
              </div>
            ))}
            {companiesImages?.map((elem, i) => (
              <div key={`bottom-${i}`} className="w-24 h-24 flex items-center justify-center">
                <Image
                  src={elem.path}
                  alt={elem.name}
                  width={100}
                  height={100}
                  className={`${rounded} ${imgStyle} object-cover rounded-full`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {type === "optics" && (
        <div className="py-5 flex justify-around flex-wrap gap-4">
          {companiesImages?.map((elem, i) => (
            <div key={i} className="w-24 h-24 flex items-center justify-center">
              <Image
                src={elem.path}
                alt={elem.name}
                width={100}
                height={100}
                className={`${rounded} ${imgStyle} object-cover rounded-full cursor-pointer`}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Companies;
