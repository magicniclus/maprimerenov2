import React, { useState, useEffect } from "react";
import FormLanding from "../../../../layout/FormLanding";
import CardWithImage from "../cards/CardWithImage";
import { useDispatch } from "react-redux";

const AnneeDeConstruction = () => {
  const dispatch = useDispatch();

  const [cardSelected, setCardSelected] = useState(null);
  const clickManager = (newValue) => {
    if (cardSelected === newValue) {
      setCardSelected(null);
    } else {
      setCardSelected(newValue);
    }
  };

  const translateCardSelected = () => {
    switch (cardSelected) {
      case 1:
        return "Moins de deux ans";
      case 2:
        return "Entre deux et 10 ans";
      case 3:
        return "Plus de 10 ans";
      default:
        return "";
    }
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_USER_INFORMATIONS",
      payload: { ageDuBien: translateCardSelected() },
    });
  }, [cardSelected]);

  return (
    <FormLanding
      title="Année de construction de votre logement :*"
      description="
Cela nous permet de determiner votre éligibilité aux différentes aides"
    >
      <CardWithImage
        src="/images/icons/calendrier.png"
        alt="Moins de deux ans"
        title="Moins de deux ans"
        onClick={() => clickManager(1)}
        selectedValue={cardSelected}
        value={1}
      />
      <CardWithImage
        src="/images/icons/calendrier.png"
        alt="Entre deux et 10 ans"
        title="Entre deux et 10 ans"
        onClick={() => clickManager(2)}
        selectedValue={cardSelected}
        value={2}
      />
      <CardWithImage
        src="/images/icons/calendrier.png"
        alt="Plus de 10 ans"
        title="Plus de 10 ans"
        onClick={() => clickManager(3)}
        selectedValue={cardSelected}
        value={3}
      />
    </FormLanding>
  );
};

export default AnneeDeConstruction;
