import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.rainbow.palette.background.main};

  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    border-top: 3px solid #6860db;
  }

  .flex-container > div {
    width: 500px;
    margin: 10px;
    text-align: center;
  }

  p {
    color: #303030;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  .iconosSociales {
    font-size: 1.5rem;
    color: #303030;
    transition: all 0.3s linear;
    padding: 0 2rem 0;
  }
  .iconosSociales:hover {
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    cursor: pointer;
  }

  @media (max-width: 450px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
