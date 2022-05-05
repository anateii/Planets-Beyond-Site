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
  &:hover {
    color: #fff;
  }
`;

export const Container = styled.div`
  
  height: 500px;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  position: absolute;
  top: 2em;
  left: 12em;
`;

export const Planet = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  &>img {
    width:400px;
  }
`;

export const Text = styled.div`
  & > h1 {
    font-family: "Antonio", sans-serif;
    text-align: left;
  }
  & > h6 {
    font-family: "League Spartan", sans-serif;
    font-weight: 400;
    text-align: left;
    line-height: 1.5em;
    margin-top: 0;
  };
  & > div {
    text-align: left;
    display: inline-block;
   font-weight: 300;
   font-size: 18px;
   color: #ffffff80;
  };
  & > div > div {
display: initial;
font-weight: 600;
text-decoration: underline;
&:hover{#fff;} ;
  };
  display: flex;
  flex-direction: column;
`;
