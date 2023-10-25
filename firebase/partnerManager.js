import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  ref,
  onValue,
  off,
  set,
  getDatabase,
  push,
  get,
} from "firebase/database";
import app from "./firebase.config";

const database = getDatabase(app);

export const authenticateWithFirebase = (email, password) => {
  const auth = getAuth(app);

  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        resolve(userCredential.user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const isUserAuthenticated = () => {
  const auth = getAuth(app);

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true); // L'utilisateur est connecté
      } else {
        resolve(false); // L'utilisateur n'est pas connecté
      }
    });
  });
};

export const watchCompanies = (sectorId, callback) => {
  // Assurez-vous d'avoir défini app et importé getDatabase
  const companiesRef = ref(database, `entreprises/${sectorId}`);

  const listener = onValue(companiesRef, (snapshot) => {
    let companiesArray = [];
    const data = snapshot.val();

    if (data) {
      companiesArray = Object.values(data);
    }

    callback(companiesArray);
  });

  return () => off(companiesRef, "value", listener);
};

export const addCompany = (sectorId, company) => {
  const database = getDatabase();

  // Création d'une référence pour la nouvelle entreprise avec un UUID généré automatiquement
  const newCompanyRef = push(ref(database, `entreprises/${sectorId}`));

  // Ajout de l'UUID à l'objet company
  const companyWithId = {
    ...company,
    id: newCompanyRef.key,
  };

  // Utilisation de la méthode set pour ajouter la nouvelle entreprise avec l'ID
  return set(newCompanyRef, companyWithId)
    .then(() => {
      console.log("Entreprise ajoutée avec succès !");
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout de l'entreprise :", error);
    });
};

// Inside partnerManager.js

export const getAllPartnersBySector = () => {
  return new Promise((resolve, reject) => {
    const sectorsRef = ref(database, `entreprises`);

    onValue(
      sectorsRef,
      (snapshot) => {
        const sectorsData = snapshot.val();
        const result = {};

        if (sectorsData) {
          Object.keys(sectorsData).forEach((sector) => {
            result[sector] = Object.values(sectorsData[sector]);
          });
          resolve(result); // Résoudre la promesse avec les données des partenaires
        } else {
          reject("No sectors data found"); // Rejeter la promesse si aucune donnée n'est trouvée
        }
      },
      (error) => {
        reject(error); // Gérer les erreurs lors de la récupération des données
      }
    );
  });
};

export const getCurrentIndex = async (codeSector) => {
  const db = getDatabase();
  const indexRef = ref(db, `currentIndex/${codeSector}`);
  const snapshot = await get(indexRef);

  return snapshot.exists() ? snapshot.val() : 0;
};

export const updateCurrentIndex = async (codeSector, index) => {
  const db = getDatabase();
  const indexRef = ref(db, `currentIndex/${codeSector}`);
  await set(indexRef, index);
};

export const addProspectToPartner = async (partnerId, prospectData) => {
  const partnerProspectsRef = ref(database, `prospect/entreprise/${partnerId}`);
  await push(partnerProspectsRef, prospectData);
};
