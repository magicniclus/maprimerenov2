import React from "react";
import Cards from "../../components/contents/Cards";
import FormLanding from "../../components/contents/FormLanding";
import Video from "../../components/contents/Video";
import HeaderLanding from "../../components/headers/headerLanding";
import Basic from "../../layout/Basic";
import { useSelector, useDispatch } from "react-redux";

const index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.count);

  dispatch({ type: "SET_STATE", payload: { count: 2 } });

  return (
    <Basic>
      <HeaderLanding />
      <FormLanding />
      <Cards />
      <Video />
    </Basic>
  );
};

export default index;
