import styled, { keyframes } from "styled-components";

const loading = keyframes`
from {
    left: -200px;
}

to {
    left: 100%;
}

`;

const StyledSkeleton = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  background: #fff !important;
  position: relative;
  overflow: hidden;
  margin-top: 1em;
  padding-left: 2em;

  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    background: linear-gradient(to right, #fff 0%, #dfdfdf 50%, #fff 100%);
    animation: ${loading} 1s ease-in-out infinite;
  }
`;

const Skeleton = ({ width, height, number }) => {
  return number ? (
    [...Array(number)].map((skeleton, index) => {
      return <StyledSkeleton width={width} height={height} key={index} />;
    })
  ) : (
    <StyledSkeleton width={width} height={height} />
  );
};

export default Skeleton;
