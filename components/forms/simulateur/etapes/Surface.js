import React, { useState } from "react";
import FormLanding from "../../../../layout/FormLanding";
import WhiteInput from "../../input/WhiteInput";

const Surface = () => {
  const [surface, setSurface] = useState(null);
  return (
    <FormLanding
      title="Surface habitable de votre logement :*"
      description="
En m2"
    >
      <WhiteInput
        type="number"
        placeholder="100"
        value={surface}
        setValue={setSurface}
      />
    </FormLanding>
  );
};

export default Surface;
