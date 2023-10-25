import React, { useState, useEffect } from "react";
import Pertner from "../../../layout/Pertner";
import { watchCompanies } from "../../../firebase/partnerManager";
import SectionWithAction from "../../../components/partner/SectionWithAction";
import TableOfPartner from "../../../components/partner/TableOfPartner";
import { getAllPartnersBySector } from "../../../firebase/partnerManager";

const index = () => {
  const [entreprises, setEntreprises] = useState([]);
  const [allPartner, setAllPartner] = useState([]);

  useEffect(() => {
    // This fetches partners for sector 33
    const unsubscribe = watchCompanies("33", (companies) => {
      console.log("Companies in sector 33: ", companies);
      setEntreprises(companies);
    });

    // This fetches all partners grouped by sector
    getAllPartnersBySector((partners) => {
      console.log("All Partners by Sector: ", partners);
      setAllPartner(partners);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Pertner>
      <SectionWithAction />

      {Object.entries(allPartner).map(([sector, partners]) => (
        <div key={sector}>
          <h3>{sector}</h3>
          <TableOfPartner data={partners} />
        </div>
      ))}
    </Pertner>
  );
};

export default index;
