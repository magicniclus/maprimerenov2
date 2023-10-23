import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
