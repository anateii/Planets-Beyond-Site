import styled from "styled-components";

export const Main = styled.main`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  cursor: url('https://image.similarpng.com/very-thumbnail/2021/07/Cursor-icon-illustration.png'), auto;
`;

export const Title = styled.h1`
  position: relative;
  top: 30%;
  font-family: 'League Spartan', sans-serif;
  font-size: 4em;
`;

export const Button = styled.button`
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

export const Subtitle = styled.span `
font-family: 'Antonio', sans-serif;
font-size: 2rem;
display: block;
font-weight: 400;


`;