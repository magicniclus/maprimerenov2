import React from "react";
import Hero from "../../components/heros/Hero";
import Basic from "../../layout/Basic";
import Entreprise from "../../components/forms/Entreprise";
import FAQ from "../../components/FAQ/FAQ";
import Cards from "../../components/contents/Cards";
import CTA from "../../components/CTA/CTA";

const index = () => {
  return (
    <Basic>
      <Hero
        title="Vous êtes une entreprise RGE ?"
        text="Vous êtes une entreprise RGE et vous souhaitez vous développer ? Devenez partenaire ! Postulez à notre programme national d’aide à l’habitat et obtenez jusqu’à 40 demandes par jour."
        buttonValue="Vous êtes un particulier"
        thirstButtonValue="Devenir partenaire"
        firstButtonLink="#entrepriseForm"
        secondButtonLink="/simulateur"
      />
      <Entreprise />
      <Cards />
      <FAQ />
      <CTA />
    </Basic>
  );
};

export default index;
