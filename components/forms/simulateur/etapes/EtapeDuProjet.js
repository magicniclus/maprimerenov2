import React, { useState, useEffect } from "react";
import FormLanding from "../../../../layout/FormLanding";
import LittleCardWithImage from "../cards/LittleCardWithImage";
import { useDispatch } from "react-redux";

const EtapeDuProjet = () => {
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
        return "Je reflechis";
      case 2:
        return "Je recherche un artisan RGE";
      case 3:
        return "Je vais signer un devis";
      case 4:
        return "J'ai signé un devis";
      default:
        return "";
    }
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_USER_INFORMATIONS",
      payload: { etapeDuProjet: translateCardSelected() },
    });
  }, [cardSelected]);
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
        alt="Je vais signer unx devis"
        title="Je vais signer unx devis"
        onClick={() => clickManager(3)}
        selectedValue={cardSelected}
        value={3}
      />
      <LittleCardWithImage
        src="/images/icons/signature.png"
        alt="signature"
        title="J'ai signé un devis"
        onClick={() => clickManager(4)}
        selectedValue={cardSelected}
        value={4}
      />
    </FormLanding>
  );
};

export default EtapeDuProjet;
