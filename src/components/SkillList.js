import React from "react";
import './SkillList.css'
const SkillList = () => {
  const skills = [
    "javascript (ES6)",
    "reactJS",
    "firebase",
    "nodeJS",
    "MongoDB",
    "PL/SQL",
    "netlify",
    "heroku",
    "html/css",
  ];
  return (
    <>
      <div id="skills">
        <ul>
          {skills.slice(0, skills.length / 2).map((skill, index) => {
            return (
              <li id = 'skill' key={index} style={{ textTransform: "capitalize" }}>
                {skill}
              </li>
            );
          })}
        </ul>

        <ul>
          {skills.slice(skills.length / 2, skills.length ).map((skill, index) => {
            return (
              <li id = 'skill' key={index} style={{ textTransform: "capitalize" }}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SkillList;
