import styled from "styled-components";

export const ProductListWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 50px;
  background-image: linear-gradient(#808080, #d9d9d9);

  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .flex-container > div {
    width: 300px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
  }

  @media screen and (min-width: 767px) {
    padding-top: ${(props) => (props.pTop ? "20px" : "130px")};
  }

  @media screen and (min-width: 1025px) {
    padding-top: ${(props) => (props.pTop ? "20px" : "100px")};
  }
`;
