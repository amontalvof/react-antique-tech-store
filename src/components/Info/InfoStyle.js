import styled from "styled-components";

export const InfoWrapper = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(#808080, #d9d9d9);

  p {
    font-size: 2.5vh;
    margin: 0 20px 0;
  }

  @media screen and (min-width: 767px) {
    p {
      margin: 0 100px 0;
    }
  }

  @media screen and (min-width: 1025px) {
    p {
      margin: 0 200px 0;
    }
  }
`;
