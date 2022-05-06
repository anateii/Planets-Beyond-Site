import styled from "styled-components"

export const ModalBody = styled.div `
display: none;
    position: fixed; 
    z-index: 1; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 

`


export const ModalContent = styled.div `
position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: px;
        grid-row-gap: 0px;
        display: flex;
        color: black;
        height: 70%;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        
`

export const ModalClose = styled.div `


`