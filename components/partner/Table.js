import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const getContact = useSelector((state) => state.contacts);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(getContact);
  }, [getContact]);

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">
                  List des prospects générés
                </h1>
                <p className="mt-2 text-sm text-gray-300"></p>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                          Name
                        </th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Type
                        </th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Travaux
                        </th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Étape du Projet
                        </th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {contacts &&
                        contacts.map((contact, index) => (
                          <tr key={index}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {contact.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {contact.type}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {contact.travaux.join(", ")}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {contact.etapeDuProjet}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {contact.newDate}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
