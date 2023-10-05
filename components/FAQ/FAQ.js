import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    question:
      "Comment fonctionne le service de mise en relation avec des entreprises?",
    answer:
      "Notre plateforme utilise des algorithmes avancés pour connecter les utilisateurs avec des entreprises adaptées à leurs besoins. En quelques clics, vous pouvez être mis en relation avec des entreprises de confiance dans votre domaine.",
  },
  {
    question:
      "Est-ce que votre service est gratuit pour les chercheurs d'entreprise?",
    answer:
      "Oui, notre service est entièrement gratuit pour ceux qui recherchent des entreprises. Nous sommes financés par les entreprises partenaires qui souhaitent augmenter leur visibilité.",
  },
  {
    question:
      "Comment garantissez-vous la qualité des entreprises sur votre plateforme?",
    answer:
      "Chaque entreprise sur notre plateforme est soigneusement vérifiée selon des critères stricts de qualité, d'expérience et de fiabilité pour assurer la satisfaction de nos utilisateurs.",
  },
  {
    question: "Puis-je consulter les avis sur les entreprises?",
    answer:
      "Absolument! Vous pouvez consulter les avis et témoignages laissés par d'autres utilisateurs pour chaque entreprise afin de faire un choix éclairé.",
  },
  {
    question: "Comment puis-je inscrire mon entreprise sur votre plateforme?",
    answer:
      "C'est simple! Cliquez sur la section 'Inscrire mon entreprise' et suivez les instructions pour ajouter votre entreprise à notre liste de partenaires.",
  },
  {
    question:
      "Proposez-vous des partenariats ou des collaborations avec des entreprises?",
    answer:
      "Oui, nous sommes toujours ouverts aux collaborations et partenariats. Contactez-nous pour discuter des opportunités et des avantages mutuels.",
  },
  {
    question:
      "En combien de temps puis-je être mis en relation avec une entreprise?",
    answer:
      "Dès que vous faites une demande, notre système commence à chercher la meilleure correspondance. La plupart des utilisateurs sont mis en relation en moins de 24 heures.",
  },
  {
    question: "Votre plateforme est-elle disponible internationalement?",
    answer:
      "Actuellement, nous opérons principalement dans certaines régions, mais nous avons pour ambition d'étendre nos services à l'international prochainement.",
  },
  {
    question:
      "Comment garantissez-vous la confidentialité de mes informations?",
    answer:
      "La confidentialité est primordiale pour nous. Vos informations ne sont utilisées que pour la mise en relation et ne sont jamais partagées avec des tiers sans votre consentement.",
  },
  {
    question: "Puis-je annuler une demande de mise en relation?",
    answer:
      "Bien sûr! Si vous changez d'avis, vous pouvez annuler votre demande à tout moment depuis votre tableau de bord.",
  },
  {
    question:
      "Quels sont les avantages de trouver une entreprise via votre plateforme plutôt que de chercher moi-même?",
    answer:
      "Grâce à notre plateforme, vous gagnez du temps, bénéficiez d'une sélection de qualité et avez accès aux avis et témoignages d'autres utilisateurs pour faciliter votre choix.",
  },
  {
    question: "Puis-je recommander une entreprise à un ami via votre site?",
    answer:
      "Oui, avec notre système de parrainage, vous pouvez recommander facilement des entreprises à vos amis et votre famille.",
  },
  {
    question:
      "Y a-t-il une garantie si je ne suis pas satisfait de l'entreprise avec laquelle j'ai été mis en relation?",
    answer:
      "La satisfaction de nos utilisateurs est notre priorité. Si vous rencontrez des problèmes, contactez-nous, et nous ferons de notre mieux pour vous aider.",
  },
  {
    question: "Puis-je consulter votre plateforme sur mobile?",
    answer:
      "Absolument! Notre site est optimisé pour tous les appareils, que ce soit un ordinateur, une tablette ou un smartphone. Vous pouvez donc nous consulter où que vous soyez.",
  },
];

const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-dark">
            Questions, réponses
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-dark">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-dark/80">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
