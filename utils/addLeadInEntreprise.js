import {
  getAllPartnersBySector,
  updateCurrentIndex,
  getCurrentIndex,
  addProspectToPartner,
} from "../firebase/partnerManager";

export const addLeadInEntreprise = async (userData) => {
  console.log(userData);
  return new Promise(async (resolve, reject) => {
    const parteners = await getAllPartnersBySector();
    const codeSector = userData.codePostal.substring(0, 2);

    let entrepriseIds = []; // Pour conserver les identifiants des entreprises

    if (parteners.hasOwnProperty(codeSector)) {
      let matchedPartners = Object.values(parteners[codeSector]);

      for (let travail of userData.travaux) {
        let partnersForCurrentJob = matchedPartners.filter((partner) =>
          partner.prestation.includes(travail)
        );

        if (partnersForCurrentJob.length > 0) {
          let currentIndex = await getCurrentIndex(codeSector);
          const selectedPartner =
            partnersForCurrentJob[currentIndex % partnersForCurrentJob.length];

          // Ajoutez l'ID du partenaire sélectionné à la liste
          entrepriseIds.push(selectedPartner.id);

          // Ajoutez le prospect à la base de données du partenaire sélectionné
          await addProspectToPartner(selectedPartner.id, userData);

          await updateCurrentIndex(
            codeSector,
            (currentIndex + 1) % partnersForCurrentJob.length
          );
        }
      }

      resolve(entrepriseIds);
    } else {
      console.log("No matching partners found for this codePostal.");
      resolve(null);
    }
  });
};
