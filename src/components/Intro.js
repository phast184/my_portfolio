import React from "react";
import Navbar from "./Navbar";
import Greeting from './Greeting'
import IntroRight from "./IntroRight";
import IntroLeft from "./IntroLeft";
import './Intro.css'
const Intro = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <Greeting context = {"Welcome to my personal space!"} />
        <div className="intro-wrapper">
          <Navbar />
          <IntroLeft />
          <IntroRight />
        </div>
      </div>
    </section>
  );
};

export default Intro;
