import styled from "styled-components";
import CancelBtn from "../Login/CancelBtn";
import NavBar from "../NavBar/NavBar";

const SignUpForm = ({
  imgRef,
  onChange,
  idCheck,
  pwCheck,
  studentNumber,
  major,
  phoneNumber,
  register,
}) => {
  return (
    <>
      <NavBar></NavBar>
      <SignUpWrapper>
        <SignUpTitle>Sign up</SignUpTitle>
        <SignUpInput>
          <img
            ref={imgRef}
            alt="cat"
            width="100"
            height="100"
            src="https://blog.kakaocdn.net/dn/bVZmTE/btqBqpJPjfc/bVAXmVZcCH1ffZT96KkT3k/img.jpg"
          />
          <SignUpInputId
            onChange={onChange}
            name="email"
            type="email"
            placeholder="아이디"
            autoFocus
            required
          />
          <CheckIdIsEqual ref={idCheck} />
          <SignUpInputPassword
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
            required
          />
          <SignUpInputPwRepeat
            name="passwordRepeat"
            type="password"
            placeholder="비밀번호 확인"
            onChange={onChange}
            required
          />
          <CheckPwIsEqual ref={pwCheck} />
          <SignUpInputStudentNumber
            name="studentNumber"
            type="number"
            placeholder="학번"
            value={studentNumber}
            onChange={onChange}
            required
          />
          <SignUpInputMajor value={major} placeholder="전공" readOnly />
          <SignUpInputPhoneNumber
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            placeholder="전화번호"
            onChange={onChange}
          />
          <CheckPhoneNumberIsValidFormat />
          <RegisterBtn onClick={register}>Register</RegisterBtn>
          <CancelBtn>Cancel</CancelBtn>
        </SignUpInput>
      </SignUpWrapper>
    </>
  );
};

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
const SignUpInputPassword = styled.input`
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
export default SignUpForm;
