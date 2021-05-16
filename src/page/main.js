import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Header />
      <ItemBox>
        <Link to="/write" style={{ textDecoration: "none" }}>
          <div className="writeBox">글쓰기</div>
        </Link>
      </ItemBox>
      <HeaderItem>
        <div>번호</div>
        <div className="title">제목</div>
        <div className="name">이름</div>
        <div>삭제</div>
      </HeaderItem>
    </>
  );
};

export default Main;

const ItemBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 99%;
  height: 30px;
  margin-top: 10px;

  .writeBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background-color: rgb(124, 185, 90);
    border-radius: 10px;
    color: white;
    font-size: 18px;
    cursor: pointer;

    :hover {
      color: black;
    }
  }
`;

const HeaderItem = styled.div`
  display: flex;
  justify-content: space-around;
  height: 25px;
  width: 99%;
  border: 1px solid rgb(183, 183, 183);
  padding: 15px 2px;
  margin-top: 10px;
  font-size: 20px;
  color: rgb(183, 183, 183);

  .title {
    margin-right: 500px;
  }

  .name {
    margin-right: 300px;
  }
`;
