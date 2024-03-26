import React from 'react'

function CreatorSixth() {
  return (
    <section className="py-8 bg-[#F4F4F4] text-[#006D53]">
      <h1 className="font-aileron font-light text-7xl sm:text-6xl md:text-7xl lg:text-[7rem] text-center mt-4 -tracking-[.2rem] md:-tracking-[.5rem]">
        how it{" "}
        <span className="font-serif italic -tracking-[.3rem]">works</span>
      {" "}  for {" "}
        <span className="font-serif italic -tracking-[.3rem]">you </span>:
      </h1>
      <div className="flex flex-col md:flex-row gap-10 px-8 my-16">
        <div className="text-center basis-1/4">
          <div className="border border-[#006D53] px-5 inline-block rounded-full text-center ">
            <p className="font-serif italic text-2xl p-3">01</p>
          </div>
          <p className="mt-8 font-aileron  tracking-[.1rem] text-justify font-light text-3xl">
          Fill in our form to opt in as a creator. Show off past work to be considered.
          </p>
        </div>
        <div className="text-center basis-1/4">
          <div className="border border-[#006D53] px-5 inline-block rounded-full text-center ">
            <p className="font-serif italic text-2xl p-3">02</p>
          </div>
          <p className="mt-8 font-aileron  tracking-[.1rem] text-justify font-light text-3xl">
          When brands shortlist you, a Cult Creative team member will be in touch.
          </p>
        </div>
        <div className="text-center basis-1/4">
          <div className="border border-[#006D53] px-5 inline-block rounded-full text-center ">
            <p className="font-serif italic text-2xl p-3">03</p>
          </div>
          <p className="mt-8 font-aileron  tracking-[.1rem] text-justify font-light text-3xl">
          Campaign details, products and etc are automated. We sort that out for you.
          </p>
        </div>
        <div className="text-center basis-1/4">
          <div className="border border-[#006D53] px-5 inline-block rounded-full text-center ">
            <p className="font-serif italic text-2xl p-3 ">04</p>
          </div>
          <p className="mt-8 font-aileron  tracking-[.1rem] text-justify font-light text-3xl">
          Just focus on being creative, film your content, then get paid within 30 days.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CreatorSixth