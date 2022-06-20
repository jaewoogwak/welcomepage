import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import SignUpForm from "./SignUpForm";

const WrapperHome = styled.div`
  display: grid;
  grid-template-rows: 100px 5fr;
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
  console.log("Re-render!");
  const imgRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [major, setMajor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const isEmailform = useRef(false);
  const idCheck = useRef();
  const pwCheck = useRef();

  // 이메일 형식 체커
  const EmailFormatChecker = (v) => {
    let value = v;
    var regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(value) === true) {
      isEmailform.current = true;
    } else {
      isEmailform.current = false;
    }

    // 정규식 공부하면 넣기
    if (isEmailform.current) {
      idCheck.current.innerHTML = "<strong style='color:blue'>좋아요!</strong>";
      isEmailform.current = true;
    } else if (value === "") {
      idCheck.current.innerHTML = "";
      isEmailform.current = false;
    } else {
      idCheck.current.innerHTML =
        "<strong>이메일 형식에 맞게 입력해주세요</strong>";
      isEmailform.current = false;
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log("onChange", name, value);
    if (name === "email") {
      setEmail(value);
      EmailFormatChecker(value);
      console.log(name, value);
    } else if (name === "password") {
      setPassword(value);
      passwordChecker();
      console.log(name, value);
    } else if (name == "passwordRepeat") {
      setPasswordRepeat(value);
      passwordChecker();
      console.log(name, value);
    } else if (name == "studentNumber") {
      setStudentNumber(value);
      handleOnInput(value);
    } else if (name == "phoneNumber") {
      setPhoneNumber(value);
      autoHypen(value);
    }
  };

  // 비밀번호 일치 체커
  const passwordChecker = () => {
    const passwordCheck = pwCheck.current;
    if (password == "" && passwordRepeat == "") {
      passwordCheck.innerHTML = "";
    } else if (password == passwordRepeat) {
      passwordCheck.innerHTML = "<strong style='color:blue'>좋아요!</strong>";
    } else {
      passwordCheck.innerHTML = "<strong>비밀번호가 일치하지 않습니다</strong>";
    }
  };
  // 학번 자릿수 제한
  // 학번에 따라 전공 자동 입력
  const handleOnInput = (stNumber, maxlength = 10) => {
    if (stNumber.length >= maxlength) {
      setStudentNumber(stNumber.slice(0, maxlength));
    }
    if (stNumber.length >= 6) {
      switch (stNumber.slice(5, 7)) {
        case "20":
          setMajor("기계공학부");
          break;
        case "36":
          setMajor("컴퓨터공학부");
          break;
        case "61":
          setMajor("전자정보통신공학부");
          break;
        case "51":
          setMajor("디자인공학부");
          break;
        case "72":
          setMajor("건축공학부");
          break;
        case "74":
          setMajor("에너지신소재화학공학부");
          break;
        case "80":
          setMajor("산업경영학부");
          break;
        default:
          setMajor("");
          break;
      }
    } else {
      setMajor("");
    }
  };
  // 전화번호 자동 하이픈 추가
  const autoHypen = (v) => {
    let value = v.replace(/\D+/g, "");
    const maxLength = 11;
    let result = "";
    for (let i = 0; i < value.length && i < maxLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }
    setPhoneNumber(result);
  };

  const getImageData = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?size=full")
      .then(async (response) => {
        const dataURL = response.data[0].url;
        console.log(`GET users`, dataURL);
        imgRef.current.src = dataURL;
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getImageData();
  }, []);
  return (
    <div>
      {" "}
      <WrapperHome>
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
            <SignUpForm
              idCheck={idCheck}
              pwCheck={pwCheck}
              email={email}
              password={password}
              studentNumber={studentNumber}
              major={major}
              phoneNumber={phoneNumber}
              onChange={onChange}
            />
            <RegisterBtn>Register</RegisterBtn>
            <CancelBtn>cancel</CancelBtn>
          </SignUpInput>
        </SignUpWrapper>
      </WrapperHome>
    </div>
  );
};

export default SignUp;
