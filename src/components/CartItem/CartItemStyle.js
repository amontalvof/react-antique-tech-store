import styled from "styled-components";

export const CartItemWrapper = styled.div`
  .flex-container {
    /*background: blue;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: stretch;
  }

  .flex-container > div {
    /*background: white;*/
    width: 300px;
    text-align: center;
    align-self: center;
  }

  h3 {
    color: #303030;
    font-size: 1.3rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
  }

  h4 {
    color: #303030;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
  }

  h5 {
    color: #3a2fd0;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
  }

  img {
    width: 50%;
  }

  .trashItem {
    font-size: 1.3rem;
  }

  .trashItem:hover {
    color: ${(props) => props.theme.rainbow.palette.error.main};
    cursor: pointer;
  }

  .countItem {
    font-size: 1.3rem;
  }

  .countItem:hover {
    color: #3a2fd0;
    cursor: pointer;
  }

  @media screen and (min-width: 767px) {
    .flex-container > div {
      width: 120px;
    }
  }

  @media screen and (min-width: 1023px) {
    .flex-container > div {
      width: 170px;
    }
  }

  @media screen and (max-width: 350px) {
    .flex-container > div {
      width: 150px;
    }
  }
`;
