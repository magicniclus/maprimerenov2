import React from "react";

const Input = (props) => {
  return (
    <div className="relative w-[47%]">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-dark"
      >
        {props.label || "Nom"}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full rounded-md border-0 py-1.5 px-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
        // placeholder={props.placeholder || "Jane Smith"}
      />
    </div>
  );
};

export default Input;
