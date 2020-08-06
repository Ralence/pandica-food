import React from "react";
import styled from "@emotion/styled";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const TopBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-family: "Roboto";
`;

const AppTop = () => {
  return (
    <TopBar>
      Follow us on social media:
      <FacebookIcon fill="beige" />
      <InstagramIcon fill="beige" />
    </TopBar>
  );
};

export default AppTop;
