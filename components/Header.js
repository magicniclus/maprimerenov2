import React from "react";
import ButtonWithBorder from "./button/ButtonWithBorder";

const Header = () => {
  return (
    <header className="w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-8 mx-auto flex md:flex-row flex-col justify-between items-center z-50">
      <a className="text-primary text-2xl" href="/">
        Maprimerenov-info.org
      </a>
      <div className="flex items-center md:mt-0 mt-7">
        <a
          className="text-primary text-sm max-w-xs text-center mr-5"
          href="/entreprise"
        >
          VOUS ÊTES UN <br />
          PROFESSIONNEL ?
        </a>
        <ButtonWithBorder link={"/connexion"} value="MON ESPACE" />
      </div>
    </header>
  );
};

export default Header;
