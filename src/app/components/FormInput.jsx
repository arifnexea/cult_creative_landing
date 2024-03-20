import React from "react";

const FormInput = ({ label, name, type, color }) => {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="first-name"
        className="block text-sm font-medium leading-6"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={name}
          autoComplete="given-name"
          className={`block w-full rounded-full border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[${color}]`}
        />
      </div>
    </div>
  );
};

export default FormInput;
