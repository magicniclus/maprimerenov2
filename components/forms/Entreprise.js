import React from "react";
import ButtonWithBorder from "../button/ButtonWithBorder";
import ButtonGreen from "../button/ButtonGreen";
import Input from "./input/Input";
import CheckBox from "./checkbox/CheckBox";

const Entreprise = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
  };
  return (
    <section className="w-full max-w-[1250px] px-0 py-0 lg:px-20 lg:py-10 mx-auto flex justify-between items-center lg:flex-row flex-col bg-light">
      <div className="w-full lg:w-5/12 lg:py-0 py-10 px-6">
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
      <form
        className="w-full lg:w-6/12 bg-white lg:shadow-md py-10 px-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl text-dark font-semibold mx-auto">
          Devenir Partnaire
        </h2>
        <h3 className="text-xl text-dark font-semibold mt-10">
          Information de l’entreprise:
        </h3>
        <div className="w-full mt-7">
          <div className="flex justify-between">
            <Input label="Nom de l’entreprise*" />
            <Input label="Siren*" />
          </div>
          <div className="flex justify-between mt-5">
            <Input label="Type d'activité*" />
            <CheckBox label="Je suis une entreprise certifié RGE*" />
          </div>
        </div>
        <h3 className="text-xl text-dark font-semibold mt-10">
          Information de l’entreprise:
        </h3>
        <div className="w-full mt-7">
          <div className="flex justify-between">
            <Input label="Nom, prénom*" />
            <Input label="Email*" />
          </div>
          <div className="flex justify-between mt-5">
            <Input label="Téléphone*" />
            <Input label="Code postal*" />
          </div>
        </div>
        <div className="mt-7">
          <CheckBox />
        </div>
        <div className="mt-7 w-full flex justify-center">
          <ButtonGreen value="Envoyer" />
        </div>
      </form>
    </section>
  );
};

export default Entreprise;
