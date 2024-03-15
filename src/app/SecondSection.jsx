import React from "react";

const SecondSection = () => {
  return (
    <main className="bg-[#F4F4F4] py-10 px-8 text-[#8A5AFE]">
      <div className="flex ">
        <div className="flex xl:flex-row flex-col items-center gap-10 mx-auto ">
          <h3 className="lg:text-9xl text-7xl font-aileron font-bold flex-1 text-center">
            we&apos;re{" "}
            <span className="font-serif font-light tracking-[-.5rem] italic">
              different
            </span>
          </h3>
          <p className="lg:w-[30vw] w-auto text-xl font-aileron font-light text-center">
            Rapid access to quality content by our expansive community of over
            13,000 talented creators ready to bring your vision to life.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SecondSection;
