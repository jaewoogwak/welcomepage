import React from "react";
import styled from "styled-components";

const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  font-size: 20px;
  font-weight: 900;
  margin-top: 30px;
  border-radius: 20px 20px 0px 0px;
  background-color: #864adb;
  color: aliceblue;
  border: 0px;
  @media screen and (max-width: 786px) {
    font-size: 16px;
    width: 200px;
    height: 30px;
  }
`;

const LoginBtn = (props) => {
  return <LoginButton onClick={props.onClick}>Log In</LoginButton>;
};

export default LoginBtn;
