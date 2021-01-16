import React from "react";
import Navbar from "./Navbar";
import personal_picture from "../images/Percy.jpg";
import Greeting from './Greeting'
import ThemeDot from './ThemeDot'
const Intro = () => {

  const colors_theme = ['light-dot', 'blue-dot', 'green-dot', 'purple-dot']
  return (
    <section className="s1">
      <div className="main-container">
        <Greeting context = {"Hello, I'm Percy Nguyen"} />
        <div className="intro-wrapper">
          <Navbar />
          <div className="left-column">
            <img src={personal_picture} alt="person" id="profile_pic" />
            <h5>Personalize Them</h5>
            <div className="theme-options-wrapper">
              {colors_theme.map((color, index) => {
                return <ThemeDot id = {color} key = {index} />
              })}
            </div>
            
            <p id="settings-note">
              *Theme will be saved for <br />
              your next visit
            </p>
          </div>
          <div className="right-column">
            <div className="preview-shadow">
              <div className="preview">
                <div className="corner" id="corner-tl"></div>
                <div className="corner" id="corner-tr"></div>

                <h3>What I Do</h3>
                <p>
                  I develop UX/UI for websites. Sometimes, I would like to embark on back-end development.
                </p>
                <div className="corner" id="corner-bl"></div>
                <div className="corner" id="corner-br"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
