import React from "react";
import Proptype from "prop-types";

const FormInput = ({ label, name, type, color, field, errors }) => {
  return (
    <div className="sm:col-span-3">
      <label htmlFor={name} className="block text-sm font-medium leading-6">
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={name}
          {...field}
          autoComplete="given-name"
          className={`block w-full rounded-full border-2 py-1.5 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
            errors && "border-red-500"
          }`}
        />
        {errors && <p class="text-red-500 text-xs mx-2 my-1">{errors}</p>}
        {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
    </div>
  );
};

export default FormInput;

FormInput.propTypes = {
  label: Proptype.string,
  name: Proptype.string,
  type: Proptype.string,
  color: Proptype.string,
  onChange: Proptype.func,
  placeholder: Proptype.string,
  errors: Proptype.string,
};
