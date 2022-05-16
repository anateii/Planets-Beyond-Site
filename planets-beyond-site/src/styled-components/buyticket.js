import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 40px;
grid-row-gap: 0px;
background-color: transparent;
height: 500px;
position: absolute;
top: 15%;
left: 14rem;
right: 6rem;
& > div {
    background-color: #ffffff11;
    border: 2px solid #ffffff21;
    width:90%;
    &> h3 {
        margin-top: 2em;
    }
    

}
&> div:nth-of-type(1) {
    grid-area: 1 / 2 / 2 / 3;
   
    
   
}

& > div:nth-of-type(2) {
    grid-area: 1 / 1 / 2 / 2;
   
  
}

`