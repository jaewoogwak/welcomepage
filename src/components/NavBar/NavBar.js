import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
    grid-template-columns: 6fr 1fr 1fr;
    text-align: start;
    box-shadow: 5px 5px 9px;
  }
  height: 100px;
`;
const Logo = styled.strong`
  text-align: start;
  font-size: 24px;
  @media screen and (max-width: 786px) {
    font-size: 18px;
  }
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
  const buttons = ["Log in", "Sign up"];
  return (
    <div>
      <NavBarWrapper>
        <NavBarLogo>
          <Logo>jaewooworld</Logo>
        </NavBarLogo>
        {buttons.map((button) => (
          <NavBarBtn key={button.toString()}>
            <NavLink
              to={button === "Log in" ? "/" : "/signup"}
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  color: isActive ? "red" : "black",
                };
              }}
            >
              {button}
            </NavLink>
          </NavBarBtn>
        ))}
      </NavBarWrapper>
    </div>
  );
};

export default NavBar;

const NavBarBtn = styled.div`
  display: inline;
  text-decoration: none;
  font-size: 22px;
  color: black;
  font-weight: 400;
`;
