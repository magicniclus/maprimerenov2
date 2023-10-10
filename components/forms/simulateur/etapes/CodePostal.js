import React, { useState, useEffect } from "react";
import FormLanding from "../../../../layout/FormLanding";
import WhiteInput from "../../input/WhiteInput";
import { useDispatch } from "react-redux";

const CodePostal = () => {
  const dispatch = useDispatch();
  const [codePostal, setCodePostal] = useState(null);

  // Fonction de validation du code postal français
  const isValidFrenchZipCode = (zip) => {
    const regex = /^[0-9]{5}$/;
    return regex.test(zip);
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_USER_INFORMATIONS",
      payload: { codePostal },
    });
  }, []);

  useEffect(() => {
    if (isValidFrenchZipCode(codePostal)) {
      dispatch({
        type: "UPDATE_USER_INFORMATIONS",
        payload: { codePostal },
      });
    } else if (codePostal) {
      // Si vous voulez ajouter une logique supplémentaire pour gérer les codes postaux non valides
      console.warn("Invalid French postal code entered!");
      dispatch({
        type: "UPDATE_USER_INFORMATIONS",
        payload: { codePostal: null },
      });
    }
  }, [codePostal]);

  return (
    <FormLanding
      title="Quel est votre code postal ?*"
      description="La prime peut varier en fonction du secteur dans lequel vous vous trouvez"
    >
      <WhiteInput
        type={"text"} // Modifié pour un type text pour éviter des problèmes avec des navigateurs ne reconnaissant pas "zipCode"
        placeholder={"75000"}
        value={codePostal}
        setValue={setCodePostal}
      />
    </FormLanding>
  );
};

export default CodePostal;
