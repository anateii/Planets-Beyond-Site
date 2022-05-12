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
`;

export const Title = styled(motion.h1)`
 position: relative;
  top: 30%;
 font-family: 'League Spartan', sans-serif;
  font-size: 4em;
  @media screen and (max-width: 425px) {
    font-size: 3em;
    display: flex;
    flex-wrap: wrap;
    line-height: initial;
  }
`;

export const Subtitle = styled(motion.h3) `
position: absolute;
top: 45%;
left: 37%;
font-family: 'Antonio', sans-serif;
font-size: 2rem;
font-weight: 400;
margin: 0 auto;
@media screen and (max-width: 425px) {
  left: 10%;
  top: 55%;
  font-size: 1em;
};
@media screen and (min-width: 425px, max-width: 768px) {
  left: 28%
};


`;



export const Button = styled(motion.button)`
@media screen and (max-width: 425px) {
  top: 60%;
};  

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
      scale: 1;
      
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

