import React from "react";
import SkillList from "./SkillList";
import social_img from "../images/linkedin.JPG";
import "./About.css";
const About = () => {
  return (
    <>
      <section className="s2">
        <div className="main-container">
          <div className="about-wrapper">
            <div className="about-me">
              <h4>More about me</h4>
              <p>
                My name is Percy Nguyen. I am an undergraduate at Seneca College
                in Toronto, Canada. My major is front-end development.
              </p>
              <p>
                I work to develop UX components client-side websites.I
                programmed myself the same way I work with computers, neat and
                organized.
              </p>
              <p>
                Currently, I am looking for an opportunities to work in the
                industries so that I could sharpen my skills as long as make a
                living for myself.
              </p>
              <hr />
              <h4>Top expertise</h4>
              <p>
                Even though I am more into Front-End development, I still have a
                good grasp of other programming language and databases. <br/>
                <a href="https://drive.google.com/file/d/1CCZiMaiZrT3InZuCePjZ5Ow_zrknnmpL/view?usp=sharing">Download my resume.</a>
              </p>
              <SkillList />
            </div>
            <div className="social-links">
              <img src={social_img} alt="social images" id="social_img" />
              <h3>Find me on LinkedIn and Github</h3>
              <a href="https://github.com/phast184">Github: @phast184</a>
              <a href="https://www.linkedin.com/in/percy-thanh-nguyen-87a720202/">
                LinkedIn: Percy Thanh Nguyen
              </a>
              <a href="/">Email: phatnguyen1841999@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
