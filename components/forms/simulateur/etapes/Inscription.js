import React, { useState, useEffect } from "react";
import FormLanding from "../../../../layout/FormLanding";
import WhiteInput from "../../input/WhiteInput";
import WhiteSelect from "../../select/WhiteSelect";
import CheckBox from "../../checkbox/CheckBox";
import { useDispatch } from "react-redux";

const Inscription = () => {
  const dispatch = useDispatch();
  const options = ["Propriétaire", "Bailleur", "Locataire"];
  const [selectValue, setSelectValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [telephoneValue, setTelephoneValue] = useState(null);
  const [nameValue, setNameValue] = useState(null);
  const [checkboxValue, setCheckboxValue] = useState(null);

  // Fonction de validation du nom et prénom
  const isValidName = (name) => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/; // Pas de chiffres, au moins 2 caractères
    return regex.test(name);
  };

  const isValidFrenchPhoneNumber = (phone) => {
    if (!phone) return false; // Si phone est null, undefined ou une chaîne vide, retournez false directement

    const regex = /^(\+33|0)[1-9](\d{2}){4}$/;
    const countZero = (phone.match(/0/g) || []).length;
    return regex.test(phone) && countZero <= 5;
  };

  // Fonction de validation de l'e-mail
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const updateReduxStore = () => {
    dispatch({
      type: "UPDATE_USER_INFORMATIONS",
      payload: {
        name: isValidName(nameValue) ? nameValue : null,
        telephone: isValidFrenchPhoneNumber(telephoneValue)
          ? telephoneValue
          : null,
        email: isValidEmail(emailValue) ? emailValue : null,
        status: selectValue || null, // if selectValue is empty or undefined, set it to null
        checkboxValue: checkboxValue || null,
      },
    });
  };

  useEffect(() => {
    updateReduxStore();
  }, [nameValue, telephoneValue, emailValue, selectValue, checkboxValue]);

  return (
    <FormLanding
      title="Comment vous appelez-vous ?*"
      description="Vous acceptez d'être rappelé gratuitement par un de nos expert afin de faire avancer votre dossier"
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
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
          <WhiteInput
            type="email"
            value={emailValue}
            setValue={setEmailValue}
          />
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
        <div className="mt-3 max-w-[450px]">
          <CheckBox
            label="J'accepte les conditions de traitement des données personnelles conformément au RGPD."
            setValue={setCheckboxValue}
          />
        </div>
      </div>
    </FormLanding>
  );
};

export default Inscription;
