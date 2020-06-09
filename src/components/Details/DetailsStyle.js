import styled from "styled-components";

export const DetailsWrapper = styled.div`
  background-image: linear-gradient(#808080, #d9d9d9);
  padding-top: 50px;
  .flex-container {
    display: flex;
    flex-flow: row wrap;
    /*background-color: DodgerBlue;*/
    justify-content: center;
    align-items: center;
  }

  .flex-container > div {
    /*background-color: #f1f1f1;*/
    width: 500px;
    margin: 10px;
    text-align: left;
  }

  h1 {
    margin: 10px;
    color: #303030;
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
    text-shadow: 2px 2px 3px rgb(255, 255, 255),
      -2px -2px 3px rgb(255, 255, 255);
  }

  h2 {
    margin: 10px;
    font-size: 1.5rem;
  }
  h2 > strong {
    color: ${(props) => props.theme.rainbow.palette.brand.main};
  }
  p {
    margin: 10px;
    font-size: 1.1rem;
  }

  @media screen and (min-width: 1023px) {
    padding-top: 100px;
    p {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 767px) {
    padding-top: 130px;
    height: 105vh;
  }
`;
