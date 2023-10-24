import Table from "../../../components/partner/Table";
import Pagination from "../../../components/partner/Pagination";
import { useSelector, useDispatch } from "react-redux";
import React, { use, useEffect, useState } from "react";
import { watchContacts } from "../../../firebase/dataManager";
import Pertner from "../../../layout/Pertner";

const index = () => {
  const getPagination = useSelector((state) => state.pagination);
  const [contacts, setContacts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = watchContacts(getPagination, (newContacts) => {
      console.log("New contacts received:", newContacts);
      console.log("Setting contacts in redux:", contacts);
      setContacts(newContacts);
    });

    // Lorsque le composant est démonté, arrêtez d'écouter les changements
    return () => unsubscribe();
  }, [getPagination]);

  useEffect(() => {
    dispatch({ type: "SET_CONTACTS", payload: contacts });
  }, [contacts]);

  return (
    <Pertner>
      <Table />
      <Pagination />
    </Pertner>
  );
};

export default index;
