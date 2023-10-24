import React from "react";
import Pertner from "../../../../layout/Pertner";
import CreatePartner from "../../../../components/partner/CreatePartner";

const index = () => {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h1 className="text-lg font-semibold leading-6 text-gray-900 mb-10">
          Ajout d'un partenaire
        </h1>
        <CreatePartner />
      </div>
    </main>
  );
};

export default index;
