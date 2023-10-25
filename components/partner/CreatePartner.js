import React from "react";

const CreatePartner = () => {
  return (
    <form>
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
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Vmc
                </label>
              </div>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="pompe-a-chaleur"
                aria-describedby="pompe-a-chaleur"
                name="pompe-a-chaleur"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Pompe à chaleur
              </label>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="chauffage/poele"
                aria-describedby="chauffage/poele"
                name="chauffage/poele"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Pompe à Chauffage/Poêle
              </label>
            </div>
          </div>
          <div className="relative flex items-startx">
            <div className="flex h-6 items-center">
              <input
                id="solaire"
                aria-describedby="solaire"
                name="solaire"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
    </form>
  );
};

export default CreatePartner;
