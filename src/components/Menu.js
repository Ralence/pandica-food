/** @jsx jsx */
import { jsx, Box, Card, Text, Image } from "theme-ui";
import React from "react";
import MenuSection from "./MenuSection";

import theme from "../../theme";
import styled from "@emotion/styled";

const MenuContainer = styled(Box)`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const Menu = ({ menu }) => {
  return (
    <MenuContainer
      sx={{
        p: "4",
        width: "100%",
        maxWidth: "1200px",
        border: "1px solid #0000001f",
        "@media screen and (max-width: 600px)": {
          paddingLeft: 1,
          paddingRight: 1,
        },
      }}
    >
      {menu && menu.supe && (
        <MenuSection title={menu.supe.title} image="/soup.jpg" items={menu.supe.items} />
      )}
      {menu && menu.glavna_jela && (
        <MenuSection
          image="/plate2.jpg"
          title={menu.glavna_jela.title}
          items={menu.glavna_jela.items}
          description={menu.glavna_jela.description}
          meats={menu.glavna_jela.meats}
          dodaci={menu.dodaci}
        />
      )}
      {menu && menu.specijalni_meni && (
        <MenuSection
          image="/box.jpg"
          title={menu.specijalni_meni.title}
          items={menu.specijalni_meni.items}
          description={menu.specijalni_meni.description}
          dodaci={menu.dodaci}
        />
      )}
      {menu && menu.vegetarijanski_meni && (
        <MenuSection
          image="/veg.jpg"
          title={menu.vegetarijanski_meni.title}
          items={menu.vegetarijanski_meni.items}
          description={menu.vegetarijanski_meni.description}
          dodaci={menu.dodaci}
        />
      )}
      {menu && menu.salate && (
        <MenuSection image="/veg.jpg" title={menu.salate.title} items={menu.salate.items} />
      )}
      {menu && menu.deserti && (
        <MenuSection image="/sweet.jpg" title={menu.deserti.title} items={menu.deserti.items} />
      )}
    </MenuContainer>
  );
};

export default Menu;
