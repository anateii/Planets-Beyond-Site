import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.main)`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-repeat: no-repeat;
  @media (max-width: 435px) {
    width: 100vw;
    height: 100vh;
    margin: auto;
    overflow: hidden;
  }
`;

export const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: auto;
  overflow: hidden;
`;

export const MainTitle = styled(motion.h1)`
  color: #fff;
  font-size: 4em;
  display: flex;
  flex-wrap: wrap;
  line-height: initial;

  @media screen and (max-width: 475px) {
    font-size: 3em;
  }
`;

export const MainSubtitle = styled(motion.h3)`
  color: #fff;
  font-family: "Antonio", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 475px) {
    font-size: 1em;
  }
`;

export const MainButton = styled(motion.button)`
  background-color: #fff0;
  color: #fff;
  margin-top: 4em;
  border: 1px solid #ffffff21;
  padding: 10px 70px;
  font-family: "League Spartan", sans-serif;
  font-size: 18px;
  &:hover {
    background-color: #ffffff21;
    border: #ffffff21;
    scale: 1;
  }
  &:active {
    background-color: #ddd;
    color: rgb(7, 7, 36);
    font-family: "League Spartan", sans-serif;
  }
  &:focus {
    outline: none;
  }
`;

export const Title = styled(motion.h1)`
  position: relative;
  top: 30%;
  font-family: "League Spartan", sans-serif;
  font-size: 4em;
  @media screen and (max-width: 425px) {
    font-size: 3em;
    display: flex;
    flex-wrap: wrap;
    line-height: initial;
  }
`;

export const Subtitle = styled(motion.h3)`
  position: relative;
  top: 30%;
  font-family: "Antonio", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin: 0 auto;
`;

export const Button = styled(motion.button)`
  @media screen and (max-width: 425px) {
    top: 60%;
  }

  background-color: #fff0;
  color: #fff;
  top: 45%;
  position: relative;
  border: 1px solid #ffffff21;
  padding: 10px 70px;
  font-family: "League Spartan", sans-serif;
  font-size: 18px;
  &:hover {
    background-color: #ffffff21;
    border: #ffffff21;
    scale: 1;
  }
  &:active {
    background-color: #ddd;
    color: rgb(7, 7, 36);
    font-family: "League Spartan", sans-serif;
  }
  &:focus {
    outline: none;
  }
`;
