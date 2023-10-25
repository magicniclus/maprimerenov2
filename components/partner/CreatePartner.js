import React, { useState, useEffect } from "react";
import ButtonGreen from "../../components/button/ButtonGreen";
import ButtonWithBorder from "../../components/button/ButtonWithBorder";
import { getFirstTwoNumbers } from "../../utils/getFirstTwoNumbers";
import { addCompany } from "../../firebase/partnerManager";
import { useRouter } from "next/router";

const CreatePartner = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [prestation, setPrestation] = useState([]);

  const [disabled, setDisabled] = useState(true);

  const handleCheckboxChange = (e) => {
    const { checked, name } = e.target;

    if (checked) {
      // Si la checkbox est cochée, ajoutez la valeur à `prestation`
      setPrestation((prev) => [...prev, name]);
    } else {
      // Si la checkbox est décochée, retirez la valeur de `prestation`
      setPrestation((prev) => prev.filter((p) => p !== name));
    }
  };

  useEffect(() => {
    if (name && email && phone && zipCode && prestation.length > 0) {
      setDisabled(false);
    } else setDisabled(true);
  }, [name, email, phone, zipCode, prestation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newZip = getFirstTwoNumbers(zipCode);
    const company = {
      name,
      email,
      phone,
      newZip,
      prestation,
    };
    try {
      await addCompany(newZip, company);
      router.push("/mon-espace/entreprise");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-[300px]">
        {" "}
        <label
          htmlFor="Name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Nom
        </label>
        <div className="mt-2">
          <input
            type="name"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Saisir le nom de l'entreprise"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="max-w-[300px] mt-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="exemple@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="max-w-[300px] mt-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Téléphone
          </label>
          <div className="mt-2">
            <input
              type="phone"
              name="phone"
              id="phone"
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0620252623"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="max-w-[300px] mt-5">
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Code postal
          </label>
          <div className="mt-2">
            <input
              type="zipCode"
              name="zipCode"
              id="zipCode"
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Code postal"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
        <fieldset className="mt-5">
          <legend className="sr-only">Préstations</legend>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium leading-6 text-gray-900 mb-3"
          >
            Type de préstation
          </label>
          <div className="space-y-2">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="isolation"
                  aria-describedby="isolation"
                  name="isolation"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  onChange={handleCheckboxChange}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Isolation
                </label>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="menuiserie"
                  aria-describedby="menuiserie"
                  name="menuiserie"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  onChange={handleCheckboxChange}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Menuiserie
                </label>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="vmc"
                  aria-describedby="vmc"
                  name="vmc"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  onChange={handleCheckboxChange}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Vmc
                </label>
              </div>
            </div>
          </div>
          <div className="relative flex items-start mt-2">
            <div className="flex h-6 items-center">
              <input
                id="pompe-a-chaleur"
                aria-describedby="pompe-a-chaleur"
                name="pompe-a-chaleur"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Pompe à chaleur
              </label>
            </div>
          </div>
          <div className="relative flex items-start mt-2">
            <div className="flex h-6 items-center">
              <input
                id="chauffage/poele"
                aria-describedby="chauffage/poele"
                name="chauffage/poele"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Chauffage/Poêle
              </label>
            </div>
          </div>
          <div className="relative flex items-start mt-2">
            <div className="flex h-6 items-center">
              <input
                id="solaire"
                aria-describedby="solaire"
                name="solaire"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Solaire/Chauffe eau
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div>
        <div className="mt-5">
          <ButtonGreen value="Creer" disabled={disabled} type="submit" />
        </div>
        <div className="mt-5">
          <ButtonWithBorder value="Annuler" link="/mon-espace/entreprise" />
        </div>
      </div>
    </form>
  );
};

export default CreatePartner;
