import React from "react";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const getStep = useSelector((state) => state.step);

  return (
    <div className="w-full h-3 rounded-md bg-gray-200 relative">
      <div
        className={` bg-green absolute rounded-md h-[80%] top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out`}
        style={{ width: `calc(100% / 7 * ${getStep})` }}
      />
      <p
        className={`text-white text-[8px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-out font-bold ${
          getStep === 7 ? "opacity-100" : "opacity-0"
        }`}
      >
        Derniere étape !
      </p>
    </div>
  );
};

export default ProgressBar;
