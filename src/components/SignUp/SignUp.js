import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapperHome = styled.div`
  display: grid;
  grid-template-rows: 100px 5fr;
`;

const NavBar = styled.nav`
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
`;

const NavBarLogo = styled.div`
  text-align: start;
  padding-left: 40px;
  font-size: 24px;
  @media screen and (max-width: 786px) {
    font-size: 18px;
  }
`;

const NavBarSignIn = styled.div`
  display: inline;
  text-decoration: none;
  font-size: 22px;
  color: black;
  font-weight: 400;
`;
const NavBarSignUp = styled.div`
  display: inline;
  text-decoration: none;
  font-size: 22px;
  color: black;
  font-weight: 400;
`;
const NavBarDropdown = styled.li`
  display: none;
`;
const SignUpWrapper = styled.div`
  padding: 40px;
  justify-content: center;
`;
const SignUpTitle = styled.h1`
  text-align: center;
  padding-bottom: 30px;
  font-size: 50px;
  font-weight: 900;
  @media screen and (max-width: 786px) {
    font-size: 34px;
  }
`;
const SignUpInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 786px) {
    font-size: 34px;
  }
`;
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
const RegisterBtn = styled.button`
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
const CancelBtn = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 0px 0px 20px 20px;
  background-color: #e8dcf8;
  color: #4c00b8;
  border: 0px;
  @media screen and (max-width: 786px) {
    font-size: 16px;
    width: 200px;
    height: 30px;
  }
`;
const SignUp = () => {
  return (
    <div>
      {" "}
      <WrapperHome>
        <NavBar>
          <NavBarLogo>
            <strong class="logo">jaewooworld</strong>
          </NavBarLogo>
          <NavBarSignIn>
            {" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </NavBarSignIn>
          <NavBarSignUp>
            <Link to="signup" style={{ textDecoration: "none" }}>
              Sign up
            </Link>{" "}
          </NavBarSignUp>
          <NavBarDropdown></NavBarDropdown>
        </NavBar>

        <SignUpWrapper>
          <SignUpTitle>Sign up</SignUpTitle>

          <SignUpInput>
            <img
              alt="cat"
              width="100"
              height="100"
              src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/109764302_3289428621149720_6353557589794353911_n.png?_nc_cat=102&ccb=1-6&_nc_sid=973b4a&_nc_ohc=Hhr5QaPhHtoAX9D1yta&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_jtV4AaS4YwvPXL4uFDq4YNmpqo8sucbiYsrTaeKaeWQ&oe=62A77819"
            />
            <SignUpInputId
              type="email"
              placeholder="아이디"
              oninput="EmailFormatChecker(this)"
              autofocus
              required
            />
            <CheckIdIsEqual></CheckIdIsEqual>
            <SignUpInputPw
              type="password"
              placeholder="비밀번호"
              oninput="passwordChecker(this)"
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
            <RegisterBtn>Register</RegisterBtn>
            <CancelBtn>cancel</CancelBtn>
          </SignUpInput>
        </SignUpWrapper>
      </WrapperHome>
    </div>
  );
};

export default SignUp;
