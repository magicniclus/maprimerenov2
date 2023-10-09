import React, { useState } from "react";
import FormLanding from "../../../../layout/FormLanding";
import LittleCardWithImage from "../cards/LittleCardWithImage";

const Chauffage = () => {
  const [cardSelected, setCardSelected] = useState(null);
  const clickManager = (newValue) => {
    if (cardSelected === newValue) {
      setCardSelected(null);
    } else {
      setCardSelected(newValue);
    }
  };
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
        src="/images/icons/chauffage.png"
        alt="chauffage"
        title="Chauffage"
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
