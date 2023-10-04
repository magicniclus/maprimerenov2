import React from "react";
import Cards from "../../components/contents/Cards";
import FormLanding from "../../components/contents/FormLanding";
import Video from "../../components/contents/Video";
import HeaderLanding from "../../components/headers/headerLanding";
import Basic from "../../layout/Basic";

const index = () => {
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
