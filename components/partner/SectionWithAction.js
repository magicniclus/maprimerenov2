import React from "react";
import ButtonGreen from "../button/ButtonGreen";

const SectionWithAction = () => {
  const openModal = (e) => {
    e.preventDefault();
    console.log("open modal");
  };
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Ajouter une entreprise
      </h3>
      <div className="mt-3 flex sm:ml-4 sm:mt-0">
        <a
          type="button"
          href="entreprise/create-partner"
          className="ml-3 inline-flex items-center rounded-md bg-green px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
        >
          Ajouter
        </a>
      </div>
    </div>
  );
};

export default SectionWithAction;
