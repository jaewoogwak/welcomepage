import React from "react";
import styled from "styled-components";
import GoLogInPage from "./GoLogInPage";
import GoSignUpPage from "./GoSignUpPage";

const NavBarWrapper = styled.nav`
  border-bottom: 1px solid gray;
  display: grid;
  grid-template-columns: 6fr 1fr 1fr;
  text-align: center;
  align-items: center;
  box-shadow: 5px 5px 9px;
  @media screen and (max-width: 786px) {
    border-bottom: 1px solid gray;
    display: grid;
    grid-template-columns: 8fr 1fr;
    text-align: start;
    box-shadow: 5px 5px 9px;
  }
  height: 100px;
`;
const Logo = styled.strong`
  text-align: start;
  font-size: 24px;
`;
const NavBarLogo = styled.div`
  text-align: start;
  padding-left: 40px;
  font-size: 24px;
  @media screen and (max-width: 786px) {
    font-size: 18px;
  }
`;

const NavBar = () => {
  return (
    <div>
      <NavBarWrapper>
        <NavBarLogo>
          <Logo>jaewooworld</Logo>
        </NavBarLogo>
        <GoLogInPage />
        <GoSignUpPage />
      </NavBarWrapper>
    </div>
  );
};

export default NavBar;
