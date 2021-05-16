import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function header() {
  return (
    <Link to="/main" style={{ textDecoration: "none" }}>
      <HeaderBar>Blog</HeaderBar>
    </Link>
  );
}

export default header;

const HeaderBar = styled.header`
  height: 40px;
  width: 95%;
  padding: 50px 40px;
  background-color: rgb(124, 185, 90);
  font-size: 32px;
  color: white;
`;
