import React from "react";

const CheckBox = (props) => {
  return (
    <div className="relative flex items-start w-[47%]">
      <div className="flex h-6 items-center">
        <input
          id="offers"
          aria-describedby="offers-description"
          name="offers"
          type="checkbox"
          className="h-4 w-4 rounded border-dark text-primary focus:ring-primary"
        />
      </div>
      <div className="ml-3 text-xs text-dark/80 flex items-center">
        {props.label || "J'accepte de recevoir des offres promotionnelles"}
      </div>
    </div>
  );
};

export default CheckBox;
