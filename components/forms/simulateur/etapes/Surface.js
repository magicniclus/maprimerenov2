import React, { useState, useEffect } from "react";
import FormLanding from "../../../../layout/FormLanding";
import WhiteInput from "../../input/WhiteInput";
import { useDispatch } from "react-redux";

const Surface = () => {
  const dispatch = useDispatch();

  const [surface, setSurface] = useState(null);

  useEffect(() => {
    dispatch({
      type: "UPDATE_USER_INFORMATIONS",
      payload: { surface },
    });
  }, [surface]);

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
