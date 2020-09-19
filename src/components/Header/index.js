import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  padding: 15px 50px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  h1 {
    color: #212529;
  }
`;

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: #2b8a3e;
    background-color: #ebfbee;
    border-radius: 3px;
    margin-left: 10px;
    padding: 6px;
  }
`;

const Title = styled.h1``;
const Header = () => {
  return (
    <Wrapper>
      <Title>Jeremiah</Title>
      <Nav>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </Nav>
    </Wrapper>
  );
};

export default Header;
