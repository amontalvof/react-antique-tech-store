import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  .smallScreenNav {
    /*visibility: hidden;*/
    list-style-type: none;
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    margin-right: auto;
    margin-left: auto;
    padding: 10px 20px;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    font-size: 5vh;
    color: #303030;
    border-bottom: 3px solid #6860db;
  }

  .navbarLinks {
    color: #303030;
  }

  /*----------------------------------------------------------------------------------------------------------------------------*/

  ul.topnav {
    display: none;
    list-style-type: none;
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    border-bottom: 3px solid #6860db;
  }
  li {
    float: left;
    display: block;
    /*color: white;*/
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li.right {
    float: right;
  }

  h3 {
    font-size: 3vh;
    color: #303030;
  }

  h3:after {
    display: block;
    content: "";
    border-bottom: 4px solid
      ${(props) => props.theme.rainbow.palette.brand.main};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  h3:hover:after {
    transform: scaleX(1);
  }

  .openLogin:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 415px) {
    ul.topnav {
      display: block;
    }
  }

  @media screen and (min-width: 767px) {
    ul.topnav {
      padding-right: 5vw;
      padding-left: 5vw;
    }
    h3 {
      font-size: 2vh;
    }
    .smallScreenNav {
      display: none;
    }
  }

  @media screen and (min-width: 1025px) {
    ul.topnav {
      /*visibility: hidden;*/
      padding-right: 10vw;
      padding-left: 10vw;
    }
    h3 {
      font-size: 3vh;
    }
  }
`;
