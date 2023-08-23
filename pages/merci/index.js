import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MerciContainer from "../../components/MerciContainer";
import Router from "next/router";

const index = () => {
  const [isPixelInitialized, setPixelInitialized] = useState(false);
  useEffect(() => {
    if (!isPixelInitialized) {
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init("1598776293984358");
          ReactPixel.track("Lead");
          setPixelInitialized(true);
        });
    }
  }, [isPixelInitialized]);
  return (
    <>
      <Head>
        <title>CAMBIUM | Merci</title>
        <meta
          name="description"
          content="Cambium, la nouvelle résidence disponible à BREUILLET. Maison neuve à partir de 250000€. Contactez-nous pour plus d'informations."
        />
        <link
          rel="icon"
          href="https://www.signature-promotion.fr/wp-content/themes/signature/images/favicon.ico"
        />
      </Head>
      <Header />
      <main className="flex flex-col z-50">
        <MerciContainer />
      </main>
      <Footer />
    </>
  );
};

export default index;
