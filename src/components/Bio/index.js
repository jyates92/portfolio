import React from "react";
import styled from "styled-components";

import headshot from "../../assets/headshot.jpg";

const Wrapper = styled.div`
  background: #2b8a3e;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.div`
  img {
    width: 600px;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  position: relative;
  min-width: 250px;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
`;

const Info = styled.div`
  color: white;
  padding-left: 50px;
`;

const Bio = () => {
  return (
    <Wrapper>
      <Content>
        <Avatar>
          <img src={headshot} />
        </Avatar>
        <Info>
          <h2>Welcome to my Portfolio </h2>
          <p>
            I'm Jeremiah, a construction manager in Seattle, WA. I am passionate
            about development and am certified from the University of Washington
            in web development. I have a 120lb Bernese Mountain Dog, Opie, and
            live with my Fiance in West Seattle.{" "}
          </p>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default Bio;
