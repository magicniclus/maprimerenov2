import React from "react";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const getStep = useSelector((state) => state.step);

  return (
    <div className="w-full h-2 rounded-md bg-gray-200 relative">
      <div
        className={` bg-green absolute rounded-md h-[80%] top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out`}
        style={{ width: `calc(100% / 7 * ${getStep})` }}
      />
    </div>
  );
};

export default ProgressBar;
