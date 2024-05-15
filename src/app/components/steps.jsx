export const Steps = ({ children }) => (
  <div className="flex flex-col md:flex-row gap-10 px-8 my-16">{children}</div>
);

export const Step = ({ borderColor, number, children }) => (
  <div className="text-center basis-1/4">
    <div
      className={`border border-${borderColor} px-5 inline-block rounded-full text-center`}
    >
      <p className="font-times italic text-2xl p-3">{number}</p>
    </div>
    <p className="mt-8 font-aileron tracking-[.1rem] font-light lg:text-3xl md:text-2xl text-3xl text-pretty">
      {children}
    </p>
  </div>
);
