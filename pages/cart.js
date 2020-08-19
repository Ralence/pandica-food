/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment } from "react";

import MainBrandArea from "../src/components/MainBrandArea";

import ImgBanner from "../src/components/ImgBanner";

const cart = () => {
  return (
    <Fragment>
      <ImgBanner image={"/wok.jpg"} alt="wok full of food" />
      <h1 sx={{ marginX: "20px" }}>Stranice je trenutno u fazi pripreme.</h1>
      <h2 sx={{ marginX: "20px" }}>
        Ukoliko želite da poručite nešto iz našeg menija pozovite jedan od seldećih brojeva
        telefonna:
      </h2>
      <h3>+381 061 14 33 418</h3>
      <h3>+381 061 14 33 419</h3>
      <MainBrandArea title="Vaša Korpa" subTitle="Trenutni sadržaj korpe:" />
    </Fragment>
  );
};

export default cart;
