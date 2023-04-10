import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  background-color: #ffffff21;
  height: 570px;
  width: 400px;
  position: absolute;
  top: 15%;
  left: 14rem;
  right: 6rem;
  margin: auto;

  > form {
    position: relative;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;

    & > div {
      & > select {
        font-size: 18px;
        margin-top: 0.3em;
        height: 40px;
        font-family: "League Spartan";
        color: #fff;
        background-color: rgb(7, 7, 36, 0.5);
        border: 1px solid transparent;
        outline: none;
        & > option:nth-child(1) {
          background: black);
        }
      }
      & > input {
        font-size: 18px;
        background-color: rgb(7, 7, 36, 0.5);
        color: #fff;
        font-family: "League Spartan", sans-serif;
        border: 1px solid transparent;
        outline: none;
        & > ::placeholder {
          color: #ffffff51;
        }
      }
    }

    & > input {
      font-size: 18px;
      background-color: rgb(7, 7, 36, 0.5);
      color: #fff;
      font-family: "League Spartan", sans-serif;
      border: 1px solid transparent;
      outline: none;
      & > ::placeholder {
        color: #ffffff51;
      }
    }
  }
`;

export const Button = styled(motion.div)`
  background-color: #ce57bb;
  transform: translateY(-50px);
  color: #fff;
  margin-top: 0;
  margin-bottom: 2em;
  top: 40%;
  width: 8em;

  text-align: center;

  border: 1px solid transparent;
  padding: 10px 10px;
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
