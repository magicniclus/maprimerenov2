import React from "react";
import Simulateur from "../forms/Simulateur";

const FormLanding = () => {
  return (
    <section className="w-full max-w-[1250px] px-0 py-0 lg:px-20 lg:py-10 mx-auto flex justify-between items-stretch lg:flex-row flex-col">
      <div className="lg:w-4/12 w-full flex-col justify-center min-h-[100%] lg:flex hidden lg:px-0 px-5">
        <div>
          <h3 className="text-3xl text-dark font-semibold">
            MaPrimeRenov’, c’est jusqu’à 20.000€ de prise en charge par l’état !
          </h3>
          <p className="mt-5 text-dark">
            Bénéficiez du montant maximum subventionné pour vous. Il vous suffit
            de tester l’éligibilité de votre projet ! Utilisez notre simulateur
            GRATUIT et sans conditions de revenus pour tester votre éligibilité
            dès maintenant.
          </p>
        </div>
        <div className="md:mt-32 mt-10">
          <h3 className="text-3xl text-dark font-semibold">
            Qui peut en bénéficier ?
          </h3>
          <p className="mt-5 text-dark">
            Depuis le 1er octobre 2020, tous les propriétaires peuvent en
            bénéficier, quels que soient leurs revenus. Les propriétaires
            bailleurs peuvent déposer leur dossier de demande d’aide depuis le
            1er juillet 2021. En 2021 plus de 644 000 demandes d’aide ont été
            accordé par l’État.
          </p>
        </div>
      </div>
      <div className="lg:w-8/12 w-full lg:pl-20 lg:mt-0">
        <Simulateur />
      </div>
      <div className="lg:w-4/12 w-full flex-col justify-center min-h-[100%] lg:hidden flex mt-10 lg:mt-20 lg:px-0 px-5">
        <div>
          <h3 className="text-xl text-dark font-semibold">
            MaPrimeRenov’, c’est jusqu’à 20.000€ de prise en charge par l’état !
          </h3>
          <p className="mt-5 text-xs text-dark">
            Bénéficiez du montant maximum subventionné pour vous. Il vous suffit
            de tester l’éligibilité de votre projet ! Utilisez notre simulateur
            GRATUIT et sans conditions de revenus pour tester votre éligibilité
            dès maintenant.
          </p>
        </div>
        <div className="lg:mt-24 mt-10">
          <h3 className="text-xl text-dark font-semibold">
            Qui peut en bénéficier ?
          </h3>
          <p className="mt-5 text-xs text-dark">
            Depuis le 1er octobre 2020, tous les propriétaires peuvent en
            bénéficier, quels que soient leurs revenus. Les propriétaires
            bailleurs peuvent déposer leur dossier de demande d’aide depuis le
            1er juillet 2021. En 2021 plus de 644 000 demandes d’aide ont été
            accordé par l’État.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormLanding;
