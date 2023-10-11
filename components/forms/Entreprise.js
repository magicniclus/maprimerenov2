import React, { useState } from "react";
import ButtonWithBorder from "../button/ButtonWithBorder";
import ButtonGreen from "../button/ButtonGreen";
import Input from "./input/Input";
import CheckBox from "./checkbox/CheckBox";
import { updateEntrepriseData } from "../../firebase/dataManager";
import { useRouter } from "next/router";
import Loader from "../loader/Loader";
import { set } from "firebase/database";
import { updateDate } from "../../utils/getDate";

const Entreprise = () => {
  const router = useRouter();

  const [showLoader, setShowLoader] = useState(false);

  // State pour chaque champ
  const [entrepriseName, setEntrepriseName] = useState("");
  const [siren, setSiren] = useState("");
  const [activityType, setActivityType] = useState("");
  const [isRGECertified, setIsRGECertified] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [RGPD, setRGPD] = useState(false);

  // Validations
  const isEntrepriseNameValid = entrepriseName.length >= 2;
  const isSirenValid = /^[0-9]{9}$/.test(siren);
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const isPhoneValid = /^[0-9]{10}$/.test(phone); // Vérification basique d'un numéro de téléphone à 10 chiffres
  const isPostalCodeValid = /^[0-9]{5}$/.test(postalCode); // Vérification basique d'un code postal à 5 chiffres en France

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowLoader(true);

    if (
      isEntrepriseNameValid &&
      isSirenValid &&
      isEmailValid &&
      isPhoneValid &&
      isPostalCodeValid &&
      isRGECertified &&
      RGPD
    ) {
      const data = {
        entrepriseName,
        siren,
        activityType,
        isRGECertified,
        fullName,
        email,
        phone,
        postalCode,
        RGPD,
        date: updateDate(),
      };
      console.log(data);
      updateEntrepriseData(data);
      router.push(`entreprise/merci`);
      setShowLoader(false);
    } else {
      console.log("Validation échouée");
      setShowLoader(false);
    }
  };

  const handleDisbaled = () => {
    if (
      isEntrepriseNameValid &&
      isSirenValid &&
      isEmailValid &&
      isPhoneValid &&
      isPostalCodeValid &&
      isRGECertified &&
      RGPD
    ) {
      return false;
    } else return true;
  };

  return (
    <section className="w-full max-w-[1250px] px-0 py-0 lg:px-20 lg:py-10 mx-auto flex justify-between items-center lg:flex-row flex-col bg-light">
      {showLoader && <Loader />}
      <div className="w-full lg:w-5/12 lg:py-0 py-10 px-6">
        <h2 className="text-3xl text-dark font-semibold">
          Comment devenir partenaire MaPrimeRenov-Info.org ?
        </h2>
        <p className="mt-5 text-dark">
          Vous êtes une entreprise certifié RGE ? vous cherchez à développer
          durablement votre activité ? Vous souhaitez obtenir de nouveaux
          clients ? Nous sommes là pour vous.
        </p>
        <ul className="text-dark mt-10">
          <li className="">1 - Vous envoyez votre demande</li>
          <li className="mt-5">
            2 - Vous nous transmettez les documents demandés
          </li>
          <li className="mt-5">3 - Nous validons votre projet</li>
          <li className="mt-5">4 - Nous signons notre partenariat</li>
          <li className="mt-5">5 - Vous recevez vos demandes</li>
        </ul>
        <div className="mt-10">
          <h2 className="text-xl text-dark font-semibold">
            Vous êtes un particulier ?
          </h2>
          <div className="mt-5">
            <ButtonWithBorder value="Tester mon élibilité" link="/simulateur" />
          </div>
        </div>
      </div>
      <form
        className="w-full lg:w-6/12 bg-white lg:shadow-md py-10 lg:px-10 px-7"
        onSubmit={handleSubmit}
        id="entrepriseForm"
      >
        <h2 className="text-3xl text-dark font-semibold mx-auto">
          Devenir Partnaire
        </h2>
        <h3 className="text-xl text-dark font-semibold mt-10">
          Information de l’entreprise:
        </h3>
        <div className="w-full mt-7">
          <div className="flex justify-between">
            <Input
              label="Nom de l’entreprise*"
              id="entrepriseName"
              name="entrepriseName"
              value={entrepriseName}
              onChange={(e) => setEntrepriseName(e.target.value)}
              style={!isEntrepriseNameValid ? { border: "1px solid red" } : {}}
            />
            <Input
              label="Siren*"
              id="siren"
              name="siren"
              value={siren}
              onChange={(e) => setSiren(e.target.value)}
              style={!isSirenValid ? { border: "1px solid red" } : {}}
            />
          </div>
          <div className="flex justify-between mt-5">
            <select
              label="Type d'activité*"
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
              className="w-[47%] border ring-gray-300 placeholder:text-gray-400 rounded-md focus:ring-dark"
            >
              <option value="" disabled>
                Selectionnez
              </option>
              <option value="isolation">Isolation</option>
              <option value="ite">
                ITE (Isolation thermique par l&apos; exterieur)
              </option>
              <option value="Iti">
                ITI (Isolation thermique pas l&apos; interieur)
              </option>
              <option value="Isolation des combles perdus">
                Isolation des combles perdus
              </option>
              <option value="isolation sous rampant">
                Isolation sous rampant
              </option>
              <option value="Isolation plancher">Isolation plancher</option>
              <option value="isolation terrasse">
                Isolation des toitures terrasses
              </option>
              <option value="Menuiserie">Menuiserie</option>
              <option value="Fenêtre ou porte fenêtre">
                Fenêtre ou porte fenêtre
              </option>
              <option value="Chauffage biomasse">Chauffage Biomasse</option>
              <option value="Chauffage Gaz THPE">Chauffage Gaz THPE</option>
              <option value="Chauffage PAC Hybride">
                Chauffage PAC Hybride
              </option>
              <option value="Chauffage PAC air/eau ou eau/eau">
                Chauffage PAC air/eau ou eau/eau
              </option>
              <option value="Chauffage Électrique">Chauffage Électrique</option>
              <option value="Chauffage Solaire">Chauffage Solaire</option>
              <option value="Chaudière gaz TPHE">Chaudière gaz TPHE</option>
              <option value="VMC">VMC</option>
              <option value="Eclairage">Eclairage</option>
              <option value="Pompe à chaleur hybride">
                Pompe à chaleur hybride
              </option>
              <option value="Pompe à chaleau air/eau ou eau/eau">
                Pompe à chaleur air/eau ou eau/eau
              </option>
              <option value="Calorifuge">Calorifuge</option>
              <option value="Poêle à bois">Poêle à bois</option>
              <option value="Panneaux photovoltaïques">
                Panneaux photovoltaïques
              </option>
              <option value="Chauffage Biomasse Poêle à bois">
                Chauffage Biomasse Poêle à bois
              </option>
            </select>
            <CheckBox
              label="Je suis une entreprise certifié RGE*"
              setValue={setIsRGECertified}
              onChange={(e) => setIsRGECertified(e.target.checked)}
            />
          </div>
        </div>
        <h3 className="text-xl text-dark font-semibold mt-10">
          Information de l’entreprise:
        </h3>
        <div className="w-full mt-7">
          <div className="flex justify-between">
            <Input
              label="Nom, prénom*"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={fullName.length < 2 ? { border: "1px solid red" } : {}}
            />
            <Input
              label="Email*"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={!isEmailValid ? { border: "1px solid red" } : {}}
            />
          </div>
          <div className="flex justify-between mt-5">
            <Input
              label="Téléphone*"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={!isPhoneValid ? { border: "1px solid red" } : {}}
            />
            <Input
              label="Code postal*"
              id="postalCode"
              name="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              style={!isPostalCodeValid ? { border: "1px solid red" } : {}}
            />
          </div>
        </div>
        <div className="mt-7">
          <CheckBox setValue={setRGPD} />
        </div>
        <div className="mt-7 w-full flex justify-center" onClick={handleSubmit}>
          <ButtonGreen value="Envoyer" disabled={handleDisbaled()} />
        </div>
      </form>
    </section>
  );
};

export default Entreprise;
