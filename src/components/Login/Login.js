import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import getCookie from "./cookie";
import LoginPage from "./LoginPage";

/* 로그인 버튼 클릭 */
const ID = "jaewoo";
const PW = "123456";
/* cookie expire time */
const expireTime_72h = 60 * 60 * 24 * 3;
const expireTime_1h = 60 * 60;

const Login = () => {
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const failCount = useRef(0);
  const imgRef = useRef();
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
    } else if (localStorage.getItem("count") === 4) {
      // 로그인 실패 누적 4회 초과 시 -> 로그인 1시간 동안 차단 쿠키 생성.
      document.cookie = `blocked=true;max-age=${expireTime_1h}`;
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
    if (id === "" || pw === "") {
      alert("아이디 또는 패스워드를 입력해주세요");
      setID("");
      setPW("");
    } else if (id !== ID || pw !== PW) {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
      //setFailCount((prev) => prev + 1);
      failCount.current += 1;
      localStorage.setItem("count", failCount.current);
    } else {
      alert("로그인");
      localStorage.setItem("count", 0);
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "id") {
      setID(value);
    } else {
      setPW(value);
    }
  };
  // 로컬스토리지로부터 로그인 실패 횟수 가져오기
  const getFailCountAtLocalStorage = () => {
    let fc = Number(localStorage.getItem("count"));
    failCount.current = fc;
  };
  // 고양이 이미지 가져오기
  const getImageData = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?size=full")
      .then(async (response) => {
        const dataURL = response.data[0].url;
        imgRef.current.src = dataURL;
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getFailCountAtLocalStorage();
    getImageData();
  }, []);
  return (
    <LoginPage
      imgRef={imgRef}
      id={id}
      pw={pw}
      onChange={onChange}
      onLoginBtnClick={onLoginBtnClick}
    />
  );
};

export default Login;
