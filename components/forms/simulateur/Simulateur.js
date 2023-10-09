import React, { useState } from "react";
import TypeHabitation from "./etapes/TypeHabitation";
import AnneeDeConstruction from "./etapes/AnneeDeConstruction";
import Surface from "./etapes/Surface";
import Chauffage from "./etapes/Chauffage";
import Travaux from "./etapes/Travaux";
import EtapeDuProjet from "./etapes/EtapeDuProjet";
import CodePostal from "./etapes/CodePostal";

const Simulateur = () => {
  const [card, setCard] = useState(0);

  const updateCards = () => {
    switch (card) {
      case 0:
        return <TypeHabitation />;

      case 1:
        return <AnneeDeConstruction />;

      case 2:
        return <Surface />;

      case 3:
        return <Chauffage />;

      case 4:
        return <Travaux />;

      case 5:
        return <EtapeDuProjet />;

      case 6:
        return <CodePostal />;

      default:
        <TypeHabitation />;
        break;
    }
  };

  const buttonManager = () => {
    return (
      <div className="flex justify-between mt-10 flex-col">
        <button
          className="bg-green text-white rounded-md px-5 py-2 font-semibold"
          onClick={() => setCard((card) => card + 1)}
        >
          Suivant
        </button>
        <button
          className="text-dark/50 border border-dark/50 rounded-md px-5 py-2 font-semibold mt-3"
          onClick={() => setCard((card) => card - 1)}
        >
          Précédent
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-[700px] w-full bg-light rounded-md shadow-md px-6 md:px-10 py-5 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-dark font-semibold">
          Testez votre éligibilité
        </h2>
        <img
          src="/images/icons/Drapeau.png"
          alt="arrow"
          className="mt-5 w-full"
        />
      </div>
      {updateCards()}
      {buttonManager()}
    </div>
  );
};

export default Simulateur;
