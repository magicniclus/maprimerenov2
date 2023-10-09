import React, { useState } from "react";
import FormLanding from "../../../../layout/FormLanding";
import WhiteInput from "../../input/WhiteInput";
import WhiteSelect from "../../select/WhiteSelect";
import CheckBox from "../../checkbox/CheckBox";

const Inscription = () => {
  const options = ["Propriétaire", "Bailleur", "Locataire"];
  const [selectValue, setSelectValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [telephoneValue, setTelephoneValue] = useState(null);
  const [nameValue, setNameValue] = useState(null);
  return (
    <FormLanding
      title="Comment vous appelez-vous ?*"
      description="Vous acceptez d'être rappelé gratuitement par un de nos expert afin de faire avancer votre dossier"
    >
      <div className="flex flex-col mt-2">
        <label className="mb-1" for="fname">
          NOM, Prénom *
        </label>
        <WhiteInput type="text" value={nameValue} setValue={setNameValue} />
      </div>
      <div className="flex flex-col mt-2">
        <label className="mb-1" for="phone">
          Téléphone*
        </label>
        <WhiteInput
          type="phone"
          value={telephoneValue}
          setValue={setTelephoneValue}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label className="mb-1" for="email">
          Email *
        </label>
        <WhiteInput type="email" value={emailValue} setValue={setEmailValue} />
      </div>
      <div className="flex flex-col mt-2">
        <label className="mb-1" for="fname">
          NOM, Prénom *
        </label>
        <WhiteSelect
          options={options}
          value={selectValue}
          setValue={setSelectValue}
        />
      </div>
      <div className="mt-3 max-w-[400px]">
        <CheckBox label="J'accepte les conditions de traitement des données personnelles conformément au RGPD." />
      </div>
    </FormLanding>
  );
};

export default Inscription;
