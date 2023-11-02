import { initializeApp, getApps } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "maprimerenov-58fdf.firebaseapp.com",
  databaseURL:
    "https://maprimerenov-58fdf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "maprimerenov-58fdf",
  storageBucket: "maprimerenov-58fdf.appspot.com",
  messagingSenderId: "855231284792",
  appId: "1:855231284792:web:e491151c0617175c01c8cd",
};

// Initialize Firebase
let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export default app;
