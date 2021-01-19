import React from "react";
import personal_picture from "../images/Percy.jpg";
import ThemeDot from "../components/ThemeDot";
import './IntroLeft.css'
const IntroLeft = () => {
  const colors_theme = [
    {
      id: "light-dot",
      mode: "light",
    },
    {
      id: "blue-dot",
      mode: "blue",
    },
    {
      id: "green-dot",
      mode: "green",
    },
    {
      id: "purple-dot",
      mode: "purple",
    },
  ];
  return (
    <div className="left-column">
      <img src={personal_picture} alt="person" id="profile_pic" />
      <h5>Personalize Them</h5>
      <div className="theme-options-wrapper">
        {colors_theme.map((color, index) => {
          return <ThemeDot id={color.id} key={index} mode = {color.mode}/>;
        })}
      </div>

      <p id="settings-note">
        *Theme will be saved for <br />
        your next visit
      </p>
    </div>
  );
};

export default IntroLeft;
