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
          <h2>Hey </h2>
          <p>
            Now that there is the Tec-9, a crappy spray gun from South Miami.
            This gun is advertised as the most popular gun in American crime. Do
            you believe that shit? It actually says that in the little book that
            comes with it: the most popular gun in American crime. Like they're
            actually proud of that shit.{" "}
          </p>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default Bio;
