import React from "react";
import Card from "../elements/Card";

const Cards = () => {
  const content = [
    {
      title: "Dossiers accordés",
      number: "+644 000",
      text: "Notre travail commence ici",
    },
    {
      title: "Economie sur vos travaux",
      number: "70%",
      text: "Notre combat à tous",
    },
    {
      title: "Prise en charge maximum",
      number: "20 000€",
      text: "Subvention accordée et encadrée par l'État",
    },
  ];
  return (
    <section className="w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-10 mx-auto flex justify-between lg:flex-row flex-col">
      {content.map((item, idx) => (
        <Card
          key={item.title}
          title={item.title}
          number={item.number}
          text={item.text}
          margin={idx === 0 ? false : true}
        />
      ))}
    </section>
  );
};

export default Cards;
