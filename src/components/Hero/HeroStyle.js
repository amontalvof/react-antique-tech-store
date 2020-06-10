import styled from "styled-components";

export const HeroWrapper = styled.div`
  .heroBack {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${(props) => (props.max ? "100vh" : "60vh")};
    background: ${(props) =>
        props.cart
          ? "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))"
          : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"},
      url(${(props) => props.img}) center/ cover no-repeat;
  }

  .title {
    color: ${(props) => props.theme.rainbow.palette.background.main};
    padding-top: 3rem;
    font-size: 2.5rem;
    text-shadow: 0 0 8px #6860db, 0 0 8px #6860db;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
  }
  p {
    display: none;
    color: #303030;
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
    text-shadow: 2px 2px 3px rgb(255, 255, 255),
      -2px -2px 3px rgb(255, 255, 255);
  }

  @media screen and (min-width: 767px) {
    p {
      display: block;
    }
    .title {
      font-size: 3.5rem;
    }
  }

  @media screen and (min-width: 1025px) {
    .heroBack {
      text-align: left;
    }
    .title {
      font-size: 4.5rem;
    }
  }
`;
