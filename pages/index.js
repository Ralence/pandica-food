/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Fragment } from "react";
import MainBrandArea from "../src/components/MainBrandArea";
import ImgBanner from "../src/components/ImgBanner";
import Gallery from "../src/components/Gallery";
import theme from "../theme";

const index = () => {
  return (
    <Fragment>
      <ImgBanner image={"/chef.jpg"} alt="chef with a wok" />
      <MainBrandArea title="Restoran Pandica" subTitle="Najbolje kineska hrana u gradu!">
        <p sx={{ fontSize: 4, textAlign: "center", margin: 0 }}>
          Za vas vršimo pripremu i dostavu kineskih jela vrhunskog ukusa i kvaliteta!
        </p>

        <p sx={{ fontSize: 4, textAlign: "center", margin: 0 }}>
          Poručite hranu brzo i lako,
          <span
            sx={{
              fontWeight: "bold",
              color: theme.colors.secondary,
            }}
          >
            {" "}
            bez registracije, bez kreditne kartice, platite po dostavi!
          </span>
        </p>
      </MainBrandArea>
      <Gallery />
    </Fragment>
  );
};

export default index;
