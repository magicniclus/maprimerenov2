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
        text="Vous êtes une entreprise RGE et vous douhaitez vous developper ? Devenons partenaire ! 
    Postulez à notre programme nationnal d’aide à l’habitat et obtenez jusqu’à 40 demandes par jours."
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
