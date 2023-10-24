import React, { useState, useEffect } from "react";
import Pertner from "../../../layout/Pertner";
import { watchCompanies } from "../../../firebase/partnerManager";
import SectionWithAction from "../../../components/partner/SectionWithAction";
import TableOfPartner from "../../../components/partner/TableOfPartner";

const index = () => {
  const [entreprises, setEntreprises] = useState([]);

  useEffect(() => {
    const unsubscribe = watchCompanies("33", (companies) => {
      console.log("Companies in sector 33: ", companies);
      setEntreprises(companies);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Pertner>
      <SectionWithAction />
      <TableOfPartner />
    </Pertner>
  );
};

export default index;
