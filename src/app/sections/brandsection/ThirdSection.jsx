import React from "react";

const ThirdSection = () => {
  return (
    <section className="py-8 bg-[#006D53] text-[#F4F4F4]">
      <h1 className="font-aileron font-light text-7xl sm:text-6xl md:text-7xl lg:text-[7rem] text-center mt-4 -tracking-[.2rem] md:-tracking-[.5rem]">
        creator{" "}
        <span className="font-serif italic -tracking-[.3rem]">marketing</span>,
        simplified
      </h1>
      <div className="flex flex-col md:flex-row gap-10 px-8 my-16">
        <div className="text-center basis-1/4">
          <div className="border border-slate-50 px-5 inline-block rounded-full text-center">
            <p className="font-serif italic text-md">01</p>
          </div>
          <p className="mt-8 font-aileron font-bold tracking-[.1rem]">
            Sign up and fill in a brief of your campaign objectives.
          </p>
        </div>
        <div className="text-center basis-1/4">
          <div className="border border-slate-50 px-5 inline-block rounded-full text-center">
            <p className="font-serif italic text-md">02</p>
          </div>
          <p className="mt-8 font-aileron font-bold tracking-[.1rem]">
            Creators are shortlisted and matched to your project at speed.
          </p>
        </div>
        <div className="text-center basis-1/4">
          <div className="border border-slate-50 px-5 inline-block rounded-full text-center">
            <p className="font-serif italic text-md">03</p>
          </div>
          <p className="mt-8 font-aileron font-bold tracking-[.1rem]">
            Our campaign experts guide the approval process and the content is
            posted.
          </p>
        </div>
        <div className="text-center basis-1/4">
          <div className="border border-slate-50 px-5 inline-block rounded-full text-center">
            <p className="font-serif italic text-md">04</p>
          </div>
          <p className="mt-8 font-aileron font-bold tracking-[.1rem]">
            Opt in for performance analytics and any next steps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
