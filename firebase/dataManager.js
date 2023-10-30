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

export const updateUserData = async (userData, entrepriseId) => {
  try {
    const dbRef = ref(database, `prospect/${entrepriseId}`);
    const newProspectRef = push(dbRef);
    await set(newProspectRef, userData);
    console.log("Data sent successfully!");
  } catch (error) {
    console.error("Error sending data: ", error);
    throw error;
  }
};

export const updateUserDataForEnterprise = (entrepriseId, data) => {
  const database = getDatabase();
  const userRef = ref(database, `prospect/${entrepriseId}`); // Ajustez le chemin selon vos besoins
  return push(userRef, data)
    .then(() => {
      console.log(
        "Données utilisateur ajoutées avec succès pour l'entreprise !"
      );
    })
    .catch((error) => {
      console.error(
        "Erreur lors de l'ajout des données utilisateur pour l'entreprise:",
        error
      );
    });
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

  const contactsRef = ref(database, "prospect/allProspect");

  const listener = onValue(contactsRef, (snapshot) => {
    let contactsArray = [];
    const data = snapshot.val();

    if (data) {
      contactsArray = Object.values(data)
        .sort((a, b) => {
          if (!a.newDate || typeof a.newDate !== "string") {
            console.error("Invalid newDate in object A:", a);
            return 0;
          }

          console.log("Date string before conversion A:", a.newDate);
          const dateA = new Date(convertDateToISO(a.newDate));
          console.log("Date after conversion A:", dateA);

          if (!b.newDate || typeof b.newDate !== "string") {
            console.error("Invalid newDate in object B:", b);
            return 0;
          }

          console.log("Date string before conversion B:", b.newDate);
          const dateB = new Date(convertDateToISO(b.newDate));
          console.log("Date after conversion B:", dateB);

          return dateB - dateA; // Tri décroissant
        })
        .slice(startAtVal, endAtVal + 1);
    }

    callback(contactsArray);
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

export const updateUserDataForProspect = (entrepriseId, data) => {
  const database = getDatabase();
  const userRef = ref(database, `prospect/${entrepriseId}`);
  return push(userRef, data)
    .then(() => {
      console.log("User data successfully added for the enterprise!");
    })
    .catch((error) => {
      console.error("Error adding user data for the enterprise:", error);
    });
};

export const updateProspect = (data) => {
  const database = getDatabase();
  const userRef = ref(database, `prospect/allProspect`);
  return push(userRef, data)
    .then(() => {
      console.log("User data successfully added for the enterprise!");
    })
    .catch((error) => {
      console.error("Error adding user data for the enterprise:", error);
    });
};
