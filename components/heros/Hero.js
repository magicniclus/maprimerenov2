import React from "react";

const Hero = (props) => {
  return (
    <section className="bg-white z-10">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 lg:pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-20 lg:py-26">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/10">
                      Qui sommes nous ?
                    </span>
                  </a>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-dark sm:text-6xl">
                  {props.title || " Le site spécialisé Maprimerenov’"}
                </h1>
                <p className="mt-6 text-lg leading-8 text-dark">
                  {props.text ||
                    "Nous accompagnons les personnes dans l’obtention des aide de l’état Maprimerenov’ ainsi que dans la réalisation de leurs travaux en sélectionnant des entreprise RGE spécialisé dans les prestations subventionnées."}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href={props.firstButtonLink || "/simulateur"}
                    className="rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green transition-all duration-300 ease-in-out"
                  >
                    {props.thirstButtonValue || "Connaître vos aides"}
                  </a>
                  <a
                    href={props.secondButtonLink || "/entreprise"}
                    className="text-sm font-semibold leading-6 text-dark"
                  >
                    {props.buttonValue || "Vous êtes un profetionnel"}{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 my-auto lg:mt-10 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-primary/10 ring-1 ring-indigo-50 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg lg:rounded-3xl">
              <div className="bg-primary [clip-path:inset(0)] lg:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 py-6 sm:pt-6 lg:pl-6 lg:pr-0 flex justify-center items-center">
                  <img
                    src={props.img || "/images/imgs/istock.png"}
                    alt="istock"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </section>
  );
};

export default Hero;
