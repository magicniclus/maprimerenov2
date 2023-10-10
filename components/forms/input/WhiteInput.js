import React from "react";

const WhiteInput = ({ type, placeholder, value, setValue }) => {
  //Regex
  const zipCodeRegex = /^[0-9]{5}$/;

  //Regex test
  const handleZipCodeChange = (e) => {
    const inputValue = e.target.value;

    handleChange(e);
  };

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
      case "zipCode":
        return "text";
      default:
        return "text";
    }
  };

  return (
    <input
      type={getInputType(type)}
      value={value !== null ? value : ""}
      onChange={type === "zipCode" ? handleZipCodeChange : handleChange}
      placeholder={placeholder || ""}
      onWheel={(e) => e.preventDefault()}
      className="bg-white text-dark p-2 rounded outline-none placeholder-dark/50 xs:max-w-[400px] w-full"
    />
  );
};

export default WhiteInput;
