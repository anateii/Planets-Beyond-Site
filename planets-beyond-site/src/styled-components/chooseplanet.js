import styled from "styled-components";
import { motion } from "framer-motion";

const BACKGROUND = 'transparent';



export const Title= styled(motion.h1) `
text-align: left;
padding-left: 8rem;
font-family: 'Antonio', sans-serif;
letter-spacing: 0.1rem;
font-size: 4rem;
margin-top: 0.5rem;

`;

export const Subtitle= styled(motion.h4) `
text-align: left;
padding-left: 8rem;
font-family: 'League Spartan', sans-serif;
font-weight: 400;
margin-top: 0.5rem;
position: relative;

`;



export const Container = styled.div `
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

`;


export const Col = styled(motion.div) `

/* &:hover {cursor:pointer;}; */
background-color: ${BACKGROUND};
font-family: 'Antonio', sans-serif;
font-size: 25px;  
display: flex;
flex-direction: column;
justify-content: space-between;
&>div {
background-color:transparent;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&>img{
    width: 150px;
};
};

&div:nth-of-type(6n)> img {
    width: 170px;
};


`;