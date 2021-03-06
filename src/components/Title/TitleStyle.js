import styled from "styled-components";

export const TitleWrapper = styled.div`
  .titleText {
    text-align: center;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 5vh;
    font-weight: 900;
    text-shadow: 2px 2px 3px #6860db, -2px -2px 3px #6860db;
    color: #303030;
    letter-spacing: 0.3rem;
    margin: auto;
  }

  @media screen and (max-width: 500px) {
    h1 {
      width: 300px;
    }
  }
`;
