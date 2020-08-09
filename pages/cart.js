/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment } from "react";

import MainBrandArea from "../src/components/MainBrandArea";

import ImgBanner from "../src/components/ImgBanner";

const cart = () => {
  return (
    <Fragment>
      <ImgBanner image={"/wok.jpg"} alt="wok full of food" />
      <MainBrandArea title="Vaša Korpa" subTitle="Trenutni sadržaj korpe:" />
    </Fragment>
  );
};

export default cart;
