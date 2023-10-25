import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, onValue, off, set, getDatabase, push } from "firebase/database";
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
  // Assurez-vous d'avoir défini app et importé getDatabase
  const database = getDatabase(); // si vous avez déjà initialisé `getDatabase` ailleurs, alors cette ligne n'est pas nécessaire.

  // Création d'une référence pour la nouvelle entreprise avec un UUID généré automatiquement
  const newCompanyRef = push(ref(database, `entreprises/${sectorId}`));

  // Utilisation de la méthode set pour ajouter la nouvelle entreprise
  return set(newCompanyRef, company)
    .then(() => {
      console.log("Entreprise ajoutée avec succès !");
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout de l'entreprise :", error);
    });
};

// Inside partnerManager.js

export const getAllPartnersBySector = (callback) => {
  const sectorsRef = ref(database, `entreprises`);

  onValue(sectorsRef, (snapshot) => {
    const sectorsData = snapshot.val();
    const result = {};

    if (sectorsData) {
      Object.keys(sectorsData).forEach((sector) => {
        result[sector] = Object.values(sectorsData[sector]);
      });
    }

    callback(result);
  });
};
