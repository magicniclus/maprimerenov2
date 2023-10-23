import * as React from "react";

export const EmailTemplate = ({
  name,
  email,
  telephone,
  status,
  codePostal,
  travaux,
  surface,
  typeDeChauffage,
  type,
  ageDuBien,
  etapeDuProjet,
}) => (
  <div>
    <h2>Nouveau Propsect:</h2>
    <ul>
      <li>
        Nom: <span className="font-bold">{name}</span>
      </li>
      <li>
        Email: <span className="font-bold">{email}</span>
      </li>
      <li>
        Téléphone: <span className="font-bold">{telephone}</span>
      </li>
      <li>
        Statut: <span className="font-bold">{status}</span>
      </li>
      <li>
        Code postal: <span className="font-bold">{codePostal}</span>
      </li>
      <li>
        Type d'habitation: <span className="font-bold">{type}</span>
      </li>
      {travaux.map((travail, index) => (
        <li key={index}>
          Travaux: <span className="font-bold">{travail}</span>
        </li>
      ))}
      <li>
        Surface: <span className="font-bold">{surface}</span> m<sup>2</sup>
      </li>
      <li>
        Chauffage: <span className="font-bold">{typeDeChauffage}</span>
      </li>
      <li>
        Année de construction: <span className="font-bold">{ageDuBien}</span>
      </li>
      <li>
        Etape du projet: <span className="font-bold">{etapeDuProjet}</span>
      </li>
    </ul>
  </div>
);
