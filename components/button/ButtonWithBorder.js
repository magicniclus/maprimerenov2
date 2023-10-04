import React from "react";

const ButtonWithBorder = (props) => {
  const link = props.link;
  const value = props.value;
  return (
    <a
      className="text-primary text-sm border border-primary rounded-md px-4 py-2 ml-5 text-center max-w-[170px] hover:bg-primary hover:bg-opacity-10 transition-all duration-300 ease-in-out"
      href={link || "#"}
    >
      {value || "VOUS ÊTES UN PROFESSIONNEL ?"}
    </a>
  );
};

export default ButtonWithBorder;
