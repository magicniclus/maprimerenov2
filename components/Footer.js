import React from "react";

const navigation = {
  Solutions: [
    { name: "Simulateur", href: "/simulateur" },
    { name: "Devenir Partenaire", href: "/entreprise" },
    { name: "Blog", href: "/blog" },
  ],
  Contact: [
    { name: "Contact", href: "/contact" },
    { name: "Mon Espace", href: "/connexion" },
    { name: "Espace Pro", href: "/entreprise" },
    { name: "F.A.Q", href: "/FAQ" },
  ],
  Légale: [
    { name: "Mentions légales", href: "/mentions-legales" },
    {
      name: "Politique de cofidentialité",
      href: "/politique-de-confidentialite",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-10 mx-auto flexl justify-between items-center shadow-lg bg-gray-50">
      <div className="flex justify-between md:flex-row flex-col">
        <div>
          <a className="text-primary text-2xl" href="/">
            Maprimerenov-info.org
          </a>
          <div className="flex flex-wrap mt-7">
            <div className="flex justify-center items-center bg-white border-2 border-dark/20 rounded-full overflow-hidden w-16 h-16 mr-3 mt-2">
              <img
                src="/images/logos/maprimerenov.png"
                alt="maprimerenov"
                className="h-8 w-auto "
              />
            </div>
            <div className="flex justify-center items-center bg-white border-2 border-dark/20 rounded-full overflow-hidden w-16 h-16 mr-3 mt-2">
              <img
                src="/images/logos/CEE.png"
                alt="CEE"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex justify-center items-center bg-white border-2 border-dark/20 rounded-full overflow-hidden w-16 h-16 mr-3 mt-2">
              <img
                src="/images/logos/france-renov.png"
                alt="francerenov"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex justify-center items-center bg-white border-2 border-dark/20 rounded-full overflow-hidden w-16 h-16 mr-3 mt-2">
              <img
                src="/images/logos/RGE.png"
                alt="RGE"
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:mt-0 mt-10">
          <div className="md:mr-20">
            <h3 className="text-dark text-sm font-bold mb-3">Solutions</h3>
            <ul className="text-dark ">
              {navigation.Solutions.map((item) => (
                <li
                  key={item.name}
                  className="mb-2 md:max-w-[100px] transition-all duration-300 ease-in-out"
                >
                  <a href={item.href} className="">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:mr-20 md:mt-0 mt-5">
            <h3 className="text-dark text-sm font-bold mb-3">Contact</h3>
            <ul className="text-dark transition-all duration-300 ease-in-out">
              {navigation.Contact.map((item) => (
                <li
                  key={item.name}
                  className="mb-2 md:max-w-[100px] transition-all duration-300 ease-in-out"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" md:mt-0 mt-5">
            <h3 className="text-dark text-sm font-bold mb-3">Légale</h3>
            <ul className="text-dark transition-all duration-300 ease-in-out">
              {navigation.Légale.map((item) => (
                <li
                  key={item.name}
                  className="mb-2 md:max-w-[100px] transition-all duration-300 ease-in-out"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-100 mt-5" />
      <p className="text-xs text-dark mt-10">
        © MaPrimeRenov-info.org 2023. Tous droit réservé
      </p>
    </footer>
  );
};

export default Footer;
