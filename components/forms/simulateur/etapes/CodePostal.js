import React, { useState, useEffect } from "react";
import FormLanding from "../../../../layout/FormLanding";
import WhiteInput from "../../input/WhiteInput";

const CodePostal = () => {
  const [codePostal, setCodePostal] = useState(null);
  useEffect(() => {}, [codePostal]);
  return (
    <FormLanding
      title="Quel est votre code postal ?*"
      description="La prime peut varier en fonction du secteur dans lequel vous vous trouvez"
    >
      <WhiteInput
        type={"zipCode"}
        placeholder={"75000"}
        value={codePostal}
        setValue={setCodePostal}
      />
    </FormLanding>
  );
};

export default CodePostal;
