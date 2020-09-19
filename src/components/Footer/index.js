import React from "react";
import styled from "styled-components";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import filetext from "../../assets/file-text.svg";

const Wrapper = styled.footer`
  text-align: center;
  padding: 40px;
  background: #2b8a3e;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-center: center;
`;

const Links = styled.div`
  display: flex;
  flex-diretion: row;
  a {
    padding: 5px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>Jeremy 2020</p>

      <Links>
        <a href="/">
          <img src={github} />
        </a>
        <a href="/">
          <img src={linkedin} />
        </a>
        <a href="/">
          <img src={filetext} />
        </a>
      </Links>
    </Wrapper>
  );
};

export default Footer;
