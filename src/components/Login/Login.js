import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CancelBtn from "./Form/CancelBtn";
import LoginBtn from "./Form/LoginBtn";
import LoginForm from "./Form/LoginForm";
import NavBar from "./NavBar/NavBar";

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
  padding-bottom: 30px;
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

/* 로그인 버튼 클릭 */
const ID = "jaewoo";
const PW = "123456";
/* cookie expire time */
const expireTime_72h = 60 * 60 * 24 * 3;
const expireTime_1h = 60 * 60;
const getCookie = (name) => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
const Login = () => {
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  //const [failCount, setFailCount] = useState(0);
  const failCount = useRef(0);
  console.log("falicount ", failCount.current);
  const onLoginBtnClick = () => {
    if (getCookie("blocked")) {
      // 로그인 실패 5회 이상이면 로그인 차단.
      alert(
        "로그인을 5회 이상 실패해서 차단되었습니다. 잠시 뒤에 다시 시도헤주세요"
      );
      return;
    }
    // cookie
    if (localStorage.getItem("count") == null) {
      // 로컬스토리지에 카운팅 플래그 존재하지 않으면, (처음 로그인 시도 -> 실패일 때)
      localStorage.setItem("count", 0);
    } else if (localStorage.getItem("count") == 4) {
      // 로그인 실패 누적 4회 초과 시 -> 로그인 1시간 동안 차단 쿠키 생성.
      document.cookie = `blocked=true;max-age=${expireTime_1h}`;
      //setFailCount((prev) => prev + 1);
      failCount.current += 1;
      localStorage.setItem("count", failCount.current);
      alert(
        "로그인을 5회 이상 실패해서 차단되었습니다. 잠시 뒤에 다시 시도헤주세요"
      );
      return;
    }
    document.cookie = `user_id=${id};max-age=${expireTime_72h}`;
    localStorage.setItem("userID", id);
    sessionStorage.setItem("userID", id);
    if (id == "" || pw == "") {
      alert("아이디 또는 패스워드를 입력해주세요");
      setID("");
      setPW("");
    } else if (id != ID || pw != PW) {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
      //setFailCount((prev) => prev + 1);
      failCount.current += 1;
      console.log("failcount.current", failCount.current);
      localStorage.setItem("count", failCount.current);
    } else {
      alert("로그인");
      localStorage.setItem("count", 0);
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name == "id") {
      setID(value);
      console.log(name, value);
    } else {
      setPW(value);
      console.log(name, value);
    }
  };
  const getFailCountAtLocalStorage = () => {
    let fc = Number(localStorage.getItem("count"));
    //setFailCount(fc);
    failCount.current = fc;
  };
  useEffect(() => {
    getFailCountAtLocalStorage();
  }, []);
  return (
    <div>
      {" "}
      <Wrapper>
        <NavBar></NavBar>
        <LoginWrapper>
          <LoginTitle>Login</LoginTitle>
          <LoginInput>
            {/* <img
              alt="cat"
              class="image"
              width="100"
              height="100"
              src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/109764302_3289428621149720_6353557589794353911_n.png?_nc_cat=102&ccb=1-6&_nc_sid=973b4a&_nc_ohc=Hhr5QaPhHtoAX9D1yta&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_jtV4AaS4YwvPXL4uFDq4YNmpqo8sucbiYsrTaeKaeWQ&oe=62A77819"
            /> */}
            <LoginForm id={id} pw={pw} onChange={onChange} />
            <LoginBtn onClick={onLoginBtnClick} />
            <CancelBtn />
          </LoginInput>
        </LoginWrapper>
      </Wrapper>
    </div>
  );
};

export default Login;
