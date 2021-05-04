import React from "react";
import styled from "styled-components";

const login = () => {
  return (
    <Screen>
      <Login>
        <LoginHeader>로그인</LoginHeader>
        <LoginText>아이디</LoginText>
        <input type="text" />
        <LoginText>비밀번호</LoginText>
        <input type="password" />
        <button>로그인</button>
        <LoginJoin>회원가입</LoginJoin>
      </Login>
    </Screen>
  );
};

export default login;

const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98vh;
  background-color: rgba(245, 245, 245, 0.5);
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12%;
  padding: 20px 40px 40px;
  border-radius: 10px;
  background-color: rgb(19, 244, 113);

  input {
    width: 100%;
    height: 25px;
    outline: none;
    border: 1px solid green;
  }

  button {
    margin: 20px 0px;
    width: 105%;
    height: 30px;
    background-color: rgb(159, 244, 113);
    cursor: pointer;
    border: none;

    :hover {
      background-color: rgb(259, 244, 113);
    }
  }
`;

const LoginHeader = styled.h2`
  font-size: 30px;
`;

const LoginText = styled.div`
  font-size: 18px;
  margin: 10px;
`;

const LoginJoin = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
