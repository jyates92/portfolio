import React from "react";
import styled from "styled-components";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import filetext from "../../assets/file-text.svg";
import resume from "../../assets/Resume.jpg";

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
      <p>Jeremiah 2020</p>

      <Links>
        <a href="https://github.com/jyates92">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/jeremiah-yates/">
          <img src={linkedin} />
        </a>
        <a href="https://drive.google.com/file/d/1BxEdYOZqjnbzRh7T9cXkd_GL6a-rzZiP/view">
          <img src={filetext} />
        </a>
      </Links>
    </Wrapper>
  );
};

export default Footer;
