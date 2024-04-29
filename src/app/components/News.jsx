import React from "react";

const News = () => {
  return (
    <div className="p-3 rounded-lg text-black bg-stone-100">
      <div className="bg-slate-500 w-full h-48 rounded-lg"></div>
      <div className="inline-flex gap-1 text-xs text-black">
        <p className=" font-semibold">Featured</p>
        <p>.</p>
        <p>12 Jan 2022</p>
      </div>
      <p className="truncate font-semibold my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam
        sapiente adipisci architecto excepturi labore cupiditate maiores
        molestias tenetur accusantium.
      </p>
      <p className="text-xs font-semibold">Continue reading...</p>
    </div>
  );
};

export default News;
