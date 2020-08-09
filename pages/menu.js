/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment } from "react";

import ImgBanner from "../src/components/ImgBanner";

import MainBrandArea from "../src/components/MainBrandArea";

const menu = () => {
  return (
    <Fragment>
      <ImgBanner image={"/chopstick.jpg"} alt="chopsticks and bowl of noodles" />
      <MainBrandArea title="Naš Meni" subTitle="Odaberite nešto iz naše ponude!" />
    </Fragment>
  );
};

export default menu;
