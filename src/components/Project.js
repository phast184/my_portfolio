import React from "react";
import "./Project.css";
const Project = ({ project }) => {
  return (
    <article className="post">
      <img src={project.img} className="thumbnail" alt={project.name} />
      <div className="post-preview">
        <h6 className="post-title">{project.name}</h6>
        <p className="post-intro">{project.description}</p>
        <p>{project.features}</p>
        <div className="post-link">
          <a href={project.demo}>Live demo</a>
          <a href={project.github}>Source Code</a>
        </div>
      </div>
    </article>
  );
};
export default Project;
