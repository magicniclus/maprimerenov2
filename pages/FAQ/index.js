import React from "react";
import Basic from "../../layout/Basic";
import FAQ from "../../components/FAQ/FAQ";
import BlogContainer from "../../components/blogs/BlogContainer";
import CTA from "../../components/CTA/CTA";

const index = () => {
  return (
    <Basic>
      <h1 className="mt-20 text-4xl font-bold tracking-tight text-dark text-center">
        Nous répondons à vos questions
      </h1>
      <FAQ />
      <BlogContainer />
      <CTA />
    </Basic>
  );
};

export default index;
