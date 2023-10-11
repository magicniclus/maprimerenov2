import React from "react";
import Basic from "../../layout/Basic";
import BlogContainer from "../../components/blogs/BlogContainer";
import { useRouter } from "next/router";

const index = () => {
  return (
    <Basic>
      <div className="w-full min-h-[calc(100vh-100px)] bg-opacity-100 lg:bg-opacity-0  max-w-[1250px] mx-auto px-5 lg:pb-10 lg:px-20 flex justify-center flex-col items-center">
        <div className="flex flex-col items-center py-52">
          <h1 className="text-dark mt-10 text-4xl font-bold tracking-tight sm:text-4xl text-center">
            Vous semblez éligible à plusieurs aides de l'état.
          </h1>
          <h2 className="mt-5 text-dark">
            Afin d'en savoir plus et connaître vos aides un expert vous
            contactera dans les 24/48h.
          </h2>
        </div>
        {/* <CTA /> */}
        <BlogContainer />
      </div>
    </Basic>
  );
};

export default index;
