import {
  ref,
  push,
  set,
  get,
  onValue,
  off,
  getDatabase,
} from "firebase/database";
import { convertDateToISO } from "../utils/convertDateToISO.js";
import app from "./firebase.config";

const database = getDatabase(app);

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

export const getAllContacts = async () => {
  try {
    const dbRef = ref(database, "prospect");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No contacts found");
      return {};
    }
  } catch (error) {
    console.error("Error fetching contacts: ", error);
    throw error;
  }
};

export const watchContacts = (pageNumber, callback) => {
  const numberOfDocumentsPerPage = 10;
  const startAtVal = (pageNumber - 1) * numberOfDocumentsPerPage;
  const endAtVal = pageNumber * numberOfDocumentsPerPage - 1;

  const contactsRef = ref(database, "prospect");

  const listener = onValue(contactsRef, (snapshot) => {
    let contactsArray = [];
    const data = snapshot.val();

    if (data) {
      contactsArray = Object.values(data)
        .sort((a, b) => {
          const dateA = new Date(convertDateToISO(a.date));
          const dateB = new Date(convertDateToISO(b.date));
          return dateB - dateA; // Tri décroissant
        })
        .slice(startAtVal, endAtVal + 1);

      console.log("Data from Firebase:", contactsArray);
    }

    callback(contactsArray);
    console.log("Data from Firebase:", data);
  });

  return () => off(contactsRef, "value", listener);
};

export const getTotalContactsCount = async () => {
  try {
    const dbRef = ref(database, "prospect");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return Object.keys(snapshot.val()).length; // Renvoie la taille des contacts
    } else {
      console.log("No contacts found");
      return 0;
    }
  } catch (error) {
    console.error("Error fetching contacts count: ", error);
    throw error;
  }
};
