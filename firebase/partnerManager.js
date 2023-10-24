import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./firebase.config"; // Remplacez par le chemin correct vers votre fichier de configuration Firebase

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
