import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NavBarSignUpBtn = styled.div`
  display: inline;
  text-decoration: none;
  font-size: 22px;
  color: black;
  font-weight: 400;
`;
const GoSignUpPage = () => {
  return (
    <div>
      <NavBarSignUpBtn>
        <Link to="signup" style={{ textDecoration: "none" }}>
          Sign up
        </Link>{" "}
      </NavBarSignUpBtn>
    </div>
  );
};

export default GoSignUpPage;
