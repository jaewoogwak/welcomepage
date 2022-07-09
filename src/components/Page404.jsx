import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";

const Page404 = () => {
  return (
    <div>
      <NavBar />
      <Wrapper>
        <Title>404 NOT FOUND</Title>
        <Description>요청하신 페이지를 찾을 수 없습니다.</Description>
        <Link to="/" style={{ textAlign: "center" }}>
          메인 페이지로 돌아가기
        </Link>
      </Wrapper>
    </div>
  );
};

export default Page404;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 30px;
`;

const Description = styled.p`
  text-align: center;
`;
