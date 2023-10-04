import React from "react";
import ButtonWithBorder from "../button/ButtonWithBorder";

const step = [
  "Estimation des traveaux",
  "Validation du projet",
  "Elaboration et dépot du projet",
  "Suivi de la  réalisation des travaux",
  "Livraison du chantier",
  "Encaissement de la prime par l’état",
];

const Video = () => {
  return (
    <div className="w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-24 mx-auto flex justify-between items-center bg-light lg:flex-row flex-col">
      <div className="lg:w-5/12 w-full flex flex-col items-start">
        <h2 className="text-3xl text-dark font-semibold mb-10">
          Nous vous accompagnons dans chacune des étapes de votre projet
        </h2>
        {step.map((item) => (
          <div className="flex items-center mt-3">
            <div className="w-2 h-2 rounded-full bg-dark" />
            <p className="ml-5 text-dark">{item}</p>
          </div>
        ))}
        <div className="mt-10">
          <ButtonWithBorder />
        </div>
      </div>
      <div className="rounded-md overflow-hidden w-full lg:w-6/12 lg:mt-0 mt-10">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/O4HxHLQ3k9Y?si=Hh8A0x4QRVLjRffU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
