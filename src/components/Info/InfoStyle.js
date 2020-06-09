import styled from "styled-components";

export const InfoWrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(#808080, #d9d9d9);
  padding-top: 50px;

  p {
    font-size: 2vh;
    margin: 0 20px 0;
  }

  @media screen and (min-width: 1025px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 767px) {
    padding-top: 130px;

    p {
      font-size: 2.5vh;
      margin: 0 100px 0;
    }
  }
`;
