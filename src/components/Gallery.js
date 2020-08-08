/** @jsx jsx */
import { jsx, Grid } from "theme-ui";
import { Fragment } from "react";

const Gallery = () => {
  return (
    <article
      sx={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 sx={{ fontWeight: "bold" }}>熊猫:真好吃!</h1>
      <Grid
        sx={{
          width: "100%",
          height: "600px",
          display: "grid",
          gridTemplateAreas: "'first second' 'first third'",
          gap: 0,
          "@media screen and (max-width: 700px)": {
            gridTemplateAreas: "'first' 'second' 'third'",
          },
        }}
      >
        <img
          src="/panda.jpg"
          sx={{
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            gridArea: "first",
            objectFit: "cover",
          }}
        ></img>
        <img
          src="/panda1.jpg"
          sx={{
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            gridArea: "second",
            objectFit: "cover",
          }}
        ></img>
        <img
          src="/panda2.jpg"
          sx={{
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            gridArea: "third",
            objectFit: "cover",
          }}
        ></img>
      </Grid>
    </article>
  );
};

export default Gallery;
