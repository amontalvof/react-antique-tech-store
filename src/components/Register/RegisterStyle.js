import styled from "styled-components";

export const RegisterWrapper = styled.div`
  margin: 0 20px 0 20px;
  p {
    text-align: center;
    font-size: 15px;
    padding: 0 16px;
  }
  p:hover {
    cursor: pointer;
  }

  input[type="email"] {
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

  input[type="password"] {
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
`;
