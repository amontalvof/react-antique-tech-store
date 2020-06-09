import styled from "styled-components";

export const LoadingWrapper = styled.div`
  height: ${(props) => (props.pTop ? "40vh" : "100vh")};
  background-image: linear-gradient(#808080, #d9d9d9);

  .loadingSpinner {
    padding-top: ${(props) => (props.pTop ? "60px" : "200px")};
    text-align: center;
  }
  .loadingText {
    text-align: center;
  }

  h1 {
    font-size: 3vh;
    text-shadow: 2px 2px 3px #6860db, -2px -2px 3px #6860db;
    color: #303030;
  }
`;
