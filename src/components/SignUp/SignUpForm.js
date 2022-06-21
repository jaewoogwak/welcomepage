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
const SignUpForm = ({
  onChange,
  idCheck,
  pwCheck,
  studentNumber,
  major,
  phoneNumber,
}) => {
  return (
    <>
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
    </>
  );
};

export default SignUpForm;
