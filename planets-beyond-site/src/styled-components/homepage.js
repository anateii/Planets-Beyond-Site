import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.main`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const Title = styled(motion.h1)`
 position: relative;
  top: 30%;
 font-family: 'League Spartan', sans-serif;
  font-size: 4em;
`;

export const Subtitle = styled(motion.h3) `
position: absolute;
top: 45%;
left: 37%;
font-family: 'Antonio', sans-serif;
font-size: 2rem;
font-weight: 400;
margin: 0 auto;

`;



export const Button = styled(motion.button)`
  background-color: #fff0;
  color: #fff;
  top: 45%;
  position: relative;
  border: 1px solid #ffffff21;
  padding: 10px 70px;
  font-family: 'League Spartan', sans-serif;
  font-size: 18px;
  &:hover {
      background-color: #ffffff21;
      border: #ffffff21;
      
    };
    &:active {
        background-color: #ddd;
        color:rgb(7,7,36);
        font-family: 'League Spartan', sans-serif;
    };
    &:focus {
      outline:none;
    }
`;

