import React from "react";

const HeaderLanding = () => {
  return (
    <section className="bg-primary lg:bg-bg-landing bg-no-repeat bg-cover bg-center h-auto w-full min-h-[400px] bg-opacity-100 lg:bg-opacity-0  max-w-[1250px] mx-auto px-5 lg:pb-10 lg:px-20 flex justify-center flex-col">
      <h1 className="text-white mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
        Testez votre éligibilité aux aides 2023 encadré par l’état:
        MaPrimeRenov’!
      </h1>
      <h2 className="text-white my-10 text-2xl">
        80% de vos travaux d’économie d’énergie pris en charge.
      </h2>
    </section>
  );
};

export default HeaderLanding;
