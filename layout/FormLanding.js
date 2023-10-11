import React from "react";

const FormLanding = (props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="mt-8 mb-2 text-dark text-md font-bold ">{props.title}</h3>
      {props.description && (
        <p className="text-center text-xs text-dark/50">{props.description}</p>
      )}
      <div className="flex min-w-full justify-around flex-wrap mt-5">
        {props.children}
      </div>
    </div>
  );
};

export default FormLanding;
