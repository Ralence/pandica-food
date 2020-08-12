/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment } from "react";

import ImgBanner from "../src/components/ImgBanner";
import Menu from "../src/components/Menu";

import MainBrandArea from "../src/components/MainBrandArea";

const menu = () => {
  return (
    <Fragment>
      <ImgBanner image={"/chopstick.jpg"} alt="chopsticks and bowl of noodles" />
      <MainBrandArea title="Naš Meni" subTitle="Odaberite nešto iz naše ponude!">
        <p sx={{ fontSize: 3, textAlign: "center", margin: 0 }}>
          Za vas smo pripremili bogat izbor jela i pića uključujući supe, ljubiš me u dupe
        </p>
      </MainBrandArea>
      <Menu />
    </Fragment>
  );
};

export default menu;
