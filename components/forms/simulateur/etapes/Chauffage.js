import React, { useState, useEffect } from "react";
import FormLanding from "../../../../layout/FormLanding";
import LittleCardWithImage from "../cards/LittleCardWithImage";
import { useDispatch } from "react-redux";

const Chauffage = () => {
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
        return "Electrique";
      case 2:
        return "Fioul";
      case 3:
        return "Gaz";
      case 4:
        return "Feu";
      case 5:
        return "Pompe à chaleur";
      case 6:
        return "Charbon";
      default:
        return "";
    }
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_USER_INFORMATIONS",
      payload: { typeDeChauffage: translateCardSelected() },
    });
  }, [cardSelected]);

  return (
    <FormLanding title="Quel est votre principale source de chauffage actuellement :*">
      <LittleCardWithImage
        src="/images/icons/electricite.png"
        alt="electicité"
        title="Electrique"
        onClick={() => clickManager(1)}
        selectedValue={cardSelected}
        value={1}
      />
      <LittleCardWithImage
        src="/images/icons/fioul.png"
        alt="fioul"
        title="Fioul"
        onClick={() => clickManager(2)}
        selectedValue={cardSelected}
        value={2}
      />
      <LittleCardWithImage
        src="/images/icons/gaz.png"
        alt="gaz"
        title="Gaz"
        onClick={() => clickManager(3)}
        selectedValue={cardSelected}
        value={3}
      />
      <LittleCardWithImage
        src="/images/icons/feu.png"
        alt="feu"
        title="Feu"
        onClick={() => clickManager(4)}
        selectedValue={cardSelected}
        value={4}
      />
      <LittleCardWithImage
        src="/images/icons/pompe.png"
        alt="Pompe à chaleur"
        title="Pompe à chaleur"
        onClick={() => clickManager(5)}
        selectedValue={cardSelected}
        value={5}
      />
      <LittleCardWithImage
        src="/images/icons/charbon.png"
        alt="charbon"
        title="Charbon"
        onClick={() => clickManager(6)}
        selectedValue={cardSelected}
        value={6}
      />
    </FormLanding>
  );
};

export default Chauffage;
