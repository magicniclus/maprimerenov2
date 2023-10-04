import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJQdBX_GBbCZHlwzKDeyLG3VbCigGv310",
  authDomain: "breuillet-47fdc.firebaseapp.com",
  projectId: "breuillet-47fdc",
  storageBucket: "breuillet-47fdc.appspot.com",
  messagingSenderId: "334551426297",
  appId: "1:334551426297:web:2d04ce01844d2a6d5a2e28",
  databaseURL:
    "https://breuillet-47fdc-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
let app;

// Vérifie si une application Firebase existe déjà
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Utilise l'application Firebase existante
}

const database = getDatabase(app);

export { database };
