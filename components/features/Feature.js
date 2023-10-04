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
      "Nous réalisons des audit de vos projet, montons vos dossiers, cherchons les meilleurs artisans disponible et obtenons vos subvensions",
    href: "#",
    icon: CheckIcon,
  },
  {
    name: "Devenir partnenaire",
    description:
      "Nous réalisons des audit de vos projet, montons vos dossiers, cherchons les meilleurs artisans disponible et obtenons vos subvensions",
    href: "#",
    icon: CheckIcon,
  },
  {
    name: "Nos partenaires",
    description:
      "Nous réalisons des audit de vos projet, montons vos dossiers, cherchons les meilleurs artisans disponible et obtenons vos subvensions",
    href: "#",
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
            Nous réalisons des audit de vos projet, montons vos dossiers,
            cherchons les meilleurs artisans disponible et obtenons vos
            subvensions
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
