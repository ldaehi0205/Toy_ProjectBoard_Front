import React, { useState } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const Join = ({ history }) => {
  const [id, setid] = useState("");
  const [pw, setpw] = useState("");
  const [checkpw, setcheckpw] = useState("");
  const [name, setname] = useState("");

  const JoinSuccess = () => {
    alert("회원가입 완료!!");
    history.push("/login");
    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, pw: pw, name: name }),
    });
  };

  const Submit = () => {
    pw !== checkpw ? alert("비밀번호를 확인해주세요") : JoinSuccess();
  };

  const handleId = e => {
    setid(e.target.value);
  };

  const handlepw = e => {
    setpw(e.target.value);
  };

  const handlename = e => {
    setname(e.target.value);
  };

  const handleCheckpw = e => {
    setcheckpw(e.target.value);
  };

  return (
    <Screen>
      <LoginPage>
        <LoginId type="text" onChange={handleId} placeholder="아이디" />
        <LoginId type="text" onChange={handlename} placeholder="이름" />
        <LoginId type="password" onChange={handlepw} placeholder="비밀번호" />
        <LoginId
          type="password"
          onChange={handleCheckpw}
          placeholder="비밀번호 확인"
        />
        <CheckPwBox>
          {pw === checkpw && pw.length > 0 ? (
            <div className="true">비밀번호가 일치합니다.</div>
          ) : (
            <div className="false">비밀번호가 일치하지 않습니다.</div>
          )}
        </CheckPwBox>
        <button onClick={Submit}>Join</button>
        <LoginJoin>
          <Link to="/login">로그인</Link>
        </LoginJoin>
      </LoginPage>
    </Screen>
  );
};

export default withRouter(Join);

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
  height: 450px;
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

const CheckPwBox = styled.div`
  font-size: 18px;

  .false {
    color: red;
  }
`;
