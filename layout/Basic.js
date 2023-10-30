import React, { useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Basic = (props) => {
  const title = props.title;
  const description = props.description;
  const keywords = props.keywords;
  const ogImage = props.ogImage;
  const ogUrl = props.ogUrl;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/images/logos/favicon.png" />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={ogUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
      </Head>
      <Header />
      <main className="">{props.children}</main>
      <Footer />
    </>
  );
};

export default Basic;
