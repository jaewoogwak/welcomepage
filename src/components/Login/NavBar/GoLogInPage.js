import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NavBarLogInBtn = styled.div`
  display: inline;
  text-decoration: none;

  font-size: 22px;
  color: black;
  font-weight: 400;
`;
const GoLogInPage = () => {
  return (
    <div>
      <NavBarLogInBtn>
        {" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </NavBarLogInBtn>
    </div>
  );
};

export default GoLogInPage;
