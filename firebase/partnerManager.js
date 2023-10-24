import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, onValue, off } from "firebase/database";
import { database } from "./firebase.config"; // Remplacez par le chemin correct vers votre fichier de configuration Firebase
import { data } from "autoprefixer";

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
