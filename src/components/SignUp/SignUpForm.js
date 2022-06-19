import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SignUpInputId = styled.input`
  width: 300px;
  height: 35px;
  padding-left: 10px;
  border-radius: 10px;
  border: 0.5px solid gray;
  @media screen and (max-width: 786px) {
    width: 200px;
    height: 30px;
  }
`;
const SignUpInputPw = styled.input`
  width: 300px;
  height: 35px;
  padding-left: 10px;
  border-radius: 10px;
  border: 0.5px solid gray;
  @media screen and (max-width: 786px) {
    width: 200px;
    height: 30px;
  }
`;
const SignUpInputPwRepeat = styled.input`
  width: 300px;
  height: 35px;
  padding-left: 10px;
  border-radius: 10px;
  border: 0.5px solid gray;
  @media screen and (max-width: 786px) {
    width: 200px;
    height: 30px;
  }
`;
const SignUpInputStudentNumber = styled.input`
  width: 300px;
  height: 35px;
  padding-left: 10px;
  border-radius: 10px;
  border: 0.5px solid gray;
  @media screen and (max-width: 786px) {
    width: 200px;
    height: 30px;
  }
`;
const SignUpInputPhoneNumber = styled.input`
  width: 300px;
  height: 35px;
  padding-left: 10px;
  border-radius: 10px;
  border: 0.5px solid gray;
  @media screen and (max-width: 786px) {
    width: 200px;
    height: 30px;
  }
`;
const SignUpInputMajor = styled.input`
  width: 300px;
  height: 35px;
  padding-left: 10px;
  border-radius: 10px;
  border: 0.5px solid gray;
  @media screen and (max-width: 786px) {
    width: 200px;
    height: 30px;
  }
`;
const CheckIdIsEqual = styled.div`
  width: 300px;
  padding-left: 15px;
  text-align: left;
  font-size: 12px;
  color: red;
  @media screen and (max-width: 786px) {
    width: 200px;
    padding-left: 15px;
    text-align: left;
    font-size: 12px;
    color: red;
  }
`;
const CheckPwIsEqual = styled.div`
  width: 300px;
  padding-left: 15px;
  text-align: left;
  font-size: 12px;
  color: red;
  @media screen and (max-width: 786px) {
    width: 200px;
    padding-left: 15px;
    text-align: left;
    font-size: 12px;
    color: red;
  }
`;
const CheckPhoneNumberIsValidFormat = styled.div`
  width: 300px;
  padding-left: 15px;
  text-align: left;
  font-size: 12px;
  color: red;
  @media screen and (max-width: 786px) {
    width: 200px;
    padding-left: 15px;
    text-align: left;
    font-size: 12px;
    color: red;
  }
`;
const SignUpForm = (props) => {
  return (
    <>
      {" "}
      <SignUpInputId
        name="email"
        type="email"
        placeholder="아이디"
        onChange={props.onChange}
        autoFocus
        required
      />
      <CheckIdIsEqual ref={props.idCheck}>test</CheckIdIsEqual>
      <SignUpInputPw
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={props.onChange}
        required
      />
      <SignUpInputPwRepeat
        type="password"
        placeholder="비밀번호 확인"
        oninput="passwordChecker(this)"
        required
      />
      <CheckPwIsEqual></CheckPwIsEqual>
      <SignUpInputStudentNumber
        type="number"
        oninput="handleOnInput(this, 10)"
        placeholder="학번"
        required
      />
      <SignUpInputMajor placeholder="전공" readonly />
      <SignUpInputPhoneNumber
        placeholder="전화번호"
        oninput="autoHypen(this)"
      />
      <CheckPhoneNumberIsValidFormat></CheckPhoneNumberIsValidFormat>
    </>
  );
};

export default SignUpForm;
