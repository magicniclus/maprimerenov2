import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Basic = ({ title, description, keywords, ogImage, ogUrl, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={ogUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
      </Head>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Basic;
