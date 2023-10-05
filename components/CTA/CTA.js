import React from "react";

const CTA = () => {
  return (
    <div className="bg-light w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-8 mx-auto">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Connaitre votre élibilité à
            <br />
            Maprimerenov'
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-dark">
            Nos simulateur estime votre éligibilité aux aides de l’état en 2
            minutes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Estimer
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-dark">
              Vous êtes un profetionnel <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
