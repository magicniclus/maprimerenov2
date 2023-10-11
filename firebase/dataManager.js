import { Database } from "./firebase.config.js";
import { ref, push, set } from "firebase/database";
import { database } from "./firebase.config";

export const updateUserData = async (userData) => {
  try {
    const dbRef = ref(database, "prospect");
    const newProspectRef = push(dbRef);
    await set(newProspectRef, userData);
    console.log("Data sent successfully!");
  } catch (error) {
    console.error("Error sending data: ", error);
    throw error;
  }
};

export const updateEntrepriseData = async (userData) => {
  try {
    const dbRef = ref(database, "entreprise");
    const newProspectRef = push(dbRef);
    await set(newProspectRef, userData);
    console.log("Data sent successfully!");
  } catch (error) {
    console.error("Error sending data: ", error);
    throw error;
  }
};

export const updateContactData = async (userData) => {
  try {
    const dbRef = ref(database, "contact");
    const newProspectRef = push(dbRef);
    await set(newProspectRef, userData);
    console.log("Data sent successfully!");
  } catch (error) {
    console.error("Error sending data: ", error);
    throw error;
  }
};
