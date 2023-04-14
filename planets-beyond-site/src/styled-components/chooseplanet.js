import styled from "styled-components";
import { motion } from "framer-motion";

const BACKGROUND = "transparent";

export const Title = styled(motion.h1)`
  text-align: left;
  padding-left: 8rem;
  text-align: center;
  font-family: "Antonio", sans-serif;
  color: white;
  letter-spacing: 0.1rem;
  font-size: 26px;
  margin-top: 4rem;
  @media (max-width: 375px) {
    padding-left: 2rem;
  }
`;

export const Subtitle = styled(motion.h4)`
  text-align: left;
  color: white;
  padding-left: 8rem;
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  margin-top: 0.5rem;
  text-align: center;
  position: relative;
  @media (max-width: 375px) {
    padding-left: 2rem;
  }
`;

export const Container = styled.div`
  background-color: ${BACKGROUND};
  height: 500px;
  position: absolute;
  left: 4rem;
  right: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 2rem;
  }

  #media screen and (max-width:456px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 756px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2rem;
  }
`;

export const Col = styled(motion.div)`
  /* &:hover {cursor:pointer;}; */
  background-color: ${BACKGROUND};
  font-family: "Antonio", sans-serif;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    background-color: transparent;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > h4 {
      color: #ffffff;
      font-weight: 400;
    }
    & > img {
      width: 150px;
    }
  }

  &div:nth-of-type(6n) > img {
    width: 170px;
  }
`;
