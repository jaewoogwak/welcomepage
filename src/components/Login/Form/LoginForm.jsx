import React from "react";
import styled from "styled-components";

const LoginForm = ({ id, pw, onChange }) => {
  return (
    <>
      <LoginInputId
        value={id}
        name="id"
        type="text"
        placeholder="아이디"
        onChange={onChange}
      />
      <LoginInputPw
        value={pw}
        name="pw"
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
      />
    </>
  );
};

const LoginInputId = styled.input`
  width: 300px;
  height: 45px;
  padding-left: 10px;
  border-radius: 20px 20px 0px 0px;
  border: 0.5px solid gray;
  @media screen and (max-width: 786px) {
    width: 200px;
    height: 30px;
  }
`;
const LoginInputPw = styled.input`
  width: 300px;
  height: 45px;
  padding-left: 10px;
  border-radius: 0px 0px 20px 20px;
  border: 0.5px solid gray;
  @media screen and (max-width: 786px) {
    width: 200px;
    height: 30px;
  }
`;

export default LoginForm;
