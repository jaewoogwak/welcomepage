import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import CancelBtn from "./Form/CancelBtn.jsx";
import LoginBtn from "./Form/LoginBtn";
import LoginForm from "./Form/LoginForm";

const LoginPage = ({ imgRef, id, pw, onChange, onLoginBtnClick }) => {
  return (
    <Wrapper>
      <NavBar></NavBar>
      <LoginWrapper>
        <LoginTitle>Login</LoginTitle>
        <LoginInput>
          <img
            ref={imgRef}
            alt="cat"
            width="100"
            height="100"
            src="https://blog.kakaocdn.net/dn/bVZmTE/btqBqpJPjfc/bVAXmVZcCH1ffZT96KkT3k/img.jpg"
          />
          <LoginForm id={id} pw={pw} onChange={onChange} />
          <LoginBtn onClick={onLoginBtnClick} />
          <CancelBtn />
        </LoginInput>
      </LoginWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 5fr;
`;
const LoginWrapper = styled.article`
  padding: 40px;
  justify-content: center;
`;
const LoginTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 900;
  @media screen and (max-width: 786px) {
    font-size: 34px;
  }
`;
const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default LoginPage;
