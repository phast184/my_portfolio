import React from "react";
import personal_picture from "../images/Percy.jpg";
import ThemeDot from "../components/ThemeDot";
import  './IntroLeft.css'
const IntroLeft = ({changeTheme}) => {
  const colors_theme = [
    {
      id: "light",
      theme: "light-theme",
    },
    {
      id: "blue",
      theme: "blue-theme",
    },
    {
      id: "green",
      theme: "green-theme",
    },
    {
      id: "purple",
      theme: "purple-theme",
    },
  ];
  return (
    <div className="left-column">
      <img src={personal_picture} alt="person" id="profile_pic" />
      <h5>Personalize Theme</h5>
      <div className="theme-options-wrapper">
        {colors_theme.map((color, index) => {
          return <ThemeDot id={color.id} key={index} mode = {color.mode} color = {color} changeTheme = {changeTheme}/>;
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
