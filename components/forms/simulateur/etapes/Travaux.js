import React, { useState, useEffect } from "react";
import FormLanding from "../../../../layout/FormLanding";
import LittleCardWithImage from "../cards/LittleCardWithImage";
import { useDispatch } from "react-redux";

const Travaux = () => {
  const dispatch = useDispatch();

  const [cardSelected, setCardSelected] = useState([]);
  const [cardSelectedValue, setCardSelectedValue] = useState();

  const valueToTitleMapping = {
    1: "Isolation",
    2: "Menuiserie",
    3: "Vmc double flux",
    4: "Pompe à chaleur",
    5: "Chauffage/Pële",
    6: "Solaire chauffe eau",
  };

  const clickManager = (newValue) => {
    if (cardSelected.includes(newValue)) {
      // Si la valeur est déjà sélectionnée, la supprimer du tableau
      setCardSelected((prevState) =>
        prevState.filter((value) => value !== newValue)
      );
    } else {
      // Sinon, ajouter la valeur au tableau
      setCardSelected((prevState) => [...prevState, newValue]);
    }
  };

  useEffect(() => {
    // Transformer les valeurs de cardSelected en titres
    const selectedValues = cardSelected.map(
      (value) => valueToTitleMapping[value]
    );

    // Pas besoin de mettre à jour cardSelectedValue ici
    // setCardSelectedValue(selectedValues);

    dispatch({
      type: "UPDATE_USER_INFORMATIONS",
      payload: { travaux: selectedValues },
    });
  }, [cardSelected]);

  return (
    <FormLanding
      title=" Quel type de travaux vous souhaitez réaliser :*"
      description="Plusieurs choix possible"
    >
      <LittleCardWithImage
        src="/images/icons/isolation.png"
        alt="isolation"
        title="Isolation"
        onClick={() => clickManager(1)}
        selectedValue={cardSelected.includes(1)}
        value={1}
        type="multit"
      />
      <LittleCardWithImage
        src="/images/icons/menuiserie.png"
        alt="menuiserie"
        title="Menuiserie"
        onClick={() => clickManager(2)}
        selectedValue={cardSelected.includes(2)}
        value={2}
        type="multit"
      />
      <LittleCardWithImage
        src="/images/icons/vmc.png"
        alt="Vmc double flux"
        title="Vmc double flux"
        onClick={() => clickManager(3)}
        selectedValue={cardSelected.includes(3)}
        value={3}
        type="multit"
      />
      <LittleCardWithImage
        src="/images/icons/pompe.png"
        alt="pompe à chaleur"
        title="Pompe à chaleur"
        onClick={() => clickManager(4)}
        selectedValue={cardSelected.includes(4)}
        value={4}
        type="multit"
      />
      <LittleCardWithImage
        src="/images/icons/chauffage.png"
        alt="Chauffage Pële"
        title="Chauffage Pële"
        onClick={() => clickManager(5)}
        selectedValue={cardSelected.includes(5)}
        value={5}
        type="multit"
      />
      <LittleCardWithImage
        src="/images/icons/solaire.png"
        alt="Solaire chauffe eau"
        title="Solaire chauffe eau"
        onClick={() => clickManager(6)}
        selectedValue={cardSelected.includes(6)}
        value={6}
        type="multit"
      />
    </FormLanding>
  );
};

export default Travaux;
