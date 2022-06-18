import React from "react";
import styled from "styled-components";

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
const LoginForm = (props) => {
  return (
    <>
      <LoginInputId
        value={props.id}
        name="id"
        type="text"
        placeholder="아이디"
        onChange={props.onChange}
      />
      <LoginInputPw
        value={props.pw}
        name="pw"
        type="password"
        placeholder="비밀번호"
        onChange={props.onChange}
      />
    </>
  );
};

export default LoginForm;
