import { React, useState, useEffect } from "react";
import "./ThemeDot.css";


const ThemeDot = ({ id, changeTheme }) => {
 
  return (
    <>
      <div className="theme-dot" id={`${id}-dot`} onClick = {(e) => changeTheme(id)}></div>
    </>
  );
};

export default ThemeDot;
