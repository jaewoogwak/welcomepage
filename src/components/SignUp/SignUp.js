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
  //const [isEmailform, setIsEmailForm] = useState(false);
  const isEmailform = useRef(false);
  const idCheck = useRef();
  console.log("isEmailForm", isEmailform);
  const EmailFormatChecker = (v) => {
    console.log("EmailFormatChecker");
    let value = v;
    var regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    console.log("valiue", value);
    if (regEmail.test(value) === true) {
      console.log("true!!!!!");
      //setIsEmailForm(true);
      isEmailform.current = true;
    } else {
      console.log("false!!!");
      //setIsEmailForm(false);
      isEmailform.current = false;
      console.log("isEmailform.current", isEmailform.current);
    }

    // 정규식 공부하면 넣기
    if (isEmailform.current) {
      console.log("isEmailForm = true");
      idCheck.current.innerHTML = "<strong style='color:blue'>좋아요!</strong>";
      //setIsEmailForm(true);
      isEmailform.current = true;
    } else if (value == "") {
      console.log("isEmailForm = ");

      idCheck.current.innerHTML = "";
      // setIsEmailForm(false);
      isEmailform.current = false;
    } else {
      console.log("isEmailForm = false");

      idCheck.current.innerHTML =
        "<strong>이메일 형식에 맞게 입력해주세요</strong>";
      // setIsEmailForm(false);
      isEmailform.current = false;
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log("onChange", name, value);

    if (name == "email") {
      setEmail(value);
      EmailFormatChecker(value);
      console.log(name, value);
    } else if (name == "password") {
      setPassword(value);
      console.log(name, value);
    }
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
              email={email}
              password={password}
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
