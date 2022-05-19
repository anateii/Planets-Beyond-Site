import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  background-color: #ffffff21;
  height: 570px;
  position: absolute;
  top: 10%;
  left: 14rem;
  right: 6rem;
  & > form {
    width: 70%;
    margin: 0 auto;
    margin-top: 2em;
    & > div:nth-of-type(2) {
      justify-content: flex-start;
      column-gap: 20px;
      margin-left: 4.6em;
    }
    & > label {
      display: block;
      font-family: "League Spartan";
      font-size: 20px;
      margin-bottom: -0.5em;
      margin-left: -19em;
      margin-top: 0.5em;
    }
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      column-gap: 20px;
      margin-left: 4.6em;
      width: 60%;
      & > input {
        width: 20%;
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
      width: 70%;
      margin: 1em 0;
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

export const Button = styled.div`
  background-color: #ce57bb;
  transform: translateY(-30px);
  color: #fff;
  margin-top: 2em;
  top: 40%;
  width: 20%;
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
