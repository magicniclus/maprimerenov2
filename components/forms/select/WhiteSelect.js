import React from "react";

const WhiteSelect = ({
  options,
  value,
  setValue,
  placeholder = "Sélectionnez une option:*",
}) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue !== placeholder) {
      setValue(selectedValue);
    } else {
      setValue(null);
    }
  };

  return (
    <select
      value={value || ""}
      onChange={handleChange}
      className="bg-white text-dark p-2 rounded outline-none placeholder-dark/50 min-w-[400px]"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default WhiteSelect;
