import React from "react";
import Basic from "../../layout/Basic";

const index = () => {
  return (
    <Basic title="Maprimerenov-info | Politique de Confidentialité">
      <div className="w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-10 mx-auto flex justify-between flex-col text-dark">
        <h1 className="text-4xl font-bold tracking-tight text-dark mb-10">
          Politique de Confidentialité de Maprimerenov
        </h1>

        <p className="mt-5">
          Merci de visiter Maprimerenov. La protection de votre vie privée est
          essentielle pour nous. Cette politique de confidentialité explique
          comment nous collectons, utilisons, protégeons et partageons vos
          informations.
        </p>

        <h2 className="mt-5 font-semibold text-xl">Collecte d'informations</h2>
        <p className="mt-5">
          Lorsque vous utilisez notre formulaire, nous collectons des
          informations que vous nous fournissez directement, telles que votre
          nom, adresse, numéro de téléphone et toute autre information que vous
          choisissez de nous fournir.
        </p>

        <h2 className="mt-5 font-semibold text-xl">
          Utilisation des informations
        </h2>
        <p className="mt-5">Nous utilisons vos informations pour:</p>
        <ul className="mt-5">
          <li>-Traiter et répondre à vos demandes</li>
          <li>
            -Partager vos informations avec nos entreprises partenaires dans le
            but de vous fournir des offres et des services de rénovation
          </li>
          <li>-Améliorer la qualité de nos services</li>
        </ul>

        <h2 className="mt-5 font-semibold text-xl">Partage d'informations</h2>
        <p className="mt-5">
          Nous partageons vos informations avec nos entreprises partenaires qui
          offrent des services de rénovation d'habitat. Nous ne vendons, louons
          ni échangeons vos informations personnelles avec des tiers à des fins
          marketing sans votre consentement.
        </p>

        <h2 className="mt-5 font-semibold text-xl">Sécurité</h2>
        <p className="mt-5">
          La sécurité de vos informations est notre priorité. Nous utilisons des
          mesures de sécurité appropriées pour protéger vos informations contre
          tout accès, utilisation ou divulgation non autorisés.
        </p>

        <h2 className="mt-5 font-semibold text-xl">Vos droits</h2>
        <p className="mt-5">Vous avez le droit de:</p>
        <ul className="mt-5">
          <li>-Demander l'accès à vos données personnelles</li>
          <li>
            -Demander la correction de vos données personnelles si elles sont
            inexactes
          </li>
          <li>-Demander la suppression de vos données personnelles</li>
          <li>
            -Opposer-vous à l'utilisation de vos données pour des raisons
            spécifiques
          </li>
        </ul>

        <h2 className="mt-5 font-semibold text-xl">
          Cookies et technologies similaires
        </h2>
        <p className="mt-5">
          Nous utilisons des cookies et des technologies similaires pour
          améliorer votre expérience utilisateur et recueillir des données à des
          fins d'analyse.
        </p>

        <h2 className="mt-5 font-semibold text-xl">
          Modifications de cette politique
        </h2>
        <p className="mt-5">
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Les modifications entreront en vigueur
          dès leur publication sur notre site.
        </p>

        <h2 className="mt-5 font-semibold text-xl">Contact</h2>
        <p className="mt-5">
          Si vous avez des questions ou des préoccupations concernant cette
          politique, veuillez nous contacter à
          casteranicolas.contact2@gmail.com.
        </p>
      </div>
    </Basic>
  );
};

export default index;
