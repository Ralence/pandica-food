/** @jsx jsx */
import { jsx, Flex, Text } from "theme-ui";
import styled from "@emotion/styled";
import React, { Component, createRef } from "react";
import { Map, TileLayer, Marker, Popup, MapControl, withLeaflet } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

import L from "leaflet";

export const pointerIcon = new L.Icon({
  iconUrl: "/pandicaLogo1.jpg",
  iconRetinaUrl: "/pandicaLogo1.jpg",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [50],
  className: "pointer",
});

const pandaIcon = styled(pointerIcon)`
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 3px 3px 3px gray;
`;

export default class MyMap extends Component {
  state = {
    center: {
      lat: 44.744962,
      lng: 20.4356063,
    },
    marker: {
      lat: 44.744962,
      lng: 20.4356063,
    },
    zoom: 17,
    draggable: false,
  };

  refmarker = createRef(this.state.marker);

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];

    return (
      <div
        className="map-root"
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
        <Flex
          sx={{
            variant: "containers.card",
            paddingY: "10px",
            flexDirection: "column",
            margin: 0,
            backgroundColor: "background",
            width: "100%",
            maxWidth: "1200px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text
            p={2}
            as="h1"
            sx={{
              fontFamily: "cursive",
              fontSize: 6,
              marginBottom: 0,
              marginTop: 3,
              textAlign: "center",
              lineHeight: "1em",
              "@media screen and (max-width: 700px)": { fontSize: 5 },
            }}
          >
            Lokacija
          </Text>

          <Text
            sx={{
              fontSize: 3,
              fontWeight: 700,
              textAlign: "center",
              margin: 0,
              marginBottom: 3,
            }}
          >
            Pilota Mihaila Petrovića 5a 11090 Rakovica, Serbia
          </Text>
        </Flex>
        <Map
          center={position}
          zoom={this.state.zoom}
          scrollWheelZoom={false}
          sx={{
            height: "400px",
            width: "100%",
            "@media screen and (max-width: 450px)": {
              height: "250px",
            },
          }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            draggable={false}
            icon={pointerIcon}
            position={markerPosition}
            animate={true}
            ref={this.refmarker}
          >
            <Popup>Pilota Mihaila Petrovića 5a 11090 Rakovica</Popup>
          </Marker>
        </Map>
        <style jsx>
          {`
            .map-root {
              height: 100%;
            }
            .leaflet-container {
              height: 400px;
              width: 80%;
              margin: 0 auto;
            }
            @media screen and (max-width: 450px): {
                .leaflet-container {
                     height: "250px";
                }
              },
          `}
        </style>
      </div>
    );
  }
}
