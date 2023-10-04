import React from "react";

const navigation = {
  Solutions: [
    { name: "Simulateur", href: "#" },
    { name: "Devenir Partenaire", href: "#" },
    { name: "Articles", href: "#" },
  ],
  Contact: [
    { name: "Contact", href: "#" },
    { name: "Mon Espace", href: "#" },
    { name: "Espace Pro", href: "#" },
    { name: "F.A.Q", href: "#" },
  ],
  Légale: [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de cofidentialité", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-10 mx-auto flexl justify-between items-center shadow-sm bg-gray-50">
      <div className="flex justify-between md:flex-row flex-col">
        <div>
          <a className="text-primary text-lg" href="/">
            Maprimerenov-info.org
          </a>
          <div className="flex mt-7">
            <img
              src="/images/logos/maprimerenov.png"
              alt="maprimerenov"
              className="h-8 md:h-12 w-auto "
            />
            <img
              src="/images/logos/CEE.png"
              alt="CEE"
              className="h-8 md:h-12 w-auto ml-3"
            />
            <img
              src="/images/logos/france-renov.png"
              alt="francerenov"
              className="h-8 md:h-12 w-auto ml-3"
            />
            <img
              src="/images/logos/RGE.png"
              alt="RGE"
              className="h-8 md:h-12 w-auto ml-3"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:mt-0 mt-10">
          <div className="mr-20">
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
          <div className="mr-20 md:mt-0 mt-5">
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
