import styled from "styled-components";

const BACKGROUND = 'transparent';



export const Title= styled.h1 `
text-align: left;
padding-left: 4rem;
font-family: 'Antonio', sans-serif;
letter-spacing: 0.1rem;
font-size: 4rem;
margin-top: 0.5rem;

`;

export const Subtitle= styled.h4 `
text-align: left;
padding-left: 4rem;
font-family: 'League Spartan', sans-serif;
font-weight: 500;
margin-top: -1rem;
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


export const Col = styled.div `
background-color: transparent;
border-radius: 50%;
font-family: 'Antonio', sans-serif;
font-size: 25px;  
display: flex;
flex-direction: column;
justify-content: space-between;
&>div {
background-color: #ffffff21;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&>img{width: 150px;};
};
&>span {
    color: pink;
};
&div:nth-of-type(6n)> img {
    width: 170px;
}
`;