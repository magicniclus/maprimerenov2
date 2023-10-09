import React from "react";

const WhiteInput = ({ type, placeholder, value, setValue }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue !== "") {
      setValue(inputValue);
    } else {
      setValue(null);
    }
  };

  const getInputType = (inputType) => {
    switch (inputType) {
      case "number":
        return "number";
      case "address":
        return "text";
      case "email":
        return "email";
      case "password":
        return "password";
      case "tel":
        return "tel";
      case "date":
        return "date";
      default:
        return "text";
    }
  };

  return (
    <input
      type={getInputType(type)}
      value={value !== null ? value : ""}
      onChange={handleChange}
      placeholder={placeholder || ""}
      onWheel={(e) => e.preventDefault()}
      className="bg-white text-dark p-2 rounded outline-none placeholder-dark/50 min-w-[400px]"
    />
  );
};

export default WhiteInput;
