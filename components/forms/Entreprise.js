import React from "react";
import ButtonWithBorder from "../button/ButtonWithBorder";

const Entreprise = () => {
  return (
    <section className="w-full max-w-[1250px] px-0 py-0 lg:px-20 lg:py-10 mx-auto flex justify-between items-stretch lg:flex-row flex-col bg-light">
      <div className="w-5/12">
        <h2 className="text-3xl text-dark font-semibold">
          Comment devenir partenaire MaPrimeRenov-Info.org ?
        </h2>
        <p className="mt-5 text-dark">
          Vous êtes une entreprise certifié RGE ? vous cherchez à développer
          durablement votre activité ? Vous souhaitez obtenir de nouveaux
          clients ? Nous sommes là pour vous.
        </p>
        <ul className="text-dark mt-10">
          <li className="">1 - Vous envoyez votre demande</li>
          <li className="mt-5">
            2 - Vous nous transmettez les documents demandés
          </li>
          <li className="mt-5">3 - Nous validons votre projet</li>
          <li className="mt-5">4 - Nous signons notre partenariat</li>
          <li className="mt-5">5 - Vous recevez vos demandes</li>
        </ul>
        <div className="mt-10">
          <h2 className="text-xl text-dark font-semibold">
            Vous êtes un particulier ?
          </h2>
          <div className="mt-5">
            <ButtonWithBorder value="Tester mon élibilité" link="/estimaiton" />
          </div>
        </div>
      </div>
      <form className="w-6/12 bg-white shadow-md py-10 px-5"></form>
    </section>
  );
};

export default Entreprise;
