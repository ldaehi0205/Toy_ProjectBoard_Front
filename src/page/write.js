import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import styled from "styled-components";

function write() {
  return (
    <>
      <Header />
      <ItemBox>
        <Link to="/main" style={{ textDecoration: "none" }}>
          <div className="writeBox">메인으로</div>
        </Link>
      </ItemBox>
      <Posting>
        <div>글 쓰기</div>
        <input></input>
        <textarea></textarea>
      </Posting>
    </>
  );
}

export default write;

const Posting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  margin: 20px auto;

  input {
    width: 100%;
    height: 40px;
    background-color: rgba(183, 183, 183, 0.2);
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 20px;
    outline: none;
  }

  textarea {
    width: 98%;
    height: 400px;
    margin-top: 10px;
    background-color: rgba(183, 183, 183, 0.2);
    border-radius: 5px;
    padding: 10px;
    outline: none;
  }
`;

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
