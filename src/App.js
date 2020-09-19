import React from "react";

import Header from "./components/Header";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";

import weatherImg from "./assets/weather.jpg";
import rngImg from "./assets/rng.jpg";
import noteTakerImg from "./assets/notetaker.jpg";

import "./App.css";

const projects = [
  {
    img: noteTakerImg,
    title: "Note Taker",
    description: "This application is handy for keeping reminder notes!",
    links: [
      { href: "https://github.com/jyates92/NoteTaker", title: "Github" },
      { href: "https://givemesomenotes.herokuapp.com/", title: "Site" },
    ],
  },
  {
    img: rngImg,
    title: "Random Number Generator",
    description:
      "This app takes random numbers, letters, and characters based on user input and returns a random string of specified length!",
    links: [
      { href: "https://github.com/jyates92/RandomNumberGen", title: "Github" },
      { href: "https://jyates92.github.io/RandomNumberGen/", title: "Site" },
    ],
  },
  {
    img: weatherImg,
    title: "Weather App",
    description:
      "This app utilizes a weather tracking API to return a 5 day forecast and today's forecast! Handy if you need to know the weather.",
    links: [
      { href: "https://github.com/jyates92/Weather-App", title: "Github" },
      { href: "https://jyates92.github.io/Weather-App/", title: "Site" },
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
