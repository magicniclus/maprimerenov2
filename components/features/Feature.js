import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Connaitre vos aides",
    description:
      "Découvrez les différentes aides disponibles et comment elles peuvent bénéficier à vos projets d'amélioration de l'habitat. Laissez-nous vous guider à travers le processus.",
    href: "/simulateur",
    icon: CheckIcon,
  },
  {
    name: "Devenir partenaire",
    description:
      "Rejoignez notre réseau de partenaires dédiés et bénéficiez d'une collaboration étroite pour aider encore plus de personnes à réaliser leurs projets avec le soutien des subventions disponibles.",
    href: "/entreprise",
    icon: CheckIcon,
  },
  {
    name: "Nos partenaires",
    description:
      "Découvrez les entreprises et artisans avec lesquels nous travaillons étroitement pour vous fournir des services de qualité et vous aider à obtenir les meilleures subventions pour vos projets.",
    href: "/entreprise",
    icon: CheckIcon,
  },
];
const Feature = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Facile, rapide
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Un service unique en France
          </p>
          <p className="mt-6 text-lg leading-8 text-dark">
            Nous réalisons des audits de vos projets, montons vos dossiers,
            cherchons les meilleurs artisans disponibles et obtenons vos
            subventions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-dark">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-dark">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      En savoir plus <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
