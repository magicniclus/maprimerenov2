import React from "react";

const Card = (props) => {
  return (
    <div
      className={`p-5 flex flex-col justify-between bg-primary rounded-md text-white w-[305px] lg:mt-0 shadow-md ${
        props.margin ? "mt-5" : ""
      }`}
    >
      <h3 className="opacity-70">{props.title}</h3>
      <h4 className="text-3xl font-semibold mt-3">{props.number}</h4>
      <p className=" mt-5">{props.text}</p>
    </div>
  );
};

export default Card;
