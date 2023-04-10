import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  background-color: #ffffff21;
  height: 570px;
  width: 400px;
  position: absolute;
  top: 15%;
  left: 14rem;
  right: 6rem;
  margin: auto;

  & > div > div {
    margin-top: 3em;
  }
`;
