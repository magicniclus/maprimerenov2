import React from "react";
import Basic from "../../layout/Basic";

const index = () => {
  return (
    <Basic title="Maprimerenov-info | Mentions Légales">
      <div className="w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-10 mx-auto flex justify-between flex-col text-dark">
        <h1 className="text-4xl font-bold tracking-tight text-dark mb-10">
          Mentions Légales de Maprimerenov
        </h1>

        <h2 className="mt-5 font-semibold text-xl">Identification</h2>
        <p className="mt-5">
          Nom de la société : Nicolas CASTERA
          <br />
          Adresse : 22 rue de Libourne
          <br />
          Téléphone : 0631420045 E-mail : contact@maprimerenov-info.com
        </p>

        <h2 className="mt-5 font-semibold text-xl">Directeur de publication</h2>
        <p className="mt-5">Mr CASTERA</p>

        <h2 className="mt-5 font-semibold text-xl">Hébergement</h2>
        <p className="mt-5">Site hébergé par Netlify</p>

        <h2 className="mt-5 font-semibold text-xl">Propriété intellectuelle</h2>
        <p className="mt-5">
          Tout le contenu de ce site, incluant, de façon non limitative, les
          graphismes, images, textes, vidéos, animations, sons, logos, gifs et
          icônes ainsi que leur mise en forme sont la propriété exclusive de la
          société à l'exception des marques, logos ou contenus appartenant à
          d'autres sociétés partenaires ou auteurs.
        </p>

        <h2 className="mt-5 font-semibold text-xl">Responsabilité</h2>
        <p className="mt-5">
          Les informations disponibles sur ce site sont fournies "en l'état"
          sans garantie d'aucune sorte, qu'elle soit implicite ou explicite,
          concernant notamment l'intégrité, l'exactitude, l'actualité, la
          non-contrefaçon, la disponibilité, la fiabilité ou l'exhaustivité des
          informations, produits, accessoires ou services apparaissant sur ce
          site ou leur adéquation à l'utilisation que le visiteur envisage d'en
          faire.
        </p>

        <h2 className="mt-5 font-semibold text-xl">Contact</h2>
        <p className="mt-5">
          Pour toute question concernant les présentes mentions légales ou pour
          toute demande concernant le site, vous pouvez contacter par email:
          contact@maprimerenov-info.org.
        </p>
      </div>
    </Basic>
  );
};

export default index;
