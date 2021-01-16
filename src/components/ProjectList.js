import React from "react";
import Project from "./Project";
import Pic1 from '../images/project1.jpg';
import Pic2 from '../images/project2.jpg';
import Pic3 from '../images/project3.jpg';

const ProjectList = () => {
  const projectList = [
    {
      img: Pic1,
      name: 'Comfy Sloth Store',
      description:
        "An e-commerce web app that allows customer to purchase suitable comfy.",
      url: "https://comfy-sloth-store.netlify.app/",
    },
    {
      img: Pic2,
      name: 'Movie Search',
      description:
        "A website I created that used OMDb API to search for plenty of movies in the database.",
      url: "https://movie-dbsearch.netlify.app/",
    },
    {
      img: Pic3,
      name: 'Project 3',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url: "https://www.reddit.com/",
    },
  ];
  return (
    <>
      <section className="s1">
        <div className="main-container">
          <h3 id = 'project-title'>My projects</h3>
          <div className="post-wrapper">
            {projectList.map((project, index) => {
              return <Project key={index} project = {project}/>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectList;
