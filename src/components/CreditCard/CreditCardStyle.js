import styled from "styled-components";

export const CreditCardWrapper = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  /*background: linear-gradient(#808080, #d9d9d9);*/
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img}) center/ cover no-repeat;

  h2 {
    margin: 10px;
    color: #303030;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
  }

  .ccBack {
    width: 305px;
    margin: auto;
  }

  input[type="tel"] {
    font-size: 16px;
    background: ${(props) => props.theme.rainbow.palette.background.main};
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid
      ${(props) => props.theme.rainbow.palette.brand.main};
  }

  input[type="text"] {
    font-size: 16px;
    background: ${(props) => props.theme.rainbow.palette.background.main};
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid
      ${(props) => props.theme.rainbow.palette.brand.main};
  }

  input:focus {
    outline: 0 none;
  }
  input::placeholder {
    font-size: 16px;
  }

  @media screen and (min-width: 767px) {
    padding-top: 130px;
    min-height: 100vh;
    .ccBack {
      width: 600px;
    }
  }

  @media screen and (min-width: 1025px) {
    padding-top: 100px;
  }
`;
