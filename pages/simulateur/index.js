import React from "react";
import Cards from "../../components/contents/Cards";
import FormLanding from "../../components/contents/FormLanding";
import Video from "../../components/contents/Video";
import HeaderLanding from "../../components/headers/HeaderLanding";
import Basic from "../../layout/Basic";

const index = () => {
  return (
    <Basic
      title="Simulateur MaPrimeRenov en 1 minute | MaPrimeRenov-info"
      ogUrl="https://maprimerenov-info.org/simulateur"
      description="Découvrez en 1 minute les aides de l'état disponibles avec notre simulateur MaPrimeRenov. Obtenez une estimation rapide et précise."
      keywords={[
        "MaPrimeRenov",
        "simulateur",
        "aides de l'état",
        "estimation",
        "rénovation énergétique",
        "prime éco",
      ]}
      ogImage="/images/logos/favicon.png"
    >
      <HeaderLanding />
      <FormLanding />
      <Cards />
      <Video />
    </Basic>
  );
};

export default index;
