import React from "react";
import Basic from "../../layout/Basic";

const index = () => {
  return (
    <Basic>
      <section className="min-h-[calc(100vh-104px)] max-w-[1250px] mx-auto px-5 lg:pb-10 lg:px-20 flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-dark text-center">
            Tous nos articles
          </h1>
          <h2 className="text-dark/80 text-center mt-7 lg:w-1/2">
            Comment bénéficier de MaPrimeRenov' ? Quels sont les travaux
            éligibles ? Quelles sont les conditions d'obtention ? Retrouvez
            toutes les informations sur Maprimerenov’.
          </h2>
        </div>
      </section>
    </Basic>
  );
};

export default index;
