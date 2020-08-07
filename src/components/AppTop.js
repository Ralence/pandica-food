import React from "react";
import styled from "@emotion/styled";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineClockCircle,
  AiOutlinePhone,
} from "react-icons/ai";
/*
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
*/
const TopBar = styled.div`
  width: 100%;
  min-height: 35px;
  background-color: #313130;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #fff;
  font-family: "Roboto";
  padding-left: 20px;
  padding-right: 20px;
  * {
    margin-left: 5px;
    margin-right: 5px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  @media only screen and (min-width: 1000px) {
    padding-left: calc((100% - 1200px) / 2);
    padding-right: calc((100% - 1200px) / 2);
  }
`;

const Section = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

const FbIcon = styled(AiFillFacebook)`
  color: #28a6f7;
`;

const InstaIcon = styled(AiOutlineInstagram)`
  color: #da545c;
`;

const ClockIcon = styled(AiOutlineClockCircle)`
  color: #ff3427;
  margin-left: 0;
`;

const PhoneIcon = styled(AiOutlinePhone)`
  color: #ff3427;
`;

const AppTop = () => {
  return (
    <TopBar>
      <Section>
        Društvene mreže:
        <a href="https://www.facebook.com/" target="_blank">
          <FbIcon />{" "}
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <InstaIcon />
        </a>
      </Section>
      <Section>
        <ClockIcon />
        10:00 - 21:00
        <PhoneIcon />
        011/111-2222
      </Section>
    </TopBar>
  );
};

export default AppTop;
