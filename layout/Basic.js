import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Basic = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Utilisez notre estimateur avancé pour connaître la valeur exacte de votre bien immobilier. Obtenez une estimation rapide, fiable et basée sur les données actuelles du marché avec Avenue-Immo."
        />
        <meta
          name="keywords"
          content="outil d'estimation immobilière, estimation de maison en ligne, estimation d'appartement, valeur de propriété, Avenue-Immo estimateur"
        />
        <meta
          property="og:title"
          content="Estimateur Avenue-Immo : Obtenez une Estimation Précise de Votre Bien"
        />
        <meta
          property="og:description"
          content="Utilisez notre estimateur avancé pour connaître la valeur exacte de votre bien immobilier. Obtenez une estimation rapide, fiable et basée sur les données actuelles du marché avec Avenue-Immo."
        />
        <meta
          property="og:image"
          content="URL_DE_VOTRE_IMAGE_REPRESENTANT_L_ESTIMATEUR"
        />
        <meta
          property="og:url"
          content="https://www.avenue-immo.com/estimation"
        />
      </Head>
      <Header />
      <main className="">{props.children}</main>
      <Footer />
    </>
  );
};

export default Basic;
