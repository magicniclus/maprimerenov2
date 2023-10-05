import React from "react";

const ButtonGreen = (props) => {
  return (
    <a
      href={props.href || "#"}
      className="cursor-pointer rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
    >
      {props.value || "Envoyer"}
    </a>
  );
};

export default ButtonGreen;
