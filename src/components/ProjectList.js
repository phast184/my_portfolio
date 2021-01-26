import React from "react";
import Project from "./Project";
import Pic1 from "../images/project1.jpg";
import Pic2 from "../images/project2.jpg";
import Pic3 from "../images/project3.jpg";
import Pic4 from "../images/project4.JPG";
import "./ProjectList.css";
const ProjectList = () => {
  const projectList = [
    {
      img: Pic1,
      name: "Comfy Sloth Store",
      description:
        "An e-commerce web app that allows customer to purchase suitable comfy.",
      features: "Features: display products, Cart functions, Login Authentication",
      demo: "https://comfy-sloth-store.netlify.app/",
      github: "https://github.com/phast184/compfy-sloth-store"
    },
    {
      img: Pic4,
      name: "Covid-19 Tracker",
      description: "Displaying the statistics of worldwide data on COVID-19. ",
      features:
        "Features: Map, Line Graph, Case type of data. Chart of worldwide top countries",
      demo: "https://covid-tracker-percy.netlify.app",
      github:"https://github.com/phast184/covid_tracker"
    },
    {
      img: Pic2,
      name: "Movie Search",
      description:
        "A website I created that used OMDb API to search for plenty of movies in the database.",
        features: "Features: Search movies by keywords, Movie details",
      demo: "https://movie-dbsearch.netlify.app/",
      github:"https://github.com/phast184/movie_search"
    },
    {
      img: Pic3,
      name: "Stock Photo",
      description:
        "Display free stock photos from Unsplash. User can also use this app to search by keywords.",
      features: "Features: gallery of free stock photos, search photos by keywords",
      demo: "https://stock-photos-hehe.netlify.app/",
      github:"https://github.com/phast184/stock-photos"
    },
  ];
  return (
    <>
      <section className="s1">
        <div className="main-container">
          <h3 id="project-title">My projects</h3>
          <div className="post-wrapper">
            {projectList.map((project, index) => {
              return <Project key={index} project={project} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectList;
