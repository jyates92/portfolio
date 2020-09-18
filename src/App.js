import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Work from "./components/Work";

const App = () => (
  <>
    <Header />
    <Bio />
    <Contact />
    <Work />
  </>
);

export default App;
