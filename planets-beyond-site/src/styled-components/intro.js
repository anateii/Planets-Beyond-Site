import styled from "styled-components";
import {motion} from "framer-motion"

export const Container= styled.div`
width: 20%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
margin-top: 15%;
>h5 {
    color: #fff;
    margin: 0 auto;
}
`

export const Main2 = styled(motion.div)`

font-size: 1.5em;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  :not(#loading) {
      filter: blur(8px)
  }
  

`