import React from "react";

const Input = (props) => {
  const { label = "Nom", id, name, value, onChange } = props;

  return (
    <div className="relative w-[47%]">
      <label
        htmlFor={id}
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-dark"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        className="block w-full rounded-md border-0 py-1.5 px-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
