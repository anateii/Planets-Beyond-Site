import styled from "styled-components";

/*SIDEBAR*/

export const SideBar = styled.div`
  background-color: #ffffff21;
  height: 100%;
  width: 4em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  border-right: 2px solid #ffffff21;
`;

export const Icon = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > div > img {
    width: 56px;
  }
  font-size: 16px;
  color: #ffffff60;
  &:hover {color:#fff;};
`;


export const Container = styled.div `
background-color: transparent;
    height: 500px;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    position: absolute;
    top: 2em;
    left: 5em;
`

export const Planet = styled.div `

display: flex;
flex-direction: column;
`


export const Text = styled.div `
font-family: 'Antonio', sans-serif;
display: flex;
flex-direction: column;
`
