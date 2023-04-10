import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
`;

export const MainIntro = styled(motion.div)`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  :not(#loading) {
    filter: blur(8px);
  }
`;
