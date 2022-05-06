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
  left: 10em;
`;

export const Planet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > img {
    width: 370px;
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
    margin-bottom:0;
  };
  & > div {
    text-align: left;
    display: inline-block;
   font-weight: 300;
   font-size: 18px;
   color: #ffffff60;
  };
  & > div > div {
display: initial;
font-weight: 600;
text-decoration: underline;
margin-left: 6px;

  };
  & > div > div:hover {color:#fff};
  & > div > div > i {
    font-size: 12px;
    margin-left: 6px;
  }
  display: flex;
  flex-direction: column;
`;



export const Section = styled.div `
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 15px;
left: 8em;
width: 80%;
height: 80px;
position: absolute;
top: 80%;
& > div {
  border: 2px solid #ffffff21;
  text-align: left;
  
  
} ;

& > div > h6 {
 
  color: #ffffff50;
  margin-top: 20px;
  margin-left: 20px;
  font-family: 'League Spartan', sans-serif;
}

& > div > h3 {
   margin-left: 20px;
   font-family: 'Antonio', sans-serif;
   margin-bottom: 10px;
   margin-top: -20px;
   font-size: 36px;
}

`

export const Button = styled.button `
background-color: #fff0;
width: 50%;
margin-top: 25%;
color: #fff;
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
  }
`