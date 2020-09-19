import React from "react";

import Header from "./components/Header";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";

import quizImg from "./assets/quiz.jpg";
import rngImg from "./assets/rng.jpg";
import weatherImg from "./assets/weather.jpg";

import "./App.css";

const projects = [
  {
    img: quizImg,
    title: "Fitness Tracker",
    description:
      "idjnasodasiodjsa adjasdi adjasod jasdojas dj asdoias jdoiasjdoi asjd",
    links: [
      { href: "www.google.com", title: "Github" },
      { href: "www.google.com", title: "Site" },
    ],
  },
  {
    img: rngImg,
    title: "Fitness Tracker",
    description:
      "idjnasodasiodjsa adjasdi adjasod jasdojas dj asdoias jdoiasjdoi asjd",
    links: [
      { href: "www.google.com", title: "Github" },
      { href: "www.google.com", title: "Site" },
    ],
  },
  {
    img: weatherImg,
    title: "Fitness Tracker",
    description:
      "idjnasodasiodjsa adjasdi adjasod jasdojas dj asdoias jdoiasjdoi asjd",
    links: [
      { href: "www.google.com", title: "Github" },
      { href: "www.google.com", title: "Site" },
    ],
  },
];

const App = () => (
  <>
    <Header />
    <Bio />
    <Work projects={projects} />
    <Contact />
    <Footer />
  </>
);

export default App;
