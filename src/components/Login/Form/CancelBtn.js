import React from "react";
import styled from "styled-components";

const CancelButton = styled.button`
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
const CancelBtn = () => {
  return <CancelButton>Cancel</CancelButton>;
};

export default CancelBtn;
