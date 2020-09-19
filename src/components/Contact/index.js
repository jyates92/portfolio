import React, { useState } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import Confetti from "react-dom-confetti";

const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 40px 20px;
  span {
    color: #2b8a3e;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    copy("myemail@email.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <Wrapper>
      <Confetti active={copied} />
      <h1>Contact me</h1>
      <p>
        Simply click <span onClick={() => copyEmail()}>here</span> to get my
        email.
      </p>
    </Wrapper>
  );
};

export default Contact;
