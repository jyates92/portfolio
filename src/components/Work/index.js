import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: ${({ isOdd }) => (isOdd ? "row" : "row-reverse")};
  align-items: flex-start;
`;

const Info = styled.div``;

const Preview = styled.div`
  width: 200px;
  img {
    width: 100%;
    height: auto;
    align-self: center;
  }
  margin: 0 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #2b8a3e;
  background-color: #ebfbee;
  border-radius: 3px;
  margin-left: 10px;
  padding: 6px;
`;

const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
  }
`;

const WorkItem = ({ img, title, description, links, index }) => (
  <Wrapper isOdd={index % 2}>
    <Preview>
      <img src={img} />
    </Preview>
    <Info>
      <h2>{title}</h2>
      <p>{description}</p>
      {links.map(({ href, title }) => (
        <Link href={href} target="_blank" title={title}>
          {title}
        </Link>
      ))}
    </Info>
  </Wrapper>
);

const Work = ({ projects }) => (
  <WorkWrapper id="work">
    <h1>My Work</h1>
    {projects.map((project, index) => (
      <WorkItem {...project} index={index} />
    ))}
  </WorkWrapper>
);

export default Work;
