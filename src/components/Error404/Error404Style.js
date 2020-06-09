import styled from "styled-components";

export const Error404Wrapper = styled.div`
  #notfound {
    position: relative;
    height: 100vh;
    background-image: linear-gradient(#808080, #d9d9d9);
  }

  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .notfound {
    max-width: 460px;
    width: 100%;
    text-align: center;
    line-height: 1.4;
  }

  .notfound .notfound-404 {
    height: 158px;
    line-height: 153px;
  }

  .notfound .notfound-404 h1 {
    color: #303030;
    font-size: 220px;
    letter-spacing: 10px;
    margin: 0px;
    font-weight: 700;
    text-shadow: 2px 2px 8px #6860db, -2px -2px 8px #6860db;
  }

  .notfound .notfound-404 h1 > span {
    text-shadow: 2px 2px 8px #6860db, -2px -2px 8px #6860db, 0px 0px 8px #6860db;
  }

  .notfound p {
    font-family: "Josefin Sans", sans-serif;
    color: #303030;
    font-size: 3vh;
    font-weight: 400;
    margin: 60px 15px 15px;
  }

  @media only screen and (max-width: 480px) {
    .notfound .notfound-404 {
      height: 122px;
      line-height: 122px;
    }

    .notfound .notfound-404 h1 {
      font-size: 122px;
    }
  }
`;
