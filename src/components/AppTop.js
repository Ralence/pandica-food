/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineClockCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { keyframes } from "@emotion/core";
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
const green = keyframes`
  40% {
    background-color: green;
  } 
  80% {
    background-color: #42a042;
  }
`;

const red = keyframes`
 40% {
   background-color: red;
 } 
 80% {
   background-color: tomato;
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
  let [isWeekend, setIsWeekend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const today = new Date();
    if (today.getDay() == 6 || today.getDay() == 0) {
      setIsWeekend(true);
    } else {
      setIsWeekend(false);
    }
  }, []);

  const isOpenNow = () => {
    const today = new Date();
    const hour = today.getHours();
    return isWeekend && hour > 12 && hour < 23
      ? true
      : !isWeekend && hour > 10 && hour < 23
      ? true
      : false;
  };

  useEffect(() => {
    setIsOpen(isOpenNow());
  }, [isWeekend, isOpenNow]);

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
        <div
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: isOpen ? "green" : "red",
            animation: `${!isOpen ? red : green} 1.5s linear infinite`,
          }}
        ></div>
        {isWeekend ? "12:00 - 23:00" : "10:00 - 23:00"}
        <PhoneIcon />
        061/14-33-418
      </Section>
    </TopBar>
  );
};

export default AppTop;
