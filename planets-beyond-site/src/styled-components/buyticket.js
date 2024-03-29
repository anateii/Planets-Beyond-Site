import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
  background-color: transparent;
  height: 500px;
  position: absolute;
  top: 20%;
  left: 14rem;
  right: 6rem;
  color: rgb(7, 7, 36);
  margin: auto;

  & > div {
    background-color: #ffffff61;
    border: 2px solid transparent;
    width: 90%;
    position: relative;

    & > h3 {
      margin-top: 2em;
      text-align: center;
      color: rgb(7, 7, 36);
      font-family: "League Spartan";
    }
    & > span {
      font-family: "League Spartan";
    }
    & > p:nth-of-type(1) {
      margin-top: 2em;
    }
    & > p:nth-of-type(4) {
      margin-bottom: 3em;
    }
    & > p {
      font-size: 20px;
      font-weight: 300;

      & > strong {
        font-family: "League Spartan";
        font-weight: 400;
      }
    }
  }
  & > div:nth-of-type(1) {
    grid-area: 1 / 2 / 2 / 3;
  }

  & > div:nth-of-type(2) {
    grid-area: 1 / 1 / 2 / 2;
  }

  & > div:nth-of-type(3) {
    background-color: red;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export const Button = styled(motion.div)`
  background-color: #ce57bb;
  color: #fff;
  margin-top: 2.5em;
  top: 45%;
  width: 50%;
  margin: 0 auto;
  border: 1px solid transparent;
  padding: 10px 50px;
  font-family: "League Spartan", sans-serif;
  font-size: 18px;
  &:hover {
    background-color: rgb(7, 7, 36);
    color: #fff;
    border: #ffffff21;
    scale: 1;
  }
  &:active {
    background-color: #fff;
    color: rgb(7, 7, 36);
    font-family: "League Spartan", sans-serif;
  }
  &:focus {
    outline: none;
  }
`;
