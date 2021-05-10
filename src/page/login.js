import React, { useState } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const Login = ({ history }) => {
  const [id, setid] = useState("");
  const [pw, setpw] = useState("");
  const [name, setName] = useState("");

  const Submit = () => {
    fetch("http://localhost:3001/user")
      .then(res => res.json())
      .then(res => res.data.post)
      .then(res =>
        res.some(e => {
          if (e.id === id && e.pw === pw) {
            setName(e.name);
            history.push("/main");
            return true;
          } else if (
            res[res.length - 1].id === e.id &&
            res[res.length - 1].pw === e.pw
          )
            alert("다시입력해주세요");
        })
      );
  };
  console.log(name);
  const handleId = e => {
    setid(e.target.value);
  };

  const handlepw = e => {
    setpw(e.target.value);
  };

  return (
    <Screen>
      <LoginPage>
        <LoginId
          className="id"
          type="text"
          name="id "
          onChange={handleId}
          placeholder="아이디"
        />

        <LoginId
          className="pw"
          type="password"
          name="pw "
          onChange={handlepw}
          placeholder="비밀번호"
        />
        <button onClick={Submit}>Login</button>
        <LoginJoin>
          <Link to="/join">회원가입</Link>
        </LoginJoin>
      </LoginPage>
    </Screen>
  );
};
export default withRouter(Login);

const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98vh;
  background-color: rgba(124, 185, 90, 0.8);
`;

const LoginId = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 0px;
  background-color: rgb(242, 242, 242);
  font-size: 16px;
`;

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 350px;
  padding: 60px 60px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);

  input::placeholder {
    font-size: 16px;
    opacity: 1;
  }

  button {
    margin: 20px 0px;
    width: 70%;
    height: 60px;
    background-color: rgba(85, 171, 85, 0.7);
    cursor: pointer;
    border: none;
    color: rgb(255, 255, 255);
    font-size: 18px;

    :hover {
      background-color: rgba(85, 171, 85, 1);
    }
  }
`;

const LoginJoin = styled.div`
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
`;
