import React from "react";
import styled from "@emotion/styled";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const TopBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-family: "Roboto";
  * {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Section = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

const AppTop = () => {
  return (
    <TopBar>
      <Section>
        Follow us on social media:
        <FacebookIcon fill="beige" />
        <InstagramIcon fill="beige" />
      </Section>
      <Section>
        <QueryBuilderIcon fill="beige" />
        10:00 - 21:00
        <ContactPhoneIcon fill="beige" />
        011/111-2222
      </Section>
    </TopBar>
  );
};

export default AppTop;
