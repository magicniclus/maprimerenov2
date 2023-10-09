import React, { useState } from "react";
import FormLanding from "../../../../layout/FormLanding";
import CardWithImage from "../cards/CardWithImage";

const AnneeDeConstruction = () => {
  const [cardSelected, setCardSelected] = useState(null);
  const clickManager = (newValue) => {
    if (cardSelected === newValue) {
      setCardSelected(null);
    } else {
      setCardSelected(newValue);
    }
  };
  return (
    <FormLanding
      title="Année de construction de votre logement :*"
      description="
Cela nous permet de determiner votre éligibilité aux différentes aides"
    >
      <CardWithImage
        src="/images/icons/calendrier.png"
        alt="maison"
        title="Maison"
        onClick={() => clickManager(1)}
        selectedValue={cardSelected}
        value={1}
      />
      <CardWithImage
        src="/images/icons/calendrier.png"
        alt="maison"
        title="Maison"
        onClick={() => clickManager(2)}
        selectedValue={cardSelected}
        value={2}
      />
      <CardWithImage
        src="/images/icons/calendrier.png"
        alt="maison"
        title="Maison"
        onClick={() => clickManager(3)}
        selectedValue={cardSelected}
        value={3}
      />
    </FormLanding>
  );
};

export default AnneeDeConstruction;
