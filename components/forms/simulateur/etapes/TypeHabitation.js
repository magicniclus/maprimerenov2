import React, { use, useEffect, useState } from "react";
import FormLanding from "../../../../layout/FormLanding";
import CardWithImage from "../cards/CardWithImage";
import { useDispatch } from "react-redux";

const TypeHabitation = () => {
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
        return "Maison";
      case 2:
        return "Immeuble";
      default:
        return "";
    }
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_USER_INFORMATIONS",
      payload: { type: translateCardSelected() },
    });
  }, [cardSelected]);

  return (
    <FormLanding title="Votre projet concerne:*">
      <CardWithImage
        src="/images/icons/maison.png"
        alt="maison"
        title="Maison"
        onClick={() => clickManager(1)}
        selectedValue={cardSelected}
        value={1}
      />
      <CardWithImage
        src="/images/icons/immeuble.png"
        alt="immeuble"
        title="Immeuble"
        onClick={() => clickManager(2)}
        selectedValue={cardSelected}
        value={2}
      />
    </FormLanding>
  );
};

export default TypeHabitation;
