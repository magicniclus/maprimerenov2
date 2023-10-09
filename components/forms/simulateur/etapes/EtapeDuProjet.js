import React, { useState } from "react";
import FormLanding from "../../../../layout/FormLanding";
import LittleCardWithImage from "../cards/LittleCardWithImage";

const EtapeDuProjet = () => {
  const [cardSelected, setCardSelected] = useState(null);

  const clickManager = (newValue) => {
    if (cardSelected === newValue) {
      setCardSelected(null);
    } else {
      setCardSelected(newValue);
    }
  };
  return (
    <FormLanding title="Vous en êtes ou dans votre projet ? *">
      <LittleCardWithImage
        src="/images/icons/question.png"
        alt="Je réfléchis"
        title="Je réfléchis"
        onClick={() => clickManager(1)}
        selectedValue={cardSelected}
        value={1}
      />
      <LittleCardWithImage
        src="/images/icons/artisan.png"
        alt="Je recherche un artisan RGE"
        title="Je recherche un artisan RGE"
        onClick={() => clickManager(2)}
        selectedValue={cardSelected}
        value={2}
      />
      <LittleCardWithImage
        src="/images/icons/devis.png"
        alt="Je vais signer mon devis"
        title="Je vais signer mon devis"
        onClick={() => clickManager(3)}
        selectedValue={cardSelected}
        value={3}
      />
      <LittleCardWithImage
        src="/images/icons/signature.png"
        alt="signature"
        title="signature"
        onClick={() => clickManager(4)}
        selectedValue={cardSelected}
        value={4}
      />
    </FormLanding>
  );
};

export default EtapeDuProjet;
