"use client";
import React, { useEffect, useState } from "react";
import countries from "../contants/countries.json";
import { Icon } from "@iconify/react";
import { useRef } from "react";

const MultiSelect = ({
  curData,
  label,
  selected,
  setSelectedItem,
  errors,
  touched,
  setFieldValue,
}) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(curData);
  const ref = useRef(null);

  const handleSelect = (name) => {
    if (selected.includes(name)) {
      const index = selected.indexOf(name);
      selected.splice(index, 1);
      setSelectedItem([...selected]);
      return;
    }
    setSelectedItem([...selected, name]);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleDeleteItem = (name) => {
    const index = selected.indexOf(name);
    selected.splice(index, 1);
    setSelectedItem([...selected]);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setFieldValue("industry", selected);
  }, [selected, setFieldValue]);

  return (
    <div className="flex flex-col gap-2">
      <p
        className="text-[0.875rem]"
        style={{ fontWeight: 500, lineHeight: "1.5rem" }}
      >
        {label}
      </p>
      <fieldset
        name={"industry"}
        className={`bg-slate-100 text-black relative rounded-full w-[100%] bg-transparent border-2 ${
          errors.industry && touched.industry && "border-red-500"
        }`}
      >
        {/* Button */}
        <div
          className="flex flex-row justify-between w-[100%] py-[0.45rem] px-4 cursor-pointer text-slate-100 text-sm "
          style={{
            alignItems: "center",
          }}
          onClick={() => setOpen(true)}
        >
          {selected.length > 0 ? (
            <div className="flex gap-1 flex-wrap items-center">
              {selected.map((elem, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-3 border-2 border-cyan-500 p-1 px-3 rounded-full text-xs items-center"
                >
                  <p>{elem}</p>
                  <Icon
                    className="z-50"
                    icon="streamline:delete-1-solid"
                    s
                    width={8}
                    onClick={() => {
                      handleDeleteItem(elem);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="">Select {label}</p>
          )}
          <Icon icon="solar:alt-arrow-down-bold" />
        </div>

        {/* Dropdown menu */}
        {open && (
          <div
            ref={ref}
            className="absolute left-0 bg-slate-50 my-1 rounded-md p-2 w-[100%] max-h-60 overflow-scroll"
          >
            <div className="flex flex-col gap-3">
              {data.length < 1 ? (
                <h1>No data.</h1>
              ) : (
                data.map((elem, i) => (
                  <div
                    key={i}
                    className={`hover:bg-slate-200 cursor-pointer p-2 rounded-md transition-all ease-in-out duration-200 flex flex-row justify-between`}
                    onClick={() => {
                      handleSelect(elem.name);
                    }}
                  >
                    <p>{elem.name}</p>
                    {selected.includes(elem.name) && <Icon icon="mdi:tick" />}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </fieldset>
      {errors.industry && touched.industry && (
        <p class="text-red-500 text-xs mx-2 my-1">{errors.industry}</p>
      )}
    </div>
  );
};

export default MultiSelect;
