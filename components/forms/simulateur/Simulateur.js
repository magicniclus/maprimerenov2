import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TypeHabitation from "./etapes/TypeHabitation";
import AnneeDeConstruction from "./etapes/AnneeDeConstruction";
import Surface from "./etapes/Surface";
import Chauffage from "./etapes/Chauffage";
import Travaux from "./etapes/Travaux";
import EtapeDuProjet from "./etapes/EtapeDuProjet";
import CodePostal from "./etapes/CodePostal";
import Inscription from "./etapes/Inscription";
import ProgressBar from "./ProgressBar";

const Simulateur = () => {
  const [card, setCard] = useState(0);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userInformation);

  useEffect(() => {
    dispatch({ type: "UPDATE_STEP", payload: card });
  }, [card]);

  const buttonDisabled = () => {
    switch (card) {
      case 0:
        return !userData.type;
      case 1:
        return !userData.ageDuBien;
      case 2:
        return !userData.surface;
      case 3:
        return !userData.typeDeChauffage;
      case 4:
        return (
          !userData.travaux ||
          userData.travaux.length === 0 ||
          (userData.travaux.length === 1 && userData.travaux[0] === "")
        );
      case 5:
        return !userData.etapeDuProjet;
      case 6:
        return !userData.codePostal;
      case 7:
        const requiredFields = [
          "name",
          "telephone",
          "email",
          "status",
          "checkboxValue",
        ];
        return !requiredFields.every((field) => !!userData[field]);
      default:
        return false;
    }
  };

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
      case 7:
        return <Inscription />;
      default:
        return <TypeHabitation />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-[700px] w-full bg-light rounded-md shadow-md px-6 md:px-10 py-5 flex flex-col items-center justify-between"
    >
      <div className="flex flex-col items-center">
        {card > 0 && <ProgressBar />}
        <h2 className="text-3xl text-dark font-semibold mt-3">
          Testez votre éligibilité
        </h2>
        <img
          src="/images/icons/Drapeau.png"
          alt="arrow"
          className="mt-5 w-full"
        />
      </div>
      {updateCards()}
      <div className="flex justify-between mt-10 flex-col">
        <button
          className={`text-white rounded-md px-5 py-2 font-semibold transition-all duration-300 ease-in-out ${
            buttonDisabled() ? "bg-green/50" : "bg-green"
          }`}
          onClick={() =>
            setCard((prevCard) => (prevCard < 7 ? prevCard + 1 : prevCard))
          }
          disabled={buttonDisabled()}
          type={card === 7 ? "submit" : "button"}
        >
          {card === 7 ? "Valider" : "Suivant"}
        </button>
        <button
          className={`text-dark/50 border border-dark/50 rounded-md px-5 py-2 font-semibold mt-3 ${
            card > 0 ? "opacity-1" : "opacity-0"
          }`}
          onClick={() => setCard((prevCard) => prevCard - 1)}
          disabled={card === 0}
        >
          Précédent
        </button>
      </div>
    </form>
  );
};

export default Simulateur;
