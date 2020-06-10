import styled from "styled-components";

export const CartListWrapper = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(#808080, #d9d9d9);
  text-align: center;

  .flex-container {
    /*background: red;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
  }

  .flex-container > div {
    /*background: yellow;*/
    width: 400px;
    margin: 30px 10px 30px 10px;
    text-align: center;
  }

  h2 {
    margin: 10px;
    color: #303030;
    font-size: 1.5rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
  }

  .divisor {
    margin-right: 50px;
    color: #303030;
    background-color: #303030;
    height: 1;
    margin-left: 50px;
  }

  @media screen and (min-width: 767px) {
    .divisor {
      display: none;
    }
  }
`;
