/** @jsx jsx */
import { jsx, Grid, Text, Flex, Spinner } from "theme-ui";
import { Fragment, useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { uid } from "react-uid";

import GalleryItem from "./GelleryItem";
import { fetchInstagramPhotos } from "../../utils";

const Container = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(null);
  const [error, setError] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      const data = await fetchInstagramPhotos("https://www.instagram.com/pandicafood/");

      setImages(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  });

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <Container
      sx={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <h1
        sx={{
          fontFamily: "cursive",
          fontSize: 6,

          marginTop: 5,
          marginBottom: 0,
          textAlign: "center",
          lineHeight: "1em",
          "@media screen and (max-width: 700px)": { fontSize: 5 },
        }}
      >
        Galerija
      </h1>
      <Text
        sx={{
          fontSize: 3,
          fontWeight: 700,
          textAlign: "center",
          margin: 5,
          marginTop: "1em",
          color: "secondary",
        }}
      >
        Pogledajte izbor fotografija hrane i enterijera
      </Text>
      <Flex sx={{ m: "30px", justifyContent: "space-around", flexWrap: "wrap" }}>
        {loading && <Spinner />}
        {error && (
          <Flex
            sx={{
              variant: "containers.card",
              paddingY: "10px",

              margin: 2,
              backgroundColor: "background",
              width: "100%",
              maxWidth: "700px",
              justifyContent: "space-around",
              alignItems: "center",
              marginX: "auto",
            }}
          >
            <Text p={2} sx={{ fontSize: 4, fontWeight: "bold" }}>
              Došlo je do greške prilikom učitavanja galerije. Da pogledate slike posetite naš{" "}
              <a target="_blank" href="https://www.instagram.com/pandicafood/">
                Instagram profil
              </a>
            </Text>
          </Flex>
        )}
        {images && images.map((image) => <GalleryItem key={uid(image)} image={image} />)}
      </Flex>
    </Container>
  );
};

export default Gallery;
