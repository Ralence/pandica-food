/** @jsx jsx */
import { jsx, Grid } from "theme-ui";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import MainBrandArea from "../src/components/MainBrandArea";
import ImgBanner from "../src/components/ImgBanner";
import Gallery from "../src/components/Gallery";
import Recommendation from "../src/components/Recommend";
import theme from "../theme";

import dynamic from "next/dynamic";

import { fetchInstagramPhotos } from "../utils";

const MapWithNoSSR = dynamic(() => import("../src/components/map/Map"), {
  ssr: false,
});

const index = () => {
  return (
    <Fragment>
      <Grid
        width={[300, 300]}
        columns={["1fr", "1fr 300px"]}
        sx={{ width: "100%", maxWidth: "1200px", backgroundColor: "white", padding: "25px 5px" }}
      >
        <MainBrandArea title="Restoran Pandica" subTitle="Najbolja kineska hrana u gradu!">
          <p id="fp-top" sx={{ fontSize: 3, textAlign: "center", margin: 0 }}>
            Za vas vršimo pripremu i dostavu kineskih jela vrhunskog ukusa i kvaliteta!
          </p>

          <p sx={{ fontSize: 3, textAlign: "center", margin: 0 }}>
            Poručite brzo i lako,
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
        <ImgBanner image={"/plate2.jpg"} alt="chef with a wok" />
      </Grid>

      {/* <Recommendation /> */}
      <Gallery />
      <div
        sx={{
          variant: "containers.card",
          width: "100%",
          maxWidth: "1200px",
          padding: "15px",
          padding: 0,
          ".pointer": {
            border: "1px solid gray",
            borderRadius: "10px",
            boxShadow: "3px 3px 3px gray",
          },
        }}
      >
        <MapWithNoSSR />
      </div>
    </Fragment>
  );
};

// export async function getStaticProps() {
//   const data = await fetchInstagramPhotos("https://www.instagram.com/pandicafood/");

//   return {
//     props: {
//       images: data,
//     },
//   };
// }

export default index;
