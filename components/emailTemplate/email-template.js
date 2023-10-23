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
    <p>Nom: {name}</p>
    <p>Email: {email}</p>
    <p>Téléphone: {telephone}</p>
    <p>Statut: {status}</p>
    <p>Code postal: {codePostal}</p>
    <p>Type d'habitation: {type}</p>
    {travaux.map((travail, index) => (
      <p key={index}>Travaux: {travail}</p>
    ))}
    <p>Surface: {surface}</p>
    <p>Chauffage: {typeDeChauffage}</p>
    <p>Année de construction: {ageDuBien}</p>
    <p>Etape du projet: {etapeDuProjet}</p>
  </div>
);
